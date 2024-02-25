import GoogleSignInButton from "./GoogleButton";

const SignInForm = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign In</h1>
            
          </div>

          <div className="mt-10 mb-10">
            {/* Google Sign In Button */}

            <GoogleSignInButton />

            
            

            
          </div>
        </div>
      </div>
    </div>  
  )
}

export default SignInForm;