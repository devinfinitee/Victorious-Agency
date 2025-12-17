import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const mockCourses = [
  { id: 1, title: "Social Media Marketing", instructor: "John Doe", status: "Published" },
  { id: 2, title: "Design Basics", instructor: "Jane Smith", status: "Draft" },
];

export default function AdminCourses() {
  return (
    <DashboardLayout role="admin">
      <section className="space-y-4">
        <h1 className="text-lg font-semibold">All Courses</h1>
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Instructor</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockCourses.map((course) => (
                <tr key={course.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3 text-sm font-medium">{course.title}</td>
                  <td className="px-4 py-3 text-xs">{course.instructor}</td>
                  <td className="px-4 py-3 text-xs">{course.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
