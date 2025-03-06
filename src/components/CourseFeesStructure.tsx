'use client'

interface FeeItem {
  particular: string;
  firstYear: number;
  secondYear: number;
  thirdYear: number;
}

interface CourseFeesProps {
  courseName: string;
  fees: FeeItem[];
}

export default function CourseFeesStructure({ courseName, fees }: CourseFeesProps) {
  const calculateTotal = (year: 'firstYear' | 'secondYear' | 'thirdYear') => {
    return fees.reduce((sum, item) => sum + item[year], 0);
  };

  const totalCourseFees = calculateTotal('firstYear') + calculateTotal('secondYear') + calculateTotal('thirdYear');

  return (
    <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4 font-inter">
        {courseName}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm font-inter">
          <thead>
            <tr>
              <th className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 text-left border border-gray-300 dark:border-gray-600 font-medium">
                Particular
              </th>
              <th className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 text-right border border-gray-300 dark:border-gray-600 font-medium">
                1st Year (₹)
              </th>
              <th className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 text-right border border-gray-300 dark:border-gray-600 font-medium">
                2nd Year (₹)
              </th>
              <th className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 text-right border border-gray-300 dark:border-gray-600 font-medium">
                3rd Year (₹)
              </th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {fees.map((item, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700/50`}>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100">
                  {item.particular}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-right text-gray-900 dark:text-gray-100">
                  {item.firstYear.toLocaleString()}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-right text-gray-900 dark:text-gray-100">
                  {item.secondYear.toLocaleString()}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-right text-gray-900 dark:text-gray-100">
                  {item.thirdYear.toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className="bg-blue-50 dark:bg-blue-900/20">
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-white font-medium">
                Total
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-right text-gray-900 dark:text-white font-medium">
                {calculateTotal('firstYear').toLocaleString()}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-right text-gray-900 dark:text-white font-medium">
                {calculateTotal('secondYear').toLocaleString()}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-right text-gray-900 dark:text-white font-medium">
                {calculateTotal('thirdYear').toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-lg font-medium text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
        Total Course Fees: <span className="text-blue-700 dark:text-blue-300 font-semibold">₹{totalCourseFees.toLocaleString()}</span>
      </div>
    </div>
  );
} 