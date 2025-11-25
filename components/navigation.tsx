"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { title: "Home", url: "/" },
  { title: "People", url: "/people" },
  { title: "Publications", url: "/publications" },
  { title: "Projects", url: "/projects" },
  { title: "Positions", url: "/positions" },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-3 sm:py-4">
            <Link href="/" className="group flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                <Logo />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  ASPIRE Lab
                </h1>
                <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block line-clamp-1">
                  Autonomous Systems, Perception, Intelligence, Robotics, and
                  Exploration
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                        pathname === item.url
                          ? "text-primary bg-accent"
                          : "text-foreground/80 hover:text-primary hover:bg-accent"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {mounted && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 shrink-0"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>
              )}

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    aria-label="Toggle menu"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                  <SheetHeader>
                    <SheetTitle className="text-left hidden">Menu</SheetTitle>
                    <SheetDescription className="text-left hidden">
                      Navigate to different sections of the site
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="mt-6">
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.url}>
                          <Link
                            href={item.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                              pathname === item.url
                                ? "text-primary bg-accent"
                                : "text-foreground/80 hover:text-primary hover:bg-accent"
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
