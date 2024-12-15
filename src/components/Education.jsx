import { educationData } from "../constants";
import HorizontalEducation from "./HorizontalEducation";
import VerticalEducation from "./VerticalEducation";

const Education = () => {
  
  return (
    <div className="ml-6 mt-7">
      <h1 className="text-2xl font-bold">Education</h1>
      <HorizontalEducation educationData={educationData}/>
      <VerticalEducation educationData={educationData}/>
    </div>
  );
};

export default Education;
