"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

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

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
            <Link href="/" className="group flex items-center gap-3">
              <Logo />
              <div>
                <h1 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  ASPIRE Lab
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                  Autonomous Systems, Perception, Intelligence...
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <ul className="flex flex-wrap items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        pathname === item.url
                          ? "text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-slate-800"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
