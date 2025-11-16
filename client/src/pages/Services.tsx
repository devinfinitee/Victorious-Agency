import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { ServiceCard } from "@/components/ServiceCard";
import { Search } from "lucide-react";
import { useState } from "react";
import webDevImage from "@assets/generated_images/Website_development_service_illustration_eaf8ee36.png";
import mobileAppImage from "@assets/generated_images/Mobile_app_service_illustration_f552d997.png";
import seoImage from "@assets/generated_images/SEO_service_illustration_7717d0b6.png";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");

  const allServices = [
    {
      id: "web-dev",
      title: "Custom Website Development",
      description: "Professional, responsive websites tailored to your business needs with modern design and cutting-edge technology. Includes hosting setup and SEO optimization.",
      priceUSD: 1500,
      image: webDevImage,
      category: "Web Development",
      rating: 5,
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android platforms.",
      priceUSD: 3000,
      image: mobileAppImage,
      category: "Mobile Development",
      rating: 5,
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies that drive organic traffic and improve search engine rankings.",
      priceUSD: 500,
      image: seoImage,
      category: "Digital Marketing",
      rating: 5,
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, customer analytics, and order tracking systems.",
      priceUSD: 2500,
      category: "Web Development",
      rating: 5,
    },
    {
      id: "ui-design",
      title: "UI/UX Design Services",
      description: "Beautiful, intuitive interfaces designed to enhance user engagement and drive conversions. Complete design systems and prototypes.",
      priceUSD: 800,
      category: "Design",
      rating: 5,
    },
    {
      id: "consulting",
      title: "Digital Strategy Consulting",
      description: "Expert guidance on digital transformation, technology stack selection, and business process optimization for modern enterprises.",
      priceUSD: 1200,
      category: "Consulting",
      rating: 5,
    },
    {
      id: "api-integration",
      title: "API Integration & Development",
      description: "Custom API development and third-party integrations to connect your systems and automate business processes seamlessly.",
      priceUSD: 1000,
      category: "Web Development",
      rating: 5,
    },
    {
      id: "maintenance",
      title: "Website Maintenance & Support",
      description: "Ongoing maintenance, updates, security monitoring, and technical support to keep your digital assets running smoothly.",
      priceUSD: 300,
      category: "Support",
      rating: 5,
    },
    {
      id: "cms",
      title: "CMS Development",
      description: "Custom content management systems that give you complete control over your website content without technical knowledge.",
      priceUSD: 1800,
      category: "Web Development",
      rating: 5,
    },
  ];

  const filteredServices = allServices.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-page-title">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive digital solutions tailored to your business needs
              </p>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search services..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search-services"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No services found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
