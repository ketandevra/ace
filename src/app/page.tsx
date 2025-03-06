import Image from "next/image";
import Link from "next/link";
import NoticeAndEvents from "@/components/NoticeAndEvents";
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-12">
              <Image
                src="/ace/acelogo.png"
                alt="Aishwarya College Campus"
                fill
                className="object-contain !p-4 max-w-[80%] mx-auto"
                priority
              />
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome to Aishwarya College of Education, Pali
                </h2>
                <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When education sees its course, a dream opens its eyes", is the
                belief of the foundation under the aegis of which top degree
                colleges in our states are set up. Education is just a spark for
                which it ignites the minds and inflames the intellect. Ignited
                minds change the world and bring us a better tomorrow. It goes
                beyond developing one's knowledge and sharpening his skills as
                it paves way for progress of a nation and its generations to
                come.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Students Enrolled
                  </div>
                </div>
              </div>

              <Link
                href="/about/overview"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice and Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Notice & Events
          </h2>
          <NoticeAndEvents />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Popular Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/30"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "📚",
    title: "Expert Instructors",
    description: "Learn from industry professionals and experienced educators",
  },
  {
    icon: "🎯",
    title: "Flexible Learning",
    description: "Study at your own pace and on your own schedule",
  },
  {
    icon: "🌟",
    title: "Quality Content",
    description: "Access high-quality, up-to-date learning materials",
  },
];

const courses = [
  {
    id: 1,
    title: "Bachelor of Computer Applications (BCA)",
    description:
      "A three-year undergraduate program focusing on computer applications and software development",
    image: "/ace/courses/bca.png",
  },
  {
    id: 2,
    title: "Bachelor of Science (B.Sc)",
    description: "Master the fundamentals of data science and analytics",
    image: "/ace/courses/bsc.png",
  },
  {
    id: 3,
    title: "Bachelor of Commerce (B.Com)",
    description: "Learn modern digital marketing strategies and techniques",
    image: "/ace/courses/bcom.png",
  },
];
