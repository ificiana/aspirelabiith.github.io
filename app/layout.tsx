import { Inter, Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ROOT_METADATA } from "@/lib/metadata";

import "@/app/globals.css";

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

export const metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen flex flex-col font-sans antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="grow relative z-10">
            <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
              <article className="bg-card rounded-xl sm:rounded-2xl shadow-xl border border-border p-4 sm:p-6 md:p-10 lg:p-16 transition-colors duration-300">
                <div
                  className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl prose-slate dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl lg:prose-h1:text-6xl prose-h1:mb-4 sm:prose-h1:mb-6 md:prose-h1:mb-8 prose-h1:leading-tight prose-h1:text-foreground
                  prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-10 md:prose-h2:mt-12 prose-h2:mb-3 sm:prose-h2:mb-4 md:prose-h2:mb-5 prose-h2:text-foreground 
                  prose-h2:border-l-2 sm:prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-3 sm:prose-h2:pl-4
                  prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-2 sm:prose-h3:mb-3 prose-h3:text-foreground
                  prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
                  prose-a:text-primary prose-a:no-underline prose-a:font-semibold prose-a:border-b-2 prose-a:border-primary/30
                  hover:prose-a:text-primary hover:prose-a:border-primary/60 prose-a:transition-all prose-a:break-words
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-ul:my-4 sm:prose-ul:my-6 prose-li:text-foreground/90 prose-li:my-1 sm:prose-li:my-2
                  prose-ol:my-4 sm:prose-ol:my-6
                  prose-code:text-primary prose-code:bg-muted 
                  prose-code:px-1.5 sm:prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs sm:prose-code:text-sm prose-code:break-words
                  prose-pre:bg-muted prose-pre:shadow-lg prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto
                  prose-blockquote:border-l-2 sm:prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-accent/50 
                  prose-blockquote:py-2 sm:prose-blockquote:py-3 prose-blockquote:px-3 sm:prose-blockquote:px-4 prose-blockquote:italic
                  prose-img:rounded-lg sm:prose-img:rounded-xl prose-img:shadow-lg
                  prose-hr:border-border prose-hr:my-6 sm:prose-hr:my-8 md:prose-hr:my-10
                  prose-table:border prose-table:border-border prose-table:text-sm prose-table:overflow-x-auto prose-table:block sm:prose-table:table
                  prose-thead:bg-muted
                  prose-th:p-2 sm:prose-th:p-3 prose-th:font-semibold
                  prose-td:p-2 sm:prose-td:p-3 prose-td:border-t prose-td:border-border"
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
