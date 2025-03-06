'use client'
import Image from 'next/image';

export default function Administration() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Administration
          </h1>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        {/* Administration List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {administrators.map((admin, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_20px_-3px_rgba(0,0,0,0.1),0_10px_25px_-2px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_20px_-3px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <div className="relative w-36 h-36 flex-shrink-0">
                <div className="absolute inset-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20"></div>
                  <div className="relative h-full w-full bg-white dark:bg-gray-800 rounded-lg">
                    <Image
                      src={admin.image}
                      alt={admin.name}
                      fill
                      className="object-contain p-3"
                      sizes="144px"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {admin.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
                  {admin.position}
                </p>
                <div className="mt-3 space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                    <span className="text-sm">{admin.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-8.7-8.7-8.7v2c3.7 0 6.7 3 6.7 6.7z"/>
                    </svg>
                    <span className="text-sm">{admin.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const administrators = [
  {
    name: "Tajveer Singh Rathore",
    position: "Managing Director",
    email: "director@ace.edu.in",
    phone: "+91 9876543210",
    image: "/about/director.png"
  },
  {
    name: "Varun Chouhan",
    position: "Marketing Executive",
    email: "marketing@ace.edu.in",
    phone: "+91 9876543211",
    image: "/about/varun.jpg"
  },
  {
    name: "Bhom Singh Rathore",
    position: "Network Administrator",
    email: "network@ace.edu.in",
    phone: "+91 9876543212",
    image: "/about/BhomSinghRathore.jpg"
  },
  {
    name: "Rajaram",
    position: "Office In-charge",
    email: "office@ace.edu.in",
    phone: "+91 9876543213",
    image: "/about/rajaram.jpg"
  }
]; 