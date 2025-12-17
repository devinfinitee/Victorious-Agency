import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const mockCourses = [
  { id: 1, title: "Social Media Marketing Mastery", instructor: "John Doe" },
  { id: 2, title: "WhatsApp Automation Blueprint", instructor: "Jane Smith" },
];

export default function UserCourses() {
  return (
    <DashboardLayout role="user">
      <section className="space-y-4">
        <h1 className="text-lg font-semibold">My Courses</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mockCourses.map((course) => (
            <div key={course.id} className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="h-32 w-full rounded-md bg-muted" />
              <p className="mt-3 text-sm font-semibold">{course.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">by {course.instructor}</p>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
