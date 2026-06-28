export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Next.js v15 Starter Kit</p>
          <p className="text-xs text-muted-foreground">
            빠른 웹개발을 위한 모던 스택
          </p>
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="/components-showcase" className="hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="mailto:support@example.com" className="hover:text-foreground transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
