import { TeamMember } from "../TeamMember";
import teamMemberImage from "@assets/generated_images/Team_member_portrait_male_189084a7.png";

export default function TeamMemberExample() {
  return (
    <div className="max-w-xs">
      <TeamMember
        name="David Okonkwo"
        role="Founder & CEO"
        image={teamMemberImage}
      />
    </div>
  );
}
