"use client";
import SignInForm from "@/components/auth/SignInForm";

const SignInPage: React.FC = () => {
  return (
      <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
        <SignInForm /> 
      </div>
  );
};

export default SignInPage;