import { CourseCard } from "../CourseCard";
import { CurrencyProvider } from "../CurrencyProvider";

export default function CourseCardExample() {
  return (
    <CurrencyProvider>
      <div className="max-w-sm">
        <CourseCard
          id="web-dev-bootcamp"
          title="Modern Web Development Bootcamp"
          description="Master HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and launch your career as a full-stack developer."
          priceUSD={299}
          duration="12 weeks"
          students={1250}
          level="Beginner"
        />
      </div>
    </CurrencyProvider>
  );
}
