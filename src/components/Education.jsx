import { educationData } from "../constants";
// import HorizontalEducation from "./HorizontalEducation";
// import VerticalEducation from "./VerticalEducation";

const Education = () => {
  return (
    <div className=" mt-7">
      {/* <h1 className="text-2xl font-bold">Education</h1>
      <HorizontalEducation educationData={educationData} />
      <VerticalEducation educationData={educationData} /> */}

      <div className="w-full min-w-2xl p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
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
                <li key={item?.id} className="py-2 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-1">
                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                        {item?.class_name}
                      </p>
                      <p className="text-base text-gray-500 truncate dark:text-gray-400">
                        {item?.schoolName}
                      </p>
                      <p className="text-sm text-gray-700 truncate dark:text-gray-400">
                      <strong className="text-gray-100">{item?.yearOfPassing}</strong>
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
