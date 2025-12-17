import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, DollarSign } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useCurrency } from "./CurrencyProvider";
import { useState } from "react";
import logo from "@assets/image_1762906246130.png";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { currency, toggleCurrency } = useCurrency();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 px-2 py-1 rounded-lg transition-all duration-300 hover:bg-white/5 group">
              <img src={logo} alt="VDE Logo" className="h-10 w-10 group-hover:scale-110 transition-transform" />
              <div className="hidden sm:block">
                <div className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Victorious Digital</div>
                <div className="text-xs text-slate-400">Enterprises</div>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`transition-all duration-300 ${isActive(link.href) ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCurrency}
              data-testid="button-currency-toggle"
              className="text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              title={`Switch to ${currency === "USD" ? "NGN" : "USD"}`}
            >
              <div className="flex items-center gap-1">
                <DollarSign className="h-5 w-5" />
                <span className="text-xs font-semibold">{currency}</span>
              </div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" data-testid="link-login">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300" data-testid="button-login">
                  Login
                </Button>
              </Link>
              <Link href="/register" data-testid="link-register">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                  data-testid="button-register"
                >
                  Register
                </Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-2 bg-slate-900/50 backdrop-blur">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start transition-all ${isActive(link.href) ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login">
                <Button variant="ghost" className="w-full text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
