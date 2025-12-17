import { useState, FormEvent } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CourseStatus = "Published" | "Draft";
type Course = { id: number; title: string; price: string; status: CourseStatus };

const seedCourses: Course[] = [
  { id: 1, title: "Social Media Marketing Mastery", price: "$49", status: "Published" },
  { id: 2, title: "Beginner Graphic Design", price: "$39", status: "Draft" },
  { id: 3, title: "WhatsApp Automation Blueprint", price: "$29", status: "Published" },
];

export default function InstructorCourses() {
  const [courses, setCourses] = useState<Course[]>(seedCourses);
  const [newCourse, setNewCourse] = useState<Omit<Course, "id">>({
    title: "",
    price: "",
    status: "Draft",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newCourse.title.trim() || !newCourse.price.trim()) return;

    const withDollar = newCourse.price.startsWith("$")
      ? newCourse.price
      : `$${newCourse.price}`;

    const course: Course = {
      id: Date.now(),
      title: newCourse.title.trim(),
      price: withDollar,
      status: newCourse.status,
    };

    setCourses((prev) => [course, ...prev]);
    setNewCourse({ title: "", price: "", status: "Draft" });
  };

  return (
    <DashboardLayout role="instructor">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Course catalog</p>
            <h1 className="text-lg font-semibold">Manage and launch offers</h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-lg border bg-card/70 p-4 md:grid-cols-4 md:items-end"
        >
          <div className="grid gap-2">
            <Label htmlFor="title">Course title</Label>
            <Input
              id="title"
              placeholder="e.g. TikTok Ads Sprint"
              value={newCourse.title}
              onChange={(e) => setNewCourse((prev) => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price (USD)</Label>
            <Input
              id="price"
              placeholder="49"
              value={newCourse.price}
              onChange={(e) => setNewCourse((prev) => ({ ...prev, price: e.target.value }))}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label>Status</Label>
            <Select
              value={newCourse.status}
              onValueChange={(value: CourseStatus) =>
                setNewCourse((prev) => ({ ...prev, status: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid">
            <Button
              type="submit"
              className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
            >
              Create course
            </Button>
          </div>
        </form>

        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3 text-sm font-medium">{course.title}</td>
                  <td className="px-4 py-3 text-sm">{course.price}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                      {course.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">Edit · View · Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
