/* eslint-disable react/prop-types */

const VerticalEducation = ({ educationData }) => {
  return (
    <ol className="relative border-s border-gray-500 lg:hidden mt-7">
      {educationData.map((item) => (
        <li className="mb-10 ms-6" key={item?.id}>
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:bg-gray-500"></span>
          
          <div className="relative ml-2 bg-gray-700 p-3 rounded-lg border-b-2 box-content w-40">
            <span className="absolute w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-gray-700 -left-2 top-2"></span>
            
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
          </div>
        </li>
      ))}
    </ol>
  );
};

export default VerticalEducation;
