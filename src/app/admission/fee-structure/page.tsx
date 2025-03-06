'use client'

import CourseFeesStructure from '@/components/CourseFeesStructure';

const bcaFees = [
  { particular: "ACE FORM & PROSPECTUS FEES", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "ACE REGISTRATION FEES", firstYear: 1400, secondYear: 0, thirdYear: 0 },
  { particular: "IDENTITY CARD", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "BOOK BANK FEES", firstYear: 800, secondYear: 800, thirdYear: 800 },
  { particular: "CAUTION FEES", firstYear: 1000, secondYear: 0, thirdYear: 0 },
  { particular: "UNIVERSITY FEES", firstYear: 850, secondYear: 850, thirdYear: 850 },
  { particular: "COLLEGE ACTIVITY FEES", firstYear: 300, secondYear: 300, thirdYear: 300 },
  { particular: "TUITION FEES", firstYear: 19450, secondYear: 21050, thirdYear: 22550 },
  { particular: "PRACTICAL", firstYear: 1000, secondYear: 1500, thirdYear: 1500 }
];

const bcomFees = [
  { particular: "ACE FORM & PROSPECTUS FEES", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "ACE REGISTRATION FEES", firstYear: 1400, secondYear: 0, thirdYear: 0 },
  { particular: "IDENTITY CARD", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "BOOK BANK FEES", firstYear: 800, secondYear: 800, thirdYear: 800 },
  { particular: "CAUTION FEES", firstYear: 1000, secondYear: 0, thirdYear: 0 },
  { particular: "UNIVERSITY FEES", firstYear: 850, secondYear: 850, thirdYear: 850 },
  { particular: "COLLEGE ACTIVITY FEES", firstYear: 300, secondYear: 300, thirdYear: 300 },
  { particular: "TUITION FEES", firstYear: 12950, secondYear: 14050, thirdYear: 14550 },
  { particular: "PRACTICAL", firstYear: 0, secondYear: 0, thirdYear: 0 }
];

const baFees = [
  { particular: "ACE FORM & PROSPECTUS FEES", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "ACE REGISTRATION FEES", firstYear: 1400, secondYear: 0, thirdYear: 0 },
  { particular: "IDENTITY CARD", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "BOOK BANK FEES", firstYear: 800, secondYear: 800, thirdYear: 800 },
  { particular: "CAUTION FEES", firstYear: 1000, secondYear: 0, thirdYear: 0 },
  { particular: "UNIVERSITY FEES", firstYear: 850, secondYear: 850, thirdYear: 850 },
  { particular: "COLLEGE ACTIVITY FEES", firstYear: 300, secondYear: 300, thirdYear: 300 },
  { particular: "TUITION FEES", firstYear: 9450, secondYear: 10250, thirdYear: 10750 },
  { particular: "PRACTICAL", firstYear: 800, secondYear: 800, thirdYear: 800 }
];

const bscFees = [
  { particular: "ACE FORM & PROSPECTUS FEES", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "ACE REGISTRATION FEES", firstYear: 1400, secondYear: 0, thirdYear: 0 },
  { particular: "IDENTITY CARD", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "BOOK BANK FEES", firstYear: 800, secondYear: 800, thirdYear: 800 },
  { particular: "CAUTION FEES", firstYear: 1000, secondYear: 0, thirdYear: 0 },
  { particular: "UNIVERSITY FEES", firstYear: 850, secondYear: 850, thirdYear: 850 },
  { particular: "COLLEGE ACTIVITY FEES", firstYear: 300, secondYear: 300, thirdYear: 300 },
  { particular: "TUITION FEES", firstYear: 18450, secondYear: 20250, thirdYear: 21450 },
  { particular: "PRACTICAL", firstYear: 3000, secondYear: 3000, thirdYear: 3000 }
];

const bscPcmFees = [
  { particular: "ACE FORM & PROSPECTUS FEES", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "ACE REGISTRATION FEES", firstYear: 1400, secondYear: 0, thirdYear: 0 },
  { particular: "IDENTITY CARD", firstYear: 100, secondYear: 0, thirdYear: 0 },
  { particular: "BOOK BANK FEES", firstYear: 800, secondYear: 800, thirdYear: 800 },
  { particular: "CAUTION FEES", firstYear: 1000, secondYear: 0, thirdYear: 0 },
  { particular: "UNIVERSITY FEES", firstYear: 850, secondYear: 850, thirdYear: 850 },
  { particular: "COLLEGE ACTIVITY FEES", firstYear: 300, secondYear: 300, thirdYear: 300 },
  { particular: "TUITION FEES", firstYear: 17450, secondYear: 19150, thirdYear: 20050 },
  { particular: "PRACTICAL", firstYear: 2000, secondYear: 2000, thirdYear: 2000 }
];

export default function FeeStructure() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Course Fee Structure
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Detailed breakdown of Academic Fees Structure (2023-24) for each course
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid gap-8">
            <CourseFeesStructure courseName="Bachelor of Computer Applications (BCA)" fees={bcaFees} />
            <CourseFeesStructure courseName="Bachelor of Commerce (B.Com)" fees={bcomFees} />
            <CourseFeesStructure courseName="Bachelor of Arts (BA)" fees={baFees} />
            <CourseFeesStructure courseName="Bachelor of Science (BSc-CBZ)" fees={bscFees} />
            <CourseFeesStructure courseName="Bachelor of Science (BSc-PCM)" fees={bscPcmFees} />
          </div>
        </div>
      </div>
    </div>
  );
} 