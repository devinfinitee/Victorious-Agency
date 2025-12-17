import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Courses from "@/pages/Courses";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import InstructorDashboardOverview from "@/pages/dashboard/InstructorOverview";
import InstructorDashboardCourses from "@/pages/dashboard/InstructorCourses";
import InstructorDashboardWallet from "@/pages/dashboard/InstructorWallet";
import InstructorDashboardAnalytics from "@/pages/dashboard/InstructorAnalytics";
import InstructorDashboardProfile from "@/pages/dashboard/InstructorProfile";
import UserDashboardOverview from "@/pages/dashboard/UserOverview";
import UserDashboardCourses from "@/pages/dashboard/UserCourses";
import UserDashboardWallet from "@/pages/dashboard/UserWallet";
import UserDashboardSettings from "@/pages/dashboard/UserSettings";
import AdminDashboardOverview from "@/pages/dashboard/AdminOverview";
import AdminDashboardUsers from "@/pages/dashboard/AdminUsers";
import AdminDashboardCourses from "@/pages/dashboard/AdminCourses";
import AdminDashboardTransactions from "@/pages/dashboard/AdminTransactions";
import AdminDashboardAnalytics from "@/pages/dashboard/AdminAnalytics";
import AdminDashboardSettings from "@/pages/dashboard/AdminSettings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/courses" component={Courses} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* Instructor / Admin (Course Seller) */}
      <Route path="/dashboard/instructor" component={InstructorDashboardOverview} />
      <Route path="/dashboard/instructor/courses" component={InstructorDashboardCourses} />
      <Route path="/dashboard/instructor/wallet" component={InstructorDashboardWallet} />
      <Route path="/dashboard/instructor/analytics" component={InstructorDashboardAnalytics} />
      <Route path="/dashboard/instructor/profile" component={InstructorDashboardProfile} />
      {/* User / Student */}
      <Route path="/dashboard/user" component={UserDashboardOverview} />
      <Route path="/dashboard/user/courses" component={UserDashboardCourses} />
      <Route path="/dashboard/user/wallet" component={UserDashboardWallet} />
      <Route path="/dashboard/user/settings" component={UserDashboardSettings} />
      {/* Super Admin / Manager */}
      <Route path="/dashboard/admin" component={AdminDashboardOverview} />
      <Route path="/dashboard/admin/users" component={AdminDashboardUsers} />
      <Route path="/dashboard/admin/courses" component={AdminDashboardCourses} />
      <Route path="/dashboard/admin/transactions" component={AdminDashboardTransactions} />
      <Route path="/dashboard/admin/analytics" component={AdminDashboardAnalytics} />
      <Route path="/dashboard/admin/settings" component={AdminDashboardSettings} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CurrencyProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
