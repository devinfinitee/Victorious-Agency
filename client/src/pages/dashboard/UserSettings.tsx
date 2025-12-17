import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function UserSettings() {
  return (
    <DashboardLayout role="user">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2 rounded-lg border bg-card p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Name</p>
              <p className="rounded-md border bg-background px-3 py-2">User Name</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="rounded-md border bg-background px-3 py-2">user@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
