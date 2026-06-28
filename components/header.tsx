"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2" aria-label="Next.js Starter - 홈">
            <span className="hidden font-bold sm:inline-block">
              Next.js Starter
            </span>
          </Link>
          <nav className="hidden gap-6 sm:flex">
            <Link
              href="/components-showcase"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
              className="rounded-full"
              aria-label="다크모드 토글"
            >
              {resolvedTheme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
