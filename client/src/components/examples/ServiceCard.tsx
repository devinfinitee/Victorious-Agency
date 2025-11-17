import { ServiceCard } from "../ServiceCard";
import { CurrencyProvider } from "../CurrencyProvider";
import webDevImage from "@assets/generated_images/Website_development_service_illustration_eaf8ee36.png";

export default function ServiceCardExample() {
  return (
    <CurrencyProvider>
      <div className="max-w-sm">
        <ServiceCard
          id="web-dev"
          title="Custom Website Development"
          description="Professional, responsive websites tailored to your business needs with modern design and cutting-edge technology."
          priceUSD={1500}
          image={webDevImage}
          rating={5}
        />
      </div>
    </CurrencyProvider>
  );
}
