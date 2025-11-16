import { Header } from "../Header";
import { ThemeProvider } from "../ThemeProvider";
import { CurrencyProvider } from "../CurrencyProvider";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Header />
      </CurrencyProvider>
    </ThemeProvider>
  );
}
