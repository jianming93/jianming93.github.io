export function SiteFooter() {
  return (
    <footer className="py-6 border-t-2 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Powered by:
          <br />
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary/[60.3%]"
          >
            {" Nextjs "}
          </a>
          |
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary/[60.3%]"
          >
            {" Shadcn "}
          </a>
          |
          <a
            href="https://ui.aceternity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary/[60.3%]"
          >
            {" Aceternity UI "}
          </a>
          |
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary/[60.3%]"
          >
            {" Typescript "}
          </a>
        </p>
      </div>
    </footer>
  )
}