import React from "react";
import { ConfigCard } from "@/components/config-card";
import { configuration } from "@/lib/configurations";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col p-6 md:p-20">
      <div className="flex flex-row justify-between">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-12">
          VIM Cheatsheet
        </h1>
        <ThemeToggle />
      </div>
      {configuration.map((config) => (
        <React.Fragment key={config.sectionTitle}>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {config.sectionTitle}
          </h2>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-6">
            {config.sectionDescription}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
            {config.cards.map((c) => (
              <ConfigCard key={c.title} config={c} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </main>
  );
}
