"use client";

import * as React from "react";
import {
  ReaderIcon,
  CursorArrowIcon,
  ScissorsIcon,
  MagicWandIcon,
  CubeIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  StackIcon,
  RocketIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

import { ConfigCard } from "@/components/config-card";
import type { ConfigGeneric, SectionIconKey } from "@/lib/configurations";

const iconMap: Record<
  SectionIconKey,
  React.ComponentType<{ className?: string }>
> = {
  compass: ReaderIcon,
  cursor: CursorArrowIcon,
  scissors: ScissorsIcon,
  wand: MagicWandIcon,
  box: CubeIcon,
  search: MagnifyingGlassIcon,
  bookmark: BookmarkIcon,
  layers: StackIcon,
  rocket: RocketIcon,
};

function normalize(s: string) {
  return s.toLowerCase();
}

function filterConfig(
  configuration: ConfigGeneric[],
  query: string,
): ConfigGeneric[] {
  const q = normalize(query.trim());
  if (!q) return configuration;
  return configuration
    .map((section) => {
      const cards = section.cards
        .map((card) => {
          const entries = card.entries.filter(
            (e) =>
              normalize(e.command).includes(q) ||
              normalize(e.description).includes(q),
          );
          const titleHit =
            normalize(card.title).includes(q) ||
            normalize(card.description).includes(q);
          if (titleHit) return card;
          if (entries.length === 0) return null;
          return { ...card, entries };
        })
        .filter((c): c is NonNullable<typeof c> => c !== null);

      const sectionHit =
        normalize(section.sectionTitle).includes(q) ||
        normalize(section.sectionDescription).includes(q);

      if (sectionHit) return section;
      if (cards.length === 0) return null;
      return { ...section, cards };
    })
    .filter((s): s is ConfigGeneric => s !== null);
}

export function Cheatsheet({
  configuration,
}: {
  configuration: ConfigGeneric[];
}) {
  const [query, setQuery] = React.useState("");
  const filtered = React.useMemo(
    () => filterConfig(configuration, query),
    [configuration, query],
  );

  const totalCommands = React.useMemo(
    () =>
      configuration.reduce(
        (acc, s) =>
          acc + s.cards.reduce((a, c) => a + c.entries.length, 0),
        0,
      ),
    [configuration],
  );

  return (
    <>
      {/* Section nav */}
      <nav
        aria-label="Sections"
        className="sticky top-4 z-30 mx-auto mb-10 w-full max-w-fit rounded-full border border-border/60 bg-background/70 px-2 py-1.5 shadow-sm backdrop-blur"
      >
        <ul className="flex flex-wrap items-center justify-center gap-1">
          {configuration.map((section) => {
            const Icon = iconMap[section.iconKey];
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{section.sectionTitle}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Search */}
      <div className="mx-auto mb-12 w-full max-w-xl">
        <label htmlFor="cheatsheet-search" className="sr-only">
          Search commands
        </label>
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="cheatsheet-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${totalCommands} commands…`}
            className="h-11 w-full rounded-full border border-border/60 bg-card/80 pl-11 pr-11 text-sm shadow-sm outline-none ring-0 backdrop-blur placeholder:text-muted-foreground focus:border-primary/60 focus:shadow-md focus:shadow-primary/10"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Cross2Icon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sections */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 bg-card/40 p-12 text-center">
          <p className="text-sm text-muted-foreground">
            No commands match{" "}
            <span className="font-mono text-foreground">
              &ldquo;{query}&rdquo;
            </span>
            . Try a different search.
          </p>
        </div>
      ) : (
        filtered.map((section) => {
          const Icon = iconMap[section.iconKey];
          return (
            <section
              key={section.id}
              id={section.id}
              className="mb-16 scroll-mt-24"
            >
              <div className="mb-6 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {section.sectionTitle}
                  </h2>
                  <p className="mt-1 max-w-3xl text-sm text-muted-foreground sm:text-base">
                    {section.sectionDescription}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.cards.map((c) => (
                  <ConfigCard key={c.title} config={c} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
