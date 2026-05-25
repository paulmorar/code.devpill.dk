import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function FourOhFour() {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
        :q!
      </p>
      <h1 className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
        404
      </h1>
      <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
        This page doesn&apos;t exist — but <kbd className="kbd">gg</kbd> back
        home and the cheatsheet is still waiting for you.
      </p>
      <div className="mt-10">
        <Link href="/">
          <Button size="lg">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back home
          </Button>
        </Link>
      </div>
    </main>
  );
}
