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

  const levelColors = {
    Beginner: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400",
    Intermediate: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
    Advanced: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
  };

  return (
    <Card className="overflow-hidden group relative border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800/70 hover:to-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white/20" data-testid={`card-course-${id}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="gap-3 relative z-10">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg lg:text-xl line-clamp-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300" data-testid={`text-course-title-${id}`}>
            {title}
          </CardTitle>
          <Badge className={`shrink-0 border bg-gradient-to-r ${levelColors[level as keyof typeof levelColors]}`}>
            {level}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <p className="text-slate-300 text-sm line-clamp-3 group-hover:text-slate-200 transition-colors" data-testid={`text-course-desc-${id}`}>
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 group-hover:bg-white/10">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 group-hover:bg-white/10">
            <Users className="h-4 w-4" />
            <span>{students}+ students</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between gap-4 flex-wrap relative z-10">
        <div>
          <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid={`text-course-price-${id}`}>
            {formatPrice(priceUSD)}
          </span>
        </div>
        <Link href={`/courses/${id}`} data-testid={`link-course-${id}`}>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105" data-testid={`button-buy-now-${id}`}>
            Buy Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
