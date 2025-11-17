import { TeamMember } from "./TeamMember";
import teamMember1 from "@assets/generated_images/Team_member_portrait_male_189084a7.png";
import teamMember2 from "@assets/generated_images/Team_member_portrait_female_5420649e.png";

export function TeamSection() {
  const team = [
    {
      name: "David Okonkwo",
      role: "Founder & CEO",
      image: teamMember1,
    },
    {
      name: "Sarah Adeyemi",
      role: "Lead Designer",
      image: teamMember2,
    },
    {
      name: "Michael Chukwu",
      role: "Senior Developer",
    },
    {
      name: "Grace Nnadi",
      role: "Marketing Director",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-team-heading">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
