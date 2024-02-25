import OtherProfilePageContent from "@/components/profile/OtherProfilePage"
import { getUserProjects } from "@/lib/actions/UserManagement"
import { Project } from "@/types/project"

type Props = {
  params: {user_id: string}
}

const OtherProfilePage = async ({params}: Props) => {
  const project: Project[] = await getUserProjects(params.user_id);
  
  return (
    <OtherProfilePageContent projects={project} />
  )
}

export default OtherProfilePage;