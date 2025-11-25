import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Home", url: "/" },
  { title: "People", url: "/people" },
  { title: "Publications", url: "/publications" },
  { title: "Projects", url: "/projects" },
  { title: "Positions", url: "/positions" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 mt-12 sm:mt-16 md:mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Brand section */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0">
                <Logo />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white">
                ASPIRE Lab
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Autonomous Systems, Perception, Intelligence, Robotics, and
              Exploration
            </p>
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden text-left sm:block">
            <h4 className="text-base font-display font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-primary-500 transform group-hover:translate-x-1 transition-transform shrink-0" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA section */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-display font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              Get Involved
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Join us in advancing robotics and AI research. Explore
              collaboration and research opportunities.
            </p>
            <Button asChild size="sm" className="w-auto">
              <Link
                href="/positions"
                className="group inline-flex items-center justify-center"
              >
                <span>View Positions</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 sm:pt-6 md:pt-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center">
          <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 order-2 sm:order-1">
            &copy; {currentYear}{" "}
            <span className="font-semibold">ASPIRE Lab</span>. All rights
            reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 order-1 sm:order-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
