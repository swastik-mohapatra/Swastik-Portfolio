/* eslint-disable react/prop-types */

const HorizontalEducation = ({educationData}) => {
  return (
    <ol className="hidden lg:flex items-center pt-3">
        {educationData.map((item) => (
          <li className="relative mb-6 sm:mb-0" key={item?.id}>
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 shrink-0"></div>
              <div className="hidden lg:flex w-full bg-gray-200 h-0.5 "></div>
            </div>
            <div className="mt-3 sm:pe-8">
                <div></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item?.class_name}
              </h3>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item?.schoolName}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item?.yearOfPassing}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                CGPA/Percentage: {item?.grade}
              </p>
            </div>
          </li>
        ))}
      </ol>
  )
}

export default HorizontalEducation