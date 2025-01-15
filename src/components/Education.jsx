import { educationData } from "../constants";

const Education = () => {
  return (
    <div className="2xl:mt-6 mt-3">
      <div className="w-full min-w-2xl p-3 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="2xl:text-2xl text-lg font-bold leading-none text-gray-900 dark:text-white">
            Education
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {educationData.map((item) => {
              return (
                <li key={item?.id} className="py-1 sm:py-1">
                  <div className="md:flex items-center">
                    <div className="flex-1">
                      <p className="2xl:text-lg text-sm font-medium text-gray-900  dark:text-white">
                        {item?.class_name}
                      </p>
                      <p className="2xl:text-sm text-xs text-gray-500  dark:text-gray-400">
                        {item?.schoolName}
                      </p>
                      <p className="2xl:text-lg text-sm text-gray-700  dark:text-gray-400">
                      <strong className="text-gray-100">{item?.yearOfPassing}</strong>
                      </p>
                    </div>
                    <div className="inline-flex items-center 2xl:text-lg text-sm font-semibold text-gray-900 dark:text-white">
                      CGPA/Percentage:{" "} {item?.grade}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
