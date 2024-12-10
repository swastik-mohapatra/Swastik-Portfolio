import HorizontalEducation from "./HorizontalEducation";
import VerticalEducation from "./VerticalEducation";

const Education = () => {
  const educationData = [
    {
      id: 1,
      class_name: "Xth Standard",
      schoolName: "DAV Public School, CDA, Cuttack",
      yearOfPassing: "2016",
      grade: "10.0",
    },
    {
      id: 2,
      class_name: "XIIth Standard",
      schoolName: "DAV Public School, CDA, Cuttack",
      yearOfPassing: "2018",
      grade: "90%",
    },
    {
      id: 3,
      class_name: "Bachelor's of Technolgy",
      schoolName: "Odisha University of Technology and Research, Bhubaneswar",
      yearOfPassing: "2023",
      grade: "9.42",
    },
  ];

  return (
    <div className="ml-6">
      <h1 className="text-2xl font-bold">Education</h1>
      <HorizontalEducation educationData={educationData}/>
      <VerticalEducation educationData={educationData}/>
    </div>
  );
};

export default Education;
