import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, DollarSign, Users, TrendingUp, Plus, Eye, Edit } from "lucide-react";

export default function InstructorOverview() {
  const stats = [
    {
      title: "Total Courses",
      value: "12",
      change: "+2 this month",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Total Students",
      value: "1,847",
      change: "+126 this week",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Total Earnings",
      value: "$47,582",
      change: "+$3,240 this month",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Wallet Balance",
      value: "$8,640",
      change: "Available to withdraw",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const courses = [
    { 
      id: 1,
      title: "Advanced React Development", 
      students: 487, 
      revenue: "$14,610", 
      rating: 4.8,
      reviews: 142,
      status: "Published",
      enrolledThisWeek: 23
    },
    { 
      id: 2,
      title: "Node.js Backend Mastery", 
      students: 356, 
      revenue: "$10,680", 
      rating: 4.9,
      reviews: 98,
      status: "Published",
      enrolledThisWeek: 18
    },
    { 
      id: 3,
      title: "TypeScript Complete Guide", 
      students: 294, 
      revenue: "$8,820", 
      rating: 4.7,
      reviews: 76,
      status: "Published",
      enrolledThisWeek: 12
    },
    { 
      id: 4,
      title: "GraphQL & Apollo Client", 
      students: 183, 
      revenue: "$5,490", 
      rating: 4.6,
      reviews: 45,
      status: "Draft",
      enrolledThisWeek: 8
    },
  ];

  const recentReviews = [
    { student: "Sarah Johnson", course: "Advanced React Development", rating: 5, comment: "Excellent course! Very detailed and well-structured.", time: "2 hours ago" },
    { student: "Michael Chen", course: "Node.js Backend Mastery", rating: 5, comment: "Best backend course I've taken. Highly recommended!", time: "5 hours ago" },
    { student: "Emily Davis", course: "TypeScript Complete Guide", rating: 4, comment: "Good content but could use more examples.", time: "1 day ago" },
  ];

  return (
    <DashboardLayout role="instructor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instructor Dashboard
            </h1>
            <p className="text-slate-400 mt-1">Manage your courses and track your performance</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-pink-500/30">
            <Plus className="h-4 w-4 mr-2" />
            Create New Course
          </Button>
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

        {/* Courses Table */}
        <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <BookOpen className="h-5 w-5" />
              Your Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="p-4 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-white text-lg">{course.title}</h3>
                        <Badge className={course.status === "Published" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"}>
                          {course.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students} students
                        </span>
                        <span>⭐ {course.rating} ({course.reviews} reviews)</span>
                        <span className="text-green-400">+{course.enrolledThisWeek} this week</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {course.revenue}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button size="sm" variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reviews */}
        <Card className="border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              Recent Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReviews.map((review, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-900/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-white">{review.student}</p>
                      <p className="text-sm text-slate-400">{review.course}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">{"⭐".repeat(review.rating)}</span>
                      <span className="text-xs text-slate-500">{review.time}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
