import { getUserProjects} from '@/lib/actions/UserManagement';
import { auth } from '@/auth';
import { DeleteButtonWrapper } from '@/context/DeleteButtonContext';
import ProfilePage from '@/components/profile/ProfilePage';



export default async function Profile() {
  const session = await auth();
  const userId = session?.user?.id;
  const projects = await getUserProjects(userId || "");
  

 
  return (
      <DeleteButtonWrapper>
        {projects && projects.length > 0 ? (
          <ProfilePage projects={projects} />
        ) : (
          <div className="flex justify-center items-center h-96">
            <h2 className="text-3xl font-semibold text-gray-800">
              No projects found
            </h2>
          </div>
        )}
      </DeleteButtonWrapper>

  )



}
