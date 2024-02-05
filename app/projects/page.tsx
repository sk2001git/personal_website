import React from 'react';

const BlogArticle: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <a className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Back to Blog
              </a>

              <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">Announcing a free plan for small teams</h2>

              <div className="flex items-center gap-x-5">
                <a className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Company News
                </a>
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">January 18, 2023</p>
              </div>

              <p className="text-lg text-gray-800 dark:text-gray-200">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>

              <p className="text-lg text-gray-800 dark:text-gray-200">We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>

              <div className="text-center">
                <div className="grid lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure className="relative w-full h-60">
                      <img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                    </figure>
                    <figure className="relative w-full h-60">
                      <img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                    </figure>
                  </div>
                  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                    <img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Image Description"/>
                  </figure>
                </div>

                <span className="mt-3 block text-sm text-center text-gray-500">
                  Working process
                </span>
              </div>

              <p className="text-lg text-gray-800 dark:text-gray-200">As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>

              <p className="text-lg text-gray-800 dark:text-gray-200">That's why we are excited to share that we now have a <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on. With the free version, you can:</p>

              <ul className="pl-5 list-disc text-lg text-gray-800 dark:text-gray-200">
                <li>Invite unlimited team members</li>
                <li>Access basic project sharing features</li>
                <li>Get started with the basics of Preline</li>
              </ul>

              <p className="text-lg text-gray-800 dark:text-gray-200">We believe that by providing this free plan, we can continue to support small teams and individual designers, and help them create a collaborative environment that fosters creativity and innovation.</p>

              <p className="text-lg text-gray-800 dark:text-gray-200">Thank you for being a part of this journey with us. We're excited about what's ahead and look forward to seeing how you use Preline to create amazing things!</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-4">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Name"/>
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">John Doe</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Founder & CEO</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 2s1.5 2 1.5 4c0 3.5-3 6-7.5 6S3 9.5 3 6C3 4 4.5 2 4.5 2H16z"/></svg>
              <p className="text-sm text-gray-500">Joined in 2018</p>
            </div>

            <div className="flex items-center gap-2">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6" strokeWidth="4"/><line x1="6" y1="18" x2="6" y2="18" strokeWidth="4"/></svg>
              <p className="text-sm text-gray-500">25 projects</p>
            </div>

            <div className="flex items-center gap-2">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.55" y1="12" x2="13.89" y2="21.94"/></svg>
              <p className="text-sm text-gray-500">Design Lead</p>
            </div>

            <div className="flex items-center gap-2">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.55" y1="12" x2="13.89" y2="21.94"/></svg>
              <p className="text-sm text-gray-500">Product Designer</p>
            </div>

            <div className="flex items-center gap-2">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.55" y1="12" x2="13.89" y2="21.94"/></svg>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>

            <div className="flex items-center gap-2">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.55" y1="12" x2="13.89" y2="21.94"/></svg>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;