import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-background/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row md:px-10">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            shadcn/ui
          </a>
          . Open source on{" "}
          <a
            href="https://github.com/devpill-dk/code.devpill.dk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            GitHub
            <GitHubLogoIcon className="h-3.5 w-3.5" />
          </a>
          .
        </p>
        <a
          href="https://www.vim.org/docs.php"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          Official Vim docs
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
