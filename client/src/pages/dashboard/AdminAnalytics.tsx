import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ChartContainer, ChartConfig, ChartTooltipContent } from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const revenueData = [
  { month: "Jan", platform: 11200, payouts: 8200 },
  { month: "Feb", platform: 12800, payouts: 9100 },
  { month: "Mar", platform: 14900, payouts: 10300 },
  { month: "Apr", platform: 15800, payouts: 11000 },
  { month: "May", platform: 17100, payouts: 11800 },
  { month: "Jun", platform: 18950, payouts: 13200 },
];

const userGrowth = [
  { month: "Jan", instructors: 220, buyers: 1200 },
  { month: "Feb", instructors: 245, buyers: 1350 },
  { month: "Mar", instructors: 280, buyers: 1520 },
  { month: "Apr", instructors: 310, buyers: 1640 },
  { month: "May", instructors: 350, buyers: 1820 },
  { month: "Jun", instructors: 390, buyers: 1980 },
];

const chartConfig = {
  platform: {
    label: "Platform revenue",
    color: "#c084fc",
  },
  payouts: {
    label: "Instructor payouts",
    color: "#22d3ee",
  },
  instructors: {
    label: "Instructors",
    color: "#8b5cf6",
  },
  buyers: {
    label: "Buyers",
    color: "#38bdf8",
  },
} satisfies ChartConfig;

export default function AdminAnalytics() {
  return (
    <DashboardLayout role="admin">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs uppercase text-muted-foreground tracking-wide">Platform revenue</p>
              <h3 className="text-lg font-semibold">Gross vs payouts</h3>
            </div>
            <span className="text-xs text-muted-foreground">USD</span>
          </div>
          <ChartContainer config={chartConfig} className="w-full h-64">
            <ResponsiveContainer>
              <AreaChart data={revenueData} margin={{ left: 8, right: 8, top: 10 }}>
                <defs>
                  <linearGradient id="platform" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c084fc" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="payouts"
                  stroke="#22d3ee"
                  strokeWidth={2}
                  dot={{ strokeWidth: 0 }}
                  fill="transparent"
                />
                <Area
                  type="monotone"
                  dataKey="platform"
                  stroke="#c084fc"
                  strokeWidth={2}
                  fill="url(#platform)"
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs uppercase text-muted-foreground tracking-wide">Audience growth</p>
              <h3 className="text-lg font-semibold">Instructors vs buyers</h3>
            </div>
            <span className="text-xs text-muted-foreground">Monthly</span>
          </div>
          <ChartContainer config={chartConfig} className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={userGrowth} margin={{ left: 8, right: 8, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="buyers" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="instructors" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </section>
    </DashboardLayout>
  );
}
