import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const courses = [
    {
      id: "launch-sprint",
      title: "7-Day Course Launch Sprint",
      description: "A to Z playbook to validate, pre-sell, and ship your first cohort with assets you can reuse every launch.",
      priceUSD: 299,
      duration: "7 days",
      students: 1250,
      level: "Beginner" as const,
    },
    {
      id: "paid-ads",
      title: "Paid Ads for Course Sellers",
      description: "Learn creative testing, retargeting, and funnel math built specifically for digital products and cohorts.",
      priceUSD: 349,
      duration: "10 days",
      students: 850,
      level: "Intermediate" as const,
    },
    {
      id: "evergreen",
      title: "Evergreen Automation Systems",
      description: "Automate enrollments, onboarding, and upsells with templates for email, chat, and in-product nudges.",
      priceUSD: 199,
      duration: "8 days",
      students: 2100,
      level: "Beginner" as const,
    },
  ];

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

      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden" data-testid="section-courses">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">For course sellers</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white" data-testid="text-courses-heading">
            Build products that
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">buyers finish and love</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Battle-tested operator courses that help you package, price, and scale your expertise into repeatable revenue.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses" data-testid="link-all-courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border-0" data-testid="button-view-all-courses">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
