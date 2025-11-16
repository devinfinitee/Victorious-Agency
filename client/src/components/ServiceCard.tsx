import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useCurrency } from "./CurrencyProvider";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  priceUSD: number;
  image?: string;
  rating?: number;
}

export function ServiceCard({ id, title, description, priceUSD, image, rating = 5 }: ServiceCardProps) {
  const { formatPrice } = useCurrency();

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-service-${id}`}>
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            data-testid={`img-service-${id}`}
          />
        </div>
      )}
      
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl line-clamp-2" data-testid={`text-service-title-${id}`}>
            {title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {Array(rating).fill("⭐").join("")}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-3" data-testid={`text-service-desc-${id}`}>
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="text-2xl font-bold text-gold" data-testid={`text-service-price-${id}`}>
            {formatPrice(priceUSD)}
          </span>
          <span className="text-sm text-muted-foreground ml-1">/ project</span>
        </div>
        <Link href={`/services/${id}`} data-testid={`link-service-${id}`}>
          <Button className="bg-primary hover:bg-primary/90" data-testid={`button-learn-more-${id}`}>
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
