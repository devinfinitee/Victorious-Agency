import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const mockTransactions = [
  { id: 1, type: "Earning", amount: "+$120", date: "2025-11-01", status: "Completed" },
  { id: 2, type: "Withdrawal", amount: "-$80", date: "2025-11-03", status: "Pending" },
  { id: 3, type: "Earning", amount: "+$250", date: "2025-11-05", status: "Completed" },
];

export default function InstructorWallet() {
  return (
    <DashboardLayout role="instructor">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-xs text-muted-foreground">Wallet balance</p>
            <p className="mt-3 text-3xl font-semibold text-gold">$640.00</p>
            <p className="mt-2 text-xs text-muted-foreground">
              This is your available balance from course sales.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border bg-card">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b last:border-b-0">
                    <td className="px-4 py-3 text-xs">{tx.date}</td>
                    <td className="px-4 py-3 text-xs">{tx.type}</td>
                    <td className="px-4 py-3 text-xs font-semibold">{tx.amount}</td>
                    <td className="px-4 py-3 text-[11px]">
                      <span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm text-sm text-muted-foreground">
            Deposit and withdrawal actions will be wired to Paystack/Flutterwave later. This panel is UI-only for now.
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
