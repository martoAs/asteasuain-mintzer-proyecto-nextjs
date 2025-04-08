import { auth } from '@/auth';
import LoginForm from '@/components/ui/login-form';
import { redirect } from 'next/navigation';
 
export default async function LoginPage() {
  const session = await auth();
  if(session)
    redirect("/admin")
  return (
    <div className=" w-full flex flex-col items-center justify-center min-h-screen relative">
      <div className=" absolute">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
        </div>
        <LoginForm/>
      </div>
    </div>
  );
}