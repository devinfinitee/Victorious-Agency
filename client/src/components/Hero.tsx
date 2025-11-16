import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_background_workspace_image_0417d6a4.png";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
          Powering Your
          <br />
          <span className="bg-gradient-to-r from-gold via-gold/80 to-gold bg-clip-text text-transparent">
            Digital Ascent
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8" data-testid="text-hero-subtitle">
          Unlock Potential with Expert Services & Tailored Solutions for Businesses
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/services" data-testid="link-explore-services">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-gold-foreground text-base px-8"
              data-testid="button-explore-more"
            >
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/courses" data-testid="link-view-courses">
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border-white/30 text-base px-8"
              data-testid="button-view-courses"
            >
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
