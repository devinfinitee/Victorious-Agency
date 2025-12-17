import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, Clock, TrendingUp, Play, CheckCircle2 } from "lucide-react";

export default function UserOverview() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "8",
      change: "2 in progress",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Completed Courses",
      value: "6",
      change: "75% completion rate",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Learning Hours",
      value: "127h",
      change: "This month: 24h",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Wallet Balance",
      value: "$240",
      change: "Available credit",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const activeCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "David Smith",
      progress: 65,
      lastAccessed: "2 hours ago",
      totalLessons: 48,
      completedLessons: 31,
      thumbnail: "react-course",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Lisa Anderson",
      progress: 42,
      lastAccessed: "1 day ago",
      totalLessons: 36,
      completedLessons: 15,
      thumbnail: "python-course",
    },
  ];

  const completedCourses = [
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "John Carter",
      completedDate: "2025-12-10",
      certificate: true,
      rating: 5,
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Wilson",
      completedDate: "2025-12-01",
      certificate: true,
      rating: 4,
    },
    {
      id: 5,
      title: "JavaScript ES6+ Essentials",
      instructor: "Michael Chen",
      completedDate: "2025-11-25",
      certificate: true,
      rating: 5,
    },
  ];

  const recentActivity = [
    { action: "Completed lesson", course: "Advanced React Development", lesson: "State Management with Redux", time: "2 hours ago" },
    { action: "Started course", course: "Python for Data Science", lesson: null, time: "1 day ago" },
    { action: "Earned certificate", course: "Digital Marketing Mastery", lesson: null, time: "7 days ago" },
  ];

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Learning Dashboard
          </h1>
          <p className="text-slate-400 mt-1">Track your progress and continue learning</p>
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
                </div>
                <p className="text-sm text-slate-400 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Learning */}
        <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Play className="h-5 w-5" />
              Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {activeCourses.map((course) => (
                <div key={course.id} className="p-4 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-32 h-20 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                      <BookOpen className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-white text-lg mb-1">{course.title}</h3>
                          <p className="text-sm text-slate-400">by {course.instructor}</p>
                        </div>
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                          Continue
                        </Button>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">
                            {course.completedLessons} of {course.totalLessons} lessons completed
                          </span>
                          <span className="text-sm font-medium text-white">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-slate-500 mt-2">Last accessed: {course.lastAccessed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Completed Courses */}
          <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5" />
                Completed Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {completedCourses.map((course) => (
                  <div key={course.id} className="p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{course.title}</h4>
                        <p className="text-sm text-slate-400">by {course.instructor}</p>
                      </div>
                      {course.certificate && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          <Award className="h-3 w-3 mr-1" />
                          Certified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Completed: {course.completedDate}</span>
                      <span className="text-yellow-400">{"⭐".repeat(course.rating)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2" />
                    <div className="flex-1">
                      <p className="text-white">
                        <span className="font-medium">{activity.action}</span>
                      </p>
                      <p className="text-sm text-slate-400">{activity.course}</p>
                      {activity.lesson && (
                        <p className="text-xs text-slate-500">{activity.lesson}</p>
                      )}
                      <p className="text-xs text-slate-600 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
