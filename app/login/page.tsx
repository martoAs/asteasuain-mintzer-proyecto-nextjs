import { auth } from '@/auth';
import LoginForm from '@/components/ui/login-form';
import { redirect } from 'next/navigation';
 
export default async function LoginPage() {
  const session = await auth();
  if(session)
    redirect("/admin")
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
        </div>
        <LoginForm />
      </div>
    </main>
  );
}