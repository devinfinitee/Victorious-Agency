import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_background_workspace_image_0417d6a4.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate blobs
      if (blobsRef.current) {
        gsap.to(blobsRef.current.children, {
          y: "random(-30, 30)",
          x: "random(-30, 30)",
          scale: "random(0.9, 1.1)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.5,
        });
      }

      // Entrance animations
      const tl = gsap.timeline();
      
      tl.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
      .from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3")
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4")
      .from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.2");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" ref={blobsRef}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Image Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: "fixed" }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sell smarter, ship faster</span>
        </div>

        {/* Main Heading */}
        <h1 ref={headingRef} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter" data-testid="text-hero-title">
          Launch and sell
          <br />
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">your courses globally</span>
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          Everything sellers need to package, price, and deliver high-impact courses — from landing pages to payments and analytics.
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/register" data-testid="link-explore-services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-base px-8 py-6 font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 hover:scale-105"
              data-testid="button-explore-more"
            >
              Start selling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/courses" data-testid="link-view-courses">
            <Button
              size="lg"
              className="backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 text-base px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
              data-testid="button-view-courses"
            >
              Preview marketplace
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1.2k+</div>
            <div className="text-sm text-slate-400 mt-1">Active sellers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$3.4m</div>
            <div className="text-sm text-slate-400 mt-1">Creator revenue processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">92%</div>
            <div className="text-sm text-slate-400 mt-1">Average course completion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
