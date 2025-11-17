import { ServiceCard } from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import webDevImage from "@assets/generated_images/Website_development_service_illustration_eaf8ee36.png";
import mobileAppImage from "@assets/generated_images/Mobile_app_service_illustration_f552d997.png";
import seoImage from "@assets/generated_images/SEO_service_illustration_7717d0b6.png";

export function ServicesSection() {
  const services = [
    {
      id: "web-dev",
      title: "Custom Website Development",
      description: "Professional, responsive websites tailored to your business needs with modern design and cutting-edge technology.",
      priceUSD: 1500,
      image: webDevImage,
      category: "web",
      rating: 5,
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      priceUSD: 3000,
      image: mobileAppImage,
      category: "mobile",
      rating: 5,
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies that drive organic traffic and improve rankings.",
      priceUSD: 500,
      image: seoImage,
      category: "seo",
      rating: 5,
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, and analytics.",
      priceUSD: 2500,
      category: "web",
      rating: 5,
    },
    {
      id: "ui-design",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to enhance user engagement and drive conversions.",
      priceUSD: 800,
      category: "design",
      rating: 5,
    },
    {
      id: "consulting",
      title: "Digital Strategy Consulting",
      description: "Expert guidance on digital transformation, technology stack selection, and business process optimization.",
      priceUSD: 1200,
      category: "consulting",
      rating: 5,
    },
  ];

  const allServices = services;
  const webServices = services.filter((s) => s.category === "web");
  const mobileServices = services.filter((s) => s.category === "mobile");
  const seoServices = services.filter((s) => s.category === "seo");

  return (
    <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-services-heading">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all" data-testid="tab-all-services">All</TabsTrigger>
            <TabsTrigger value="web" data-testid="tab-web-services">Web</TabsTrigger>
            <TabsTrigger value="mobile" data-testid="tab-mobile-services">Mobile</TabsTrigger>
            <TabsTrigger value="seo" data-testid="tab-seo-services">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seo" className="mt-6">
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
