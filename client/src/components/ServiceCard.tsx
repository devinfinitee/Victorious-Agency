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
    <Card className="overflow-hidden group relative border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800/70 hover:to-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white/20" data-testid={`card-service-${id}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {image && (
        <div className="aspect-video overflow-hidden bg-muted relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            data-testid={`img-service-${id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
      )}
      
      <CardHeader className="gap-3 relative z-10">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg lg:text-xl line-clamp-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300" data-testid={`text-service-title-${id}`}>
            {title}
          </CardTitle>
          <Badge className="shrink-0 text-xs bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400">
            {Array(rating).fill("⭐").join("")}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <p className="text-slate-300 text-sm line-clamp-3 group-hover:text-slate-200 transition-colors" data-testid={`text-service-desc-${id}`}>
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between gap-4 flex-wrap relative z-10">
        <div>
          <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent" data-testid={`text-service-price-${id}`}>
            {formatPrice(priceUSD)}
          </span>
          <span className="text-sm text-slate-400 ml-1">/ project</span>
        </div>
        <Link href={`/services/${id}`} data-testid={`link-service-${id}`}>
          <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105" data-testid={`button-learn-more-${id}`}>
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
