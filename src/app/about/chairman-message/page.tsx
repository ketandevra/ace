"use client";
import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Message from the Chairman
          </h1>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        {/* Chairman Profile and Message */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Chairman's Photo Section */}
            <div className="md:w-1/4 bg-white dark:bg-gray-800">
              <div className="p-6 md:p-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="aspect-[3/4] relative rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white dark:bg-gray-800">
                      <Image
                        src="/about/chairman.png"
                        alt="College Chairman"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center border-t border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      Bhupendra Singh Rathore
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Chairman
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:w-3/4 p-4 md:p-6 lg:p-8">
              <div className="prose dark:prose-invert max-w-none">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Dear Students and Parents,
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Welcome to Aishwarya College of Education. As the Chairman of
                  this esteemed institution, I take great pride in our
                  commitment to excellence in education and our dedication to
                  nurturing the next generation of leaders.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  It gives immense contentment to complete a long journey of
                  expedition the path traversed with great pains & pleasures has
                  resulted in achieving the desired outcome of consistent
                  growth. College still is its nascent stage always strives to
                  keep pace with modern education and traditional values. ACE
                  fraternity would always be appreciative and thankful to all
                  those people who have been associated with us during this
                  voyage and contributed towards our success, without whom these
                  accomplishments would have been completely impossible.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The underlying thought behind the mission have been to give
                  students a platform to nurture their creativity, academic zeal
                  and help them stretch their abilities to envision future path.
                  Keeping this aspect in mind and dogmatic approach to deliver
                  the best has prompted us at Aishwarya College to create
                  category of performers both academically and in co-curricular
                  activities. We hope that the students associating with us to
                  do for enhancing their all-round skill set, to have a better
                  and wide learning experience and to deliver the output with
                  positive attitude.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  These thoughts have impelled our guideline behind allowing the
                  students to explore possibility of growth and development by
                  giving them whole hearted support in their initiatives and
                  educative pursuits.
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I on behalf of ACE fraternity welcome and wish for the
                  successful. Pleasurable learning experience for all the new
                  entrants to the family.
                </p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Best Regards,
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white font-bold">
                    Bhupendra Singh Rathore
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Chairman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chairman's Achievements */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 md:p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Chairman's Achievements
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-4 h-4 mt-0.5">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {achievement}
                  </span>
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
  "Founded multiple educational institutions",
  "30+ years of experience in education sector",
  "Awarded for contributions to education",
  "Pioneered several educational initiatives",
  "Member of prestigious educational boards",
  "Recognized for philanthropic work in education",
];
