import { NextPage } from 'next';
import CourseFeesStructure from '@/components/CourseFeesStructure';

const BcaPage: NextPage = () => {
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

  return (
    <CourseFeesStructure courseName="BCA" fees={bcaFees} />
  );
};

export default BcaPage; 