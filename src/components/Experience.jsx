import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "../App.css";
  import "react-vertical-timeline-component/style.min.css";
  // import { motion } from "framer-motion";
  
  const WorkIcon = () => <></>;
  
  const experiences = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company_name: "Incture",
      duration: "January 2023 - present",
      description: [
        "Working as a Frontend Developer specializing in SAPUI5 and ReactJS and developed intuitive and responsive UI solutions tailored to customer requirements and product needs.",
        "Designed dynamic user interfaces with a focus on scalability and usability.",
        "Successfully delivered customer-focused projects and contributed to product development.",
      ],
    },
    {
      id: 2,
      title: "Internship",
      company_name: "Sahu Technologies",
      duration: "June 2022 - July 2022",
      description: [
        "Worked as a Frontend Developer.",
        "Designed templates provided by the company as internship tasks.",
      ],
    },
  ];
  
  const Experience = () => {
    return (
      <div name="experience" className="py-10 w-full md:h-screen">
        <div className="mx-5 justify-center w-fit h-full">
          <h1 className="text-4xl font-bold">Experience</h1>
          <div className="my-8">
            <div>
              <VerticalTimeline layout="1-column-left">
                {experiences.map((exp) => (
                  <VerticalTimelineElement
                    key={exp.id}
                    contentStyle={{
                      background: "#374151",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid #374151",
                    }}
                    date={exp.duration}
                    iconStyle={{ background: "#374151", color: "black" }}
                    icon={<WorkIcon />}
                  >
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <h4 className="text-lg font-medium">{exp.company_name}</h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                      {exp.description.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  