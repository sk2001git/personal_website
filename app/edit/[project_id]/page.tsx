import { getProject } from "@/lib/actions/ProjectManagement";
import { getUsers, getUsersFromProject } from "@/lib/actions/UserManagement";
import { Project } from "@/types/project";
import { User } from "@/types/user";

type Props = {
  params: {project_id: string}
}

export default async function editProject({params}: Props) {
  const project: Project = await getProject(params.project_id);
  const teamMembers: User[] = await getUsersFromProject(params.project_id);
  const allUsers = await getUsers();
  if (!project) {
    return (<div>Project not found</div>);
  }


  
  return (
    <div> a </div>
  );

}