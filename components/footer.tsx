import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Home,
  GraduationCap,
  User,
} from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import HZLogo from "../public/horzlogolong.png";

const iconMap = {
  Home,
  GraduationCap,
  User,
} as const;

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
                {SITE_CONFIG.name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              {SITE_CONFIG.fullName}
            </p>
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden text-left sm:block">
            <h4 className="text-base font-display font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
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
            <div className="flex">
              <Button asChild size="sm" className="w-auto mx-auto sm:mx-0">
                <Link
                  href="/positions"
                  className="group inline-flex items-center justify-center"
                >
                  <span>View Positions</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative w-[75%] h-16 mt-2 mx-auto sm:mx-0">
              <Image src={HZLogo} alt="IIT Hyderabad Logo" />
            </div>
            <address className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 not-italic mt-8">
              {SITE_CONFIG.address.line1}
              <br />
              {SITE_CONFIG.address.line2}
              <br />
              {SITE_CONFIG.address.line3}
              <br />
              {SITE_CONFIG.address.line4}
            </address>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 sm:pt-6 md:pt-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center">
          <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 order-2 sm:order-1">
            &copy; {currentYear}{" "}
            <span className="font-semibold">{SITE_CONFIG.name}</span>. All
            rights reserved <span className="hidden sm:inline">|</span>
            <span className="sm:hidden">
              <br />
            </span>{" "}
            <a
              href="https://www.freepik.com/icon/ai_4821724"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Logo by Freepik
            </a>
            <span className="hidden sm:inline"> | </span>
            <span className="sm:hidden">
              <br />
            </span>
            Designed and Maintained by{" "}
            <a
              href="https://ificiana.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Arka
            </a>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 order-1 sm:order-2">
            Inventing and Innovating in Technology for Humanity (IITH)
            <span className="hidden sm:inline"> - </span>
            <span className="sm:hidden">
              <br />
            </span>
            {SITE_CONFIG.institution}
          </p>
        </div>
      </div>
    </footer>
  );
}
