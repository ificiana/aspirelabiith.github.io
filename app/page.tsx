import { createMetadata } from "@/lib/metadata";
import Image from "next/image";
import UAVImage from "@/public/uav.jpg";
import HumanoidImage from "@/public/humanoid.png";
// import CBlockImage from "@/public/cblock.png";
import { Logo } from "@/components/logo";
import { newsItems } from "@/data/news";
import Link from "next/link";
import { Users, BookOpen, Briefcase } from "lucide-react";

export const metadata = createMetadata({
  title: "ASPIRE Lab - Autonomous Systems Research at IIT Hyderabad",
  description:
    "ASPIRE Lab at IIT Hyderabad advances autonomous robotic systems with perception, learning, and intelligent decision-making. Research includes aerial drones, quadruped robots, humanoid robots, and underwater robots using deep reinforcement learning and robot vision.",
  keywords: [
    "robotics research",
    "autonomous systems",
    "deep reinforcement learning",
    "robot vision",
    "aerial drones",
    "quadruped robots",
    "humanoid robots",
    "underwater robots",
    "AUV",
    "human-robot interaction",
    "control theory",
  ],
});

export default function Home() {
  return (
    <>
      {/* Split Hero - Image Left, Text Right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16 px-8 lg:px-16">
        <div className="flex items-center justify-center px-8 md:px-16">
          <div className="space-y-12 max-w-xl text-center">
            <Logo className="h-auto w-75 mx-auto" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              ASPIRE Lab
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed bg-background">
              Advancing Autonomous Robotic Systems with Perception, Learning,
              and Intelligent Decision-Making
            </p>
            <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
              Part of Department of Mechanical and Aerospace Engineering, IIT
              Hyderabad
            </p>
          </div>
        </div>
        <div className="relative min-h-150 lg:min-h-screen overflow-hidden bg-background rounded-3xl p-8 md:p-12">
          <div className="h-full flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest News</h2>
            <div className="overflow-y-auto space-y-6 pr-4 max-h-[75vh]">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-border transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <h3 className="text-xl font-semibold flex-1">
                        {item.link ? (
                          <Link
                            href={item.link}
                            className="hover:text-primary transition-colors"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <time className="text-sm text-muted-foreground whitespace-nowrap">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <Link
                      href={item.link ?? "#"}
                      className="text-sm text-primary font-semibold"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:p-16">
        {/* People CTA */}
        <Link
          href="/people"
          className="group relative overflow-hidden rounded-3xl bg-primary/5 p-8 hover:bg-primary/10 transition-all duration-300 hover:shadow-xl border border-border hover:border-primary/50"
        >
          <div className="space-y-4">
            <div className="flex space-x-4 items-center">
              <Users className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold">Meet Our Team</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Discover the talented researchers and students driving innovation
              at ASPIRE Lab.
            </p>
            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
              View Team <span className="ml-2">→</span>
            </div>
          </div>
        </Link>

        {/* Publications CTA */}
        <Link
          href="/publications"
          className="group relative overflow-hidden rounded-3xl bg-primary/5 p-8 hover:bg-primary/10 transition-all duration-300 hover:shadow-xl border border-border hover:border-primary/50"
        >
          <div className="space-y-4">
            <div className="flex space-x-4 items-center">
              <BookOpen className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold">Our Research</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Explore our latest publications and contributions to robotics and
              autonomous systems.
            </p>
            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
              View Publications <span className="ml-2">→</span>
            </div>
          </div>
        </Link>

        {/* Positions CTA */}
        <Link
          href="/positions"
          className="group relative overflow-hidden rounded-3xl bg-primary/5 p-8 hover:bg-primary/10 transition-all duration-300 hover:shadow-xl border border-border hover:border-primary/50"
        >
          <div className="space-y-4">
            <div className="flex space-x-4 items-center">
              <Briefcase className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold">Join Our Lab</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Looking for PhD, postdoc, or research positions? Check out
              available opportunities.
            </p>
            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
              View Positions <span className="ml-2">→</span>
            </div>
          </div>
        </Link>
      </section>

      <h1 className="text-4xl font-bold text-center mt-8 mb-4 md:mt-16 md:mb-8">
        About ASPIRE
      </h1>

      {/* Split Section - First para left, UAV Right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16 p-8 lg:p-16">
        <div className="relative min-h-150 lg:min-h-screen rounded-3xl bg-muted/20 p-4 md:p-8">
          <Image
            src={HumanoidImage}
            alt="Humanoid Robot Research"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>
        <div className="flex items-center justify-center bg-background my-auto px-8 md:px-16 py-8 lg:py-16">
          <div className="space-y-6 max-w-xl text-lg md:text-xl leading-relaxed">
            <p>
              <strong>ASPIRE Lab</strong> at IITH focuses on advancing{" "}
              <strong>autonomous robotic systems</strong> endowed with
              perception, learning, and intelligent decision-making in complex
              environments. Our research covers a broad spectrum of robotic
              platforms, including but not limited to, swarms of aerial drones,
              quadruped robots, biped / humanoid robots, human-robot
              interaction, wheeled mobile robots, and AUVs / underwater robots.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section - Humanoid Left, Second para right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16 p-8 lg:p-16">
        <div className="relative min-h-150 lg:min-h-screen rounded-3xl bg-muted/20 p-4 md:p-8 order-1 md:order-2">
          <Image
            src={UAVImage}
            alt="Aerial Drones and UAV Research"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>
        <div className="flex items-center justify-center bg-background my-auto px-8 md:px-16 py-8 lg:py-16 order-2 md:order-1">
          <div className="space-y-6 max-w-xl text-lg md:text-xl leading-relaxed">
            <p>
              Our work combines principles of conventional{" "}
              <strong>control</strong> theory with learning-based approaches
              such as <strong>deep reinforcement learning</strong> and{" "}
              <strong>robot vision</strong> to develop systems capable of
              adaptive, data-driven behavior. Through these efforts,{" "}
              <strong>ASPIRE</strong> aims to integrate model-based
              understanding with data-driven intelligence to develop reliable
              and efficient autonomous systems for <strong>exploration</strong>,
              interaction, and real-world operation.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Gallery Section */}
      {/* <section className="p-8 lg:p-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Upcoming</h2>
          <p className="text-xl text-muted-foreground">
            Stay tuned for exciting updates from ASPIRE Lab
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-3xl border-2 border-dashed border-border/50 bg-muted/20 flex items-center justify-center hover:border-primary/50 transition-all"
              >
                <p className="text-muted-foreground text-sm">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
