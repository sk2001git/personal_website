import { getUserProjects, retrieveUserData } from '@/lib/actions/UserManagement';
import { Project } from '@/types';
import { auth } from '../api/auth/[...nextauth]/route3';
import ProjectCard from '@/components/profile/ProjectCard';



export default async function Profile() {
  const session = await auth();
  const userId = session?.user?.id;
  const projects = await getUserProjects(userId || "");
  console.log(projects);


  return (
    <section className="columnOverlay">
      <div className="inline-flex justify-between">
        <h2 className="section-text">
          Projects
        </h2>
        <a className="button-blue" href="/profile/create-proj">
          Create  Project
        </a>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        { projects?.map((project: Project) => (
            <ProjectCard project={project} key={project._id}/>
          )
        )}
      </div>
    </section>
  )



}