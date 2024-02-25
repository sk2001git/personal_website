import Link from "next/link";

interface User {
  name: string;
  id: string;
}

const TeamMemberCard: React.FC<User> = ({name, id}) => {
  return (<Link href={`/profile/${id}`}>
    <div className="flex items-center justify-center gap-2 min-h-20 min-w-40 rounded-lg">
      <p className="text-lg font-semibold text-blue-600">{name}</p>
    </div>
  </Link>);
}
export default TeamMemberCard;