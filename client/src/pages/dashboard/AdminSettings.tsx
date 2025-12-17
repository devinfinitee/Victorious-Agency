import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function AdminSettings() {
  return (
    <DashboardLayout role="admin">
      <section className="space-y-4 rounded-lg border bg-card p-6 shadow-sm text-sm text-muted-foreground">
        Platform settings UI placeholder (fees, payout schedule, limits, etc.).
      </section>
    </DashboardLayout>
  );
}
