import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Clock, Users } from "lucide-react";
import { useCurrency } from "./CurrencyProvider";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  priceUSD: number;
  duration?: string;
  students?: number;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export function CourseCard({ 
  id, 
  title, 
  description, 
  priceUSD, 
  duration = "8 weeks",
  students = 0,
  level = "Beginner"
}: CourseCardProps) {
  const { formatPrice } = useCurrency();

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-course-${id}`}>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl line-clamp-2" data-testid={`text-course-title-${id}`}>
            {title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {level}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3" data-testid={`text-course-desc-${id}`}>
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students}+ students</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="text-2xl font-bold text-gold" data-testid={`text-course-price-${id}`}>
            {formatPrice(priceUSD)}
          </span>
        </div>
        <Link href={`/courses/${id}`} data-testid={`link-course-${id}`}>
          <Button className="bg-primary hover:bg-primary/90" data-testid={`button-buy-now-${id}`}>
            Buy Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
