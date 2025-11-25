import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASPIRE Lab",
  description:
    "Autonomous Systems, Perception, Intelligence, Robotics, and Exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen flex flex-col font-sans antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow relative z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
              <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 sm:p-12 lg:p-16 transition-colors duration-300">
                <div
                  className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl md:prose-h1:text-6xl prose-h1:mb-8 prose-h1:leading-tight prose-h1:text-gray-900 dark:prose-h1:text-white
                  prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-gray-900 dark:prose-h2:text-white 
                  prose-h2:border-l-4 prose-h2:border-primary-600 dark:prose-h2:border-primary-400 prose-h2:pl-4
                  prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-800 dark:prose-h3:text-gray-200
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline prose-a:font-semibold prose-a:border-b-2 prose-a:border-primary-300 dark:prose-a:border-primary-600
                  hover:prose-a:text-primary-700 dark:hover:prose-a:text-primary-300 hover:prose-a:border-primary-500 dark:hover:prose-a:border-primary-400 prose-a:transition-all
                  prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
                  prose-ul:my-6 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-2
                  prose-ol:my-6
                  prose-code:text-primary-700 dark:prose-code:text-primary-300 prose-code:bg-primary-50 dark:prose-code:bg-slate-800 
                  prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                  prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:shadow-lg prose-pre:border prose-pre:border-gray-700
                  prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50/50 dark:prose-blockquote:bg-slate-800/50 
                  prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:italic
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-hr:border-gray-300 dark:prose-hr:border-gray-700 prose-hr:my-10
                  prose-table:border prose-table:border-gray-300 dark:prose-table:border-gray-700
                  prose-thead:bg-gray-100 dark:prose-thead:bg-slate-800
                  prose-th:p-3 prose-th:font-semibold
                  prose-td:p-3 prose-td:border-t prose-td:border-gray-200 dark:prose-td:border-gray-700"
                >
                  {children}
                </div>
              </article>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
