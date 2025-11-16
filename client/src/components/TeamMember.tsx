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
    <Card className="text-center hover-elevate transition-all" data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="pt-6 space-y-4">
        <Avatar className="h-24 w-24 mx-auto">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg" data-testid={`text-member-name-${name.toLowerCase().replace(/\s+/g, "-")}`}>
            {name}
          </h3>
          <p className="text-muted-foreground text-sm" data-testid={`text-member-role-${name.toLowerCase().replace(/\s+/g, "-")}`}>
            {role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
