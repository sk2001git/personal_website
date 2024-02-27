"use client";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-900 w-full mt-5 h-full">
      <div className="w-full max-w-[85rem] py=10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <a
              className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
              aria-label="Brand"
            >
              Sean's Website
            </a>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Relevant Pages</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/profile"
                >
                  Profile
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href={`/profile/${process.env.MAIN_ID}`}
                >
                  Sean's Portfolio
                  
                </a>
              </p>
              
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Interest </h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg"
                >
                  Web Development
                </a>
              </p>
              <p>
                <a
                  className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg"
                  href="#"
                >
                  AI / ML Engineer
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Job Status:
                  <span className="inline ms-1 text-xs bg-green-500 text-white py-1 px-2 rounded-lg">
                    Looking for intern!
                  </span>
              
                </a>
              </p>
              
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Contact me!</h4>

           
            {/* Social Brands */}
          <div className="inline-flex  gap-x-2">
            <a
              className="m-2 w-10 bg-white h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://github.com/sk2001git"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="96"
                fill="#000"
                viewBox="0 0 98 96"
              >
                <path
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>


            </a>
            <a
              className="m-2 w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.linkedin.com/in/sean-koh-923224231"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="72"
                width="72"
                viewBox="0 0 72 72"
              >
                <path
                  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,0 64,0 L8,0 C3.581722,0 0,3.581722 0,8 L0,64 C0,68.418278 3.581722,72 8,72 Z"
                  fill="#007EBB"
                />
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="#FFF"
                />
              </svg>


            </a>

            {/* Add similar blocks for other social media icons */}
          </div>
          {/* End Social Brands */}
          </div>
          
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Sean. All rights reserved.</p>
          </div>
          {/* End Col */}

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;