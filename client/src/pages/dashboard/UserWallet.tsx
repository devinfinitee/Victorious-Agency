import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function UserWallet() {
  return (
    <DashboardLayout role="user">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-xs text-muted-foreground">Wallet balance</p>
            <p className="mt-3 text-3xl font-semibold text-gold">$120.00</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm text-sm text-muted-foreground">
            Deposit and purchase history UI placeholder.
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
