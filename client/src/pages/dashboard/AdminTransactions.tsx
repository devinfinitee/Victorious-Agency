import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const mockTransactions = [
  { id: 1, user: "John Doe", amount: "+$120", type: "Deposit" },
  { id: 2, user: "Jane Smith", amount: "-$49", type: "Course purchase" },
];

export default function AdminTransactions() {
  return (
    <DashboardLayout role="admin">
      <section className="space-y-4">
        <h1 className="text-lg font-semibold">Transactions</h1>
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx) => (
                <tr key={tx.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3 text-sm font-medium">{tx.user}</td>
                  <td className="px-4 py-3 text-xs font-semibold">{tx.amount}</td>
                  <td className="px-4 py-3 text-xs">{tx.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
