"use client";
import Image from "next/image";

export default function Affiliations() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Our Affiliations
          </h1>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        {/* Affiliations List */}
        <div className="space-y-8">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 lg:w-1/2 p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
                  <div className="relative w-full max-w-[600px] mx-auto">
                    <div className="aspect-[16/9] relative">
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                        <Image
                          src={affiliation.logo}
                          alt={affiliation.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-1/2 p-8 md:pl-10">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {affiliation.name}
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {affiliation.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Location
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {affiliation.location}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Established
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {affiliation.established}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Affiliated Programs
                      </h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {affiliation.programs.map((program, idx) => (
                          <li key={idx}>{program}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={affiliation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Visit University Website
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
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

const affiliations = [
  {
    name: "Jai Narain Vyas University(JNVU), Jodhpur",
    logo: "/about/jnvu.jpg", // Add university logo
    description:
      "Jai Narain Vyas University(JNVU), Jodhpur, formerly known as University of Jodhpur, is a prominent state university located in Jodhpur, Rajasthan. It has been a pioneer in higher education in Western Rajasthan since its establishment.",
    location: "Jodhpur, Rajasthan",
    established: "1962",
    website: "https://www.jnvu.edu.in",
    programs: [
      "Bachelor of Education (B.Ed.)",
      "Master of Education (M.Ed.)",
      "Bachelor of Arts (BA)",
      "Bachelor of Commerce (B.Com)",
      "Bachelor of Science (B.Sc)",
    ],
  }
];
