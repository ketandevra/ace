"use client";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Message from the Director
          </h1>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        {/* Director Profile and Message */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Director's Photo Section */}
            <div className="md:w-1/4 bg-white dark:bg-gray-800">
              <div className="p-6 md:p-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="aspect-[3/4] relative rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white dark:bg-gray-800">
                      <Image
                        src="/about/director.png"
                        alt="College Director"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center border-t border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Tajveer Singh Rathore</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:w-3/4 p-4 md:p-6 lg:p-8">
              <div className="prose dark:prose-invert max-w-none">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Dear Students and Parents,
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  In the new knowledge age, intellectual competitiveness is
                  essential for achieving the status of a leader. For this,
                  quality education, more so with a lot practical orientation is
                  of paramount importance. Our teaching and learning methodology
                  involves a lot of conceptual approach along with clear
                  fundamentals & coupled with a good practical understanding to
                  deal with real world problems effectively and efficiently.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our students have infiltrated into all sectors be it
                  government, private or public to serve the country in various
                  capacities. The school strives to inculcate moral values,
                  manners, responsibilities among students so that they may
                  build a world free of all the evils. Students here are
                  encouraged to dream, groomed to give wings to their dreams, to
                  take off and explore the unexplored. Since its inception, the
                  institute has not only grown up in its infrastructure but has
                  also developed a lot in terms of academics and laboratories. A
                  well-balanced curriculum, taught by qualified, skilled, and
                  experienced faculty develops the required skills in students
                  necessary to meet tomorrow's applications. We are in a
                  continuous process of making our laboratories well equipped to
                  meet the demands of the rapidly changing related science &
                  technology fields.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I welcome you all to this great institution of higher learning
                  and assure you of a nurturing and caring environment that will
                  see all of you blossom into empowered and sensitive human
                  beings.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I invite you to be part of our journey towards excellence in
                  education.
                </p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Best Regards,</p>
                  <p className="text-sm text-gray-900 dark:text-white font-bold">Tajveer Singh Rathore</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director's Achievements */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 md:p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Director's Achievements
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2"
                >
                  <div className="flex-shrink-0 w-4 h-4 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

const achievements = [
  "Published over 50 research papers in international journals",
  "25+ years of experience in academic leadership",
  "Recipient of Best Educator Award 2022",
  "Ph.D. supervisor for 15+ scholars",
  "Member of various academic boards and committees",
  "Led multiple NAAC accreditation cycles successfully",
];
