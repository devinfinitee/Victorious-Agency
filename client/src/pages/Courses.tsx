import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/CourseCard";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");

  const allCourses = [
    {
      id: "web-dev-bootcamp",
      title: "Modern Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and launch your career as a full-stack developer.",
      priceUSD: 299,
      duration: "12 weeks",
      students: 1250,
      level: "Beginner" as const,
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development with React Native",
      description: "Create stunning mobile apps for iOS and Android. Learn React Native, navigation, state management, and app deployment.",
      priceUSD: 349,
      duration: "10 weeks",
      students: 850,
      level: "Intermediate" as const,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      description: "Complete guide to SEO, social media marketing, content strategy, and analytics. Grow your business online effectively.",
      priceUSD: 199,
      duration: "8 weeks",
      students: 2100,
      level: "Beginner" as const,
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles, user research, prototyping, and creating beautiful interfaces using Figma and modern design tools.",
      priceUSD: 249,
      duration: "8 weeks",
      students: 920,
      level: "Beginner" as const,
    },
    {
      id: "advanced-react",
      title: "Advanced React & State Management",
      description: "Deep dive into React patterns, performance optimization, Redux, Context API, and modern React architecture.",
      priceUSD: 279,
      duration: "6 weeks",
      students: 680,
      level: "Advanced" as const,
    },
    {
      id: "backend-nodejs",
      title: "Backend Development with Node.js",
      description: "Build scalable backend systems with Node.js, Express, MongoDB, authentication, and RESTful API design.",
      priceUSD: 299,
      duration: "10 weeks",
      students: 1050,
      level: "Intermediate" as const,
    },
    {
      id: "python-data",
      title: "Python for Data Science",
      description: "Master Python, pandas, NumPy, data visualization, and machine learning basics for data analysis careers.",
      priceUSD: 329,
      duration: "12 weeks",
      students: 1420,
      level: "Beginner" as const,
    },
    {
      id: "devops",
      title: "DevOps & Cloud Engineering",
      description: "Learn Docker, Kubernetes, CI/CD pipelines, AWS, and modern DevOps practices for automated deployments.",
      priceUSD: 379,
      duration: "10 weeks",
      students: 540,
      level: "Advanced" as const,
    },
    {
      id: "ecommerce-build",
      title: "Building E-Commerce Platforms",
      description: "Complete course on creating full-featured e-commerce sites with payments, admin panels, and customer management.",
      priceUSD: 319,
      duration: "14 weeks",
      students: 780,
      level: "Intermediate" as const,
    },
  ];

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-accent/10 via-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-courses-page-title">
                Professional Courses
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert-led courses designed to accelerate your career growth
              </p>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search-courses"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No courses found matching your search.
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
