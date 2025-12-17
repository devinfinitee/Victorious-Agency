import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, DollarSign, TrendingUp, Activity, UserCheck } from "lucide-react";

export default function AdminOverview() {
  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Instructors",
      value: "127",
      change: "+8.2%",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Total Courses",
      value: "456",
      change: "+23.1%",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Total Revenue",
      value: "$284,592",
      change: "+34.7%",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const recentUsers = [
    { name: "Sarah Johnson", email: "sarah.j@email.com", role: "Student", status: "Active", joinedDate: "2025-12-15" },
    { name: "Michael Chen", email: "m.chen@email.com", role: "Instructor", status: "Active", joinedDate: "2025-12-14" },
    { name: "Emily Davis", email: "emily.d@email.com", role: "Student", status: "Active", joinedDate: "2025-12-14" },
    { name: "James Wilson", email: "j.wilson@email.com", role: "Student", status: "Pending", joinedDate: "2025-12-13" },
    { name: "Olivia Brown", email: "olivia.b@email.com", role: "Instructor", status: "Active", joinedDate: "2025-12-12" },
  ];

  const topCourses = [
    { title: "Advanced React Development", students: 1247, revenue: "$37,410", instructor: "David Smith" },
    { title: "Python for Data Science", students: 983, revenue: "$29,490", instructor: "Lisa Anderson" },
    { title: "Digital Marketing Mastery", students: 856, revenue: "$25,680", instructor: "John Carter" },
    { title: "Full Stack Web Development", students: 742, revenue: "$22,260", instructor: "Emma Wilson" },
  ];

  const recentActivity = [
    { action: "New course published", user: "Michael Chen", course: "Machine Learning Basics", time: "5 min ago" },
    { action: "Course purchased", user: "Sarah Johnson", course: "Advanced React Development", time: "12 min ago" },
    { action: "New instructor registered", user: "Olivia Brown", course: null, time: "1 hour ago" },
    { action: "Course updated", user: "David Smith", course: "Advanced React Development", time: "2 hours ago" },
    { action: "Withdrawal request", user: "Lisa Anderson", course: null, time: "3 hours ago" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-slate-400 mt-1">Welcome back! Here's what's happening with your platform.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-slate-400 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5" />
                Recent Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-sm text-slate-400">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-slate-300">{user.role}</Badge>
                      <Badge className={user.status === "Active" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"}>
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Courses */}
          <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5" />
                Top Performing Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCourses.map((course, index) => (
                  <div key={index} className="p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-white flex-1">{course.title}</p>
                      <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {course.revenue}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{course.students} students</span>
                      <span>by {course.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  <div className="flex-1">
                    <p className="text-white">
                      <span className="font-medium">{activity.action}</span>
                      {activity.course && <span className="text-slate-400"> - {activity.course}</span>}
                    </p>
                    <p className="text-sm text-slate-400">by {activity.user}</p>
                  </div>
                  <span className="text-sm text-slate-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
