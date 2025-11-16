import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CoursesSection() {
  const courses = [
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
  ];

  return (
    <section className="py-16 lg:py-24" data-testid="section-courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-courses-heading">
            Courses Preview
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Level up your skills with our expert-led courses designed for real-world success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses" data-testid="link-all-courses">
            <Button size="lg" variant="outline" data-testid="button-view-all-courses">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
