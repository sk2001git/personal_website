import { auth } from '@/auth';
import Form from '@/components/Form';



export default async function CreateProject() {
  const session = await auth();
  const userId : string = session?.user?.id || "";

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Form userId={userId}/>
    </div>
  );
};






