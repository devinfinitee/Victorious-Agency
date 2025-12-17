import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="text-center group relative border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800/70 hover:to-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white/20 overflow-hidden" data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="pt-8 space-y-4 relative z-10">
        <Avatar className="h-28 w-28 mx-auto ring-2 ring-gradient-to-r ring-purple-500 ring-offset-2 ring-offset-slate-900 group-hover:ring-pink-500 transition-all duration-300">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300" data-testid={`text-member-name-${name.toLowerCase().replace(/\s+/g, "-")}`}>
            {name}
          </h3>
          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors" data-testid={`text-member-role-${name.toLowerCase().replace(/\s+/g, "-")}`}>
            {role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
