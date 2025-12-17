import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const mockUsers = [
  { id: 1, name: "John Doe", role: "Instructor", status: "Active" },
  { id: 2, name: "Jane Smith", role: "User", status: "Active" },
];

export default function AdminUsers() {
  return (
    <DashboardLayout role="admin">
      <section className="space-y-4">
        <h1 className="text-lg font-semibold">Users</h1>
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3 text-sm font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-xs">{user.role}</td>
                  <td className="px-4 py-3 text-xs">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
