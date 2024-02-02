import { getUserProjects} from '@/lib/actions/UserManagement';
import { Project } from '@/types';
import ProjectCard from '@/components/profile/ProjectCard';
import { auth } from '@/auth';



export default async function Profile() {
  const session = await auth();
  const userId = session?.user?.id;
  const projects = await getUserProjects(userId || "");
    


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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        { projects?.map((project: Project) => (
              <ProjectCard project={project} key={project._id} />
            )
        )}
      </div>
    </section>
  )



}
