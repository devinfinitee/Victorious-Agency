import { ServiceCard } from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import webDevImage from "@assets/generated_images/Website_development_service_illustration_eaf8ee36.png";
import mobileAppImage from "@assets/generated_images/Mobile_app_service_illustration_f552d997.png";
import seoImage from "@assets/generated_images/SEO_service_illustration_7717d0b6.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      id: "web-dev",
      title: "Launch-ready sales pages",
      description: "High-converting landing pages built for course sellers with order bumps, upsells, and checkout clarity.",
      priceUSD: 1500,
      image: webDevImage,
      category: "web",
      rating: 5,
    },
    {
      id: "mobile-app",
      title: "Mobile learning experiences",
      description: "Mobile-optimized delivery that keeps learners engaged and helps you reduce churn on every cohort.",
      priceUSD: 3000,
      image: mobileAppImage,
      category: "mobile",
      rating: 5,
    },
    {
      id: "seo",
      title: "Course discoverability SEO",
      description: "Rank your course pages, capture intent, and drive qualified traffic that converts to paid enrollments.",
      priceUSD: 500,
      image: seoImage,
      category: "seo",
      rating: 5,
    },
    {
      id: "ecommerce",
      title: "Payments & compliance",
      description: "Secure checkouts, taxes, receipts, and payout automation so you can focus on selling, not ops.",
      priceUSD: 2500,
      category: "web",
      rating: 5,
    },
    {
      id: "ui-design",
      title: "Branded course identity",
      description: "Visual systems and lesson layouts that make your course feel premium and trustworthy to buyers.",
      priceUSD: 800,
      category: "design",
      rating: 5,
    },
    {
      id: "consulting",
      title: "Launch & pricing strategy",
      description: "Positioning, pricing, and funnel strategy tailored to your niche so every launch hits its revenue target.",
      priceUSD: 1200,
      category: "consulting",
      rating: 5,
    },
  ];

  const allServices = services;
  const webServices = services.filter((s) => s.category === "web");
  const mobileServices = services.filter((s) => s.category === "mobile");
  const seoServices = services.filter((s) => s.category === "seo");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative" data-testid="section-services">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/20 mb-6 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Built for course sellers</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white" data-testid="text-services-heading">
            Your seller growth stack
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">designed to convert</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tools, pages, and playbooks built to help you package knowledge, close buyers, and keep learners engaged.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-slate-800/50 border border-white/10 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-slate-300" data-testid="tab-all-services">All</TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-slate-300" data-testid="tab-web-services">Web</TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-slate-300" data-testid="tab-mobile-services">Mobile</TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-slate-300" data-testid="tab-seo-services">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seo" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
