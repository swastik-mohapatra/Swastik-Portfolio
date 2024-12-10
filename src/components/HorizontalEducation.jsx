/* eslint-disable react/prop-types */
const HorizontalEducation = ({ educationData }) => {
  return (
    <ol className="hidden lg:flex items-center pt-7 ">
      {educationData.map((item) => (
        <li className="relative mb-6 lg:mb-0" key={item?.id}>
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-gray-500 sm:ring-4 shrink-0 relative"></div>
            <div className="hidden lg:flex w-full bg-gray-200 h-0.5 "></div>
          </div>
          <div className="mt-4 lg:pe-8 relative">
            <span className="absolute w-0 h-2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-gray-700 -top-2 left-2"></span>
            <div className="bg-gray-700 p-2 rounded-lg border-b-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {item?.class_name}
              </h3>
              <h3 className="text-sm  text-gray-900 dark:text-white">
                {item?.schoolName}
              </h3>
              <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                {item?.yearOfPassing}
              </time>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                CGPA/Percentage: {item?.grade}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default HorizontalEducation;
