import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function InstructorProfile() {
  return (
    <DashboardLayout role="instructor">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 shadow-sm">
            <div className="h-20 w-20 rounded-full bg-muted" />
            <button className="text-xs font-medium text-primary underline-offset-2 hover:underline">
              Upload profile picture
            </button>
          </div>
        </div>
        <div className="space-y-4 md:col-span-2 rounded-lg border bg-card p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Full name</p>
              <p className="rounded-md border bg-background px-3 py-2">John Doe</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Headline</p>
              <p className="rounded-md border bg-background px-3 py-2">Digital Marketing Instructor</p>
            </div>
            <div className="md:col-span-2 space-y-1">
              <p className="text-xs text-muted-foreground">Bio</p>
              <p className="rounded-md border bg-background px-3 py-2 text-xs text-muted-foreground min-h-[80px]">
                Short instructor bio placeholder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
