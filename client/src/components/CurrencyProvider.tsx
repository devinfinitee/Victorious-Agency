import { createContext, useContext, useState } from "react";

type Currency = "USD" | "NGN";

type CurrencyContextType = {
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (usdPrice: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const NGN_TO_USD_RATE = 1600;

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "NGN" : "USD"));
  };

  const formatPrice = (usdPrice: number) => {
    if (currency === "USD") {
      return `$${usdPrice.toLocaleString()}`;
    } else {
      const ngnPrice = usdPrice * NGN_TO_USD_RATE;
      return `₦${ngnPrice.toLocaleString()}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
