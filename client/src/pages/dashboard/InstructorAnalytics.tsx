import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ChartContainer, ChartConfig, ChartTooltipContent } from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 3200, goal: 2500 },
  { month: "Feb", revenue: 4100, goal: 3000 },
  { month: "Mar", revenue: 5200, goal: 3800 },
  { month: "Apr", revenue: 4800, goal: 4200 },
  { month: "May", revenue: 6100, goal: 4500 },
  { month: "Jun", revenue: 6900, goal: 5000 },
];

const topCourses = [
  { title: "Social Media Mastery", sales: 180 },
  { title: "WhatsApp Automation", sales: 145 },
  { title: "Design Sprint Playbook", sales: 120 },
  { title: "Agency Systems", sales: 95 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#8b5cf6",
  },
  goal: {
    label: "Goal",
    color: "#22d3ee",
  },
  sales: {
    label: "Sales",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function InstructorAnalytics() {
  return (
    <DashboardLayout role="instructor">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs uppercase text-muted-foreground tracking-wide">Revenue trend</p>
              <h3 className="text-lg font-semibold">Last 6 months</h3>
            </div>
            <span className="text-xs text-muted-foreground">USD</span>
          </div>
          <ChartContainer config={chartConfig} className="w-full h-64">
            <ResponsiveContainer>
              <AreaChart data={revenueData} margin={{ left: 8, right: 8, top: 10 }}>
                <defs>
                  <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="goal"
                  stroke="#22d3ee"
                  strokeWidth={2}
                  dot={{ strokeWidth: 0 }}
                  fill="transparent"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fill="url(#revenue)"
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs uppercase text-muted-foreground tracking-wide">Top sellers</p>
              <h3 className="text-lg font-semibold">Courses driving revenue</h3>
            </div>
            <span className="text-xs text-muted-foreground">Last 30 days</span>
          </div>
          <ChartContainer config={chartConfig} className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={topCourses} margin={{ left: 8, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
                <XAxis dataKey="title" tickLine={false} axisLine={false} angle={-10} textAnchor="end" height={50} />
                <Tooltip content={<ChartTooltipContent nameKey="sales" />} />
                <Bar dataKey="sales" radius={[6, 6, 0, 0]} fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </section>
    </DashboardLayout>
  );
}
