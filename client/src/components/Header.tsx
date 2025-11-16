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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors">
              <img src={logo} alt="VDE Logo" className="h-10 w-10" />
              <div className="hidden sm:block">
                <div className="text-sm font-bold">Victorious Digital</div>
                <div className="text-xs text-muted-foreground">Enterprises</div>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={isActive(link.href) ? "bg-muted" : ""}
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
              className="hover-elevate active-elevate-2"
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
              className="hover-elevate active-elevate-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" data-testid="link-login">
                <Button variant="ghost" data-testid="button-login">
                  Login
                </Button>
              </Link>
              <Link href="/register" data-testid="link-register">
                <Button
                  className="bg-gold hover:bg-gold/90 text-gold-foreground"
                  data-testid="button-register"
                >
                  Register
                </Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${isActive(link.href) ? "bg-muted" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login">
                <Button variant="ghost" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className="w-full bg-gold hover:bg-gold/90 text-gold-foreground"
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
