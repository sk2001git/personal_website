import Content from "@/components/project-display-page/content"
import { getProject } from "@/lib/actions/ProjectManagement"
import { getTeamMembers } from "@/lib/actions/UserManagement"
import { Project } from "@/types/project"
import { get } from "http"


type Props = {
  params: {id: string}
}

const ProjectDetails = async ({params}: Props) => {
  const project: Project = await getProject(params.id);
  const teamMembers = await getTeamMembers(project.Team);

  
  if (!project) {
    return <div>Project not found</div>
  }

  const plainProject = {
    _id: project._id.toString(),
    title: project.title,
    summary: project.summary,
    link: project.link,
    documentation: project.documentation,
    description: project.description,
    Image: project.Image,
    ProjectCategory: project.ProjectCategory,
    Team: project.Team.map((id) => id.toString())
  };

  const plainUsers = teamMembers.map((user) => {
    return {
      _id: user._id.toString(),
      name: user.username
    }
  });

  return (
    <Content project={plainProject} users={plainUsers} />
  );
}

export default ProjectDetails;