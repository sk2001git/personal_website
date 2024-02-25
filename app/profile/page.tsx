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
        <ProfilePage projects={projects} />
      </DeleteButtonWrapper>

  )



}
