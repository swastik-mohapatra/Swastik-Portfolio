/* eslint-disable react/prop-types */

const VerticalEducation = ({ educationData }) => {
  return (
    <ol className="relative border-s border-gray-200 lg:hidden mt-3">
      {educationData.map((item) => (
        <li className="mb-10 ms-6" key={item?.id}>
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-white  dark:bg-blue-900"></span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item?.class_name}
          </h3>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item?.schoolName}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item?.yearOfPassing}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            CGPA/Percentage: {item?.grade}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default VerticalEducation;
