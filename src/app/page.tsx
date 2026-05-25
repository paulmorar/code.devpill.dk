import { KeyboardIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Cheatsheet } from "@/components/cheatsheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteFooter } from "@/components/site-footer";
import { configuration } from "@/lib/configurations";

export default function Home() {
  const totalSections = configuration.length;
  const totalCommands = configuration.reduce(
    (acc, s) => acc + s.cards.reduce((a, c) => a + c.entries.length, 0),
    0,
  );

  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pt-16">
        {/* Top bar */}
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
              <KeyboardIcon className="h-4 w-4" />
            </span>
            code.devpill.dk
          </Link>
          <ThemeToggle />
        </div>

        {/* Hero */}
        <section className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <LightningBoltIcon className="h-3.5 w-3.5" />
            {totalCommands} commands across {totalSections} sections
          </span>
          <h1 className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            The Vim Cheatsheet
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A modern, opinionated reference of the commands that actually earn
            their place in your muscle memory — from{" "}
            <kbd className="kbd">:q</kbd> to <kbd className="kbd">q@a</kbd>.
          </p>
        </section>

        <Cheatsheet configuration={configuration} />
      </main>
      <SiteFooter />
    </>
  );
}
