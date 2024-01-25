import Form from '@/components/Form';
import { auth } from '../../api/auth/[...nextauth]/route3';



export default async function CreateProject() {
  const session = await auth();

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Form session={session}  />
    </div>
  );
};






