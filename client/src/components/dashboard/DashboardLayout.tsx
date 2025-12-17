import { ReactNode } from "react";
import { useLocation, Link } from "wouter";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, User } from "lucide-react";

interface DashboardLayoutProps {
  role: "instructor" | "user" | "admin";
  children: ReactNode;
}

const navByRole: Record<DashboardLayoutProps["role"], { href: string; label: string }[]> = {
  instructor: [
    { href: "/dashboard/instructor", label: "Overview" },
    { href: "/dashboard/instructor/courses", label: "Courses" },
    { href: "/dashboard/instructor/wallet", label: "Wallet" },
    { href: "/dashboard/instructor/analytics", label: "Analytics" },
    { href: "/dashboard/instructor/profile", label: "Profile" },
  ],
  user: [
    { href: "/dashboard/user", label: "Overview" },
    { href: "/dashboard/user/courses", label: "My Courses" },
    { href: "/dashboard/user/wallet", label: "Wallet" },
    { href: "/dashboard/user/settings", label: "Settings" },
  ],
  admin: [
    { href: "/dashboard/admin", label: "Overview" },
    { href: "/dashboard/admin/users", label: "Users" },
    { href: "/dashboard/admin/courses", label: "Courses" },
    { href: "/dashboard/admin/transactions", label: "Transactions" },
    { href: "/dashboard/admin/analytics", label: "Analytics" },
    { href: "/dashboard/admin/settings", label: "Settings" },
  ],
};

export function DashboardLayout({ role, children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const navItems = navByRole[role];

  return (
    <SidebarProvider className="min-h-screen">
      <Sidebar collapsible="offcanvas" variant="inset">
        <SidebarHeader>
          <div className="flex items-center justify-between px-2 py-1">
            <Link href="/">
              <span className="text-sm font-semibold tracking-tight">VDE Dashboard</span>
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href}>
                    <SidebarMenuButton isActive={location === item.href}>
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
          <div className="flex items-center justify-between px-2 py-1 text-xs text-muted-foreground">
            <span>Role: {role}</span>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex items-center justify-between border-b px-4 py-3 bg-background/80 backdrop-blur">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-sm font-semibold capitalize text-muted-foreground">
              {role} dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <main className="flex-1 px-4 py-4 md:px-6 md:py-6 bg-background">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
