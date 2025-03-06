'use client'
import Image from 'next/image';

export default function AboutOverview() {
  return (
    <main className="pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[300px] sm:h-[400px]">
          <Image
            src="/college-logo.png" // Add your hero image
            alt="Aishwarya College Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
              About Aishwarya College of Education
            </h1>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Our Legacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Established in [YEAR], Aishwarya College of Education has been at the forefront 
              of academic excellence and innovation. Our institution has consistently 
              maintained high standards in education, research, and professional development.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are committed to providing quality education that empowers students 
              with knowledge, skills, and values necessary for their professional success 
              and personal growth in an increasingly competitive global environment.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Why Choose ACE?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const keyFeatures = [
  {
    title: "Expert Faculty",
    description: "Highly qualified and experienced teaching staff dedicated to student success",
    icon: (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities and advanced learning resources",
    icon: (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Industry Connect",
    description: "Strong partnerships with leading companies for better placement opportunities",
    icon: (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const statistics = [
  {
    value: "1000+",
    label: "Students"
  },
  {
    value: "50+",
    label: "Faculty Members"
  },
  {
    value: "95%",
    label: "Placement Rate"
  },
  {
    value: "20+",
    label: "Years of Excellence"
  },
]; 