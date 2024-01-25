import GoogleSignInButton from "./GoogleButton";

const SignInForm = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don't have an account yet? &nbsp;
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="../auth/sign-up"
              >
                Sign up here
              </a>
            </p>
          </div>

          <div className="mt-5">
            {/* Google Sign In Button */}

            <GoogleSignInButton />

            
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

            {/* Form */}
            <form>
              <div className="grid gap-y-4">
               <div className="space-y-2">
                   <label htmlFor="email" className="labelForm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="inputForm"
                    placeholder="Enter your email address "
                  />
                </div>
                <div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="labelForm">
                      Password
                    </label>
                    
                    <input
                      id="password"
                      type="password"
                      className="inputForm"
                      placeholder="Enter your passsword "
                    />
                  </div>
                </div>
                
                <div>
                  <a
                    className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="../auth/forgot-password"
                  >
                    Forgot password?
                  </a>
                </div>
               

              

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>  
  )
}

export default SignInForm;