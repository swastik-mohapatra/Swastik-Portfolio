import ReactJS from "../assets/images/Skiils/react.png";
import html from "../assets/images/Skiils/html.png";
import css from "../assets/images/Skiils/css.png";
import javascript from "../assets/images/Skiils/javascript.png";
import tailwind from "../assets/images/Skiils/tailwind.png";
import mui from "../assets/images/Skiils/mui.png";
import nodejs from "../assets/images/Skiils/nodejs.png";
import jQuery from "../assets/images/Skiils/jQuery.png";
import git from "../assets/images/Skiils/git.png";
import bootstrap from "../assets/images/Skiils/bootstrap.png";
import mysql from "../assets/images/Skiils/mysql.png";
import sapui5 from "../assets/images/Skiils/sapui5logo.svg";

export const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "hover:shadow-orange-500",
    rating: "4.5",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "hover:shadow-blue-500",
    rating: "4.5",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "hover:shadow-yellow-500",
    rating: "3.73",
  },
  {
    id: 5,
    src: ReactJS,
    title: "React",
    style: "hover:shadow-blue-600",
    rating: "4",
  },
  {
    id: 13,
    src: sapui5,
    title: "SAP UI5",
    style: "hover:shadow-orange-500",
    rating: "4.45",
  },
  {
    id: 7,
    src: tailwind,
    title: "Tailwind",
    style: "hover:shadow-sky-400",
    rating: "4.5",
  },
  {
    id: 8,
    src: bootstrap,
    title: "Bootstrap",
    style: "hover:shadow-purple-400",
    rating: "4.5",
  },
  {
    id: 11,
    src: mui,
    title: "Material UI",
    style: "hover:shadow-sky-400",
    rating: "4.2",
  },
  {
    id: 4,
    src: jQuery,
    title: "jQuery",
    style: "hover:shadow-blue-500",
    rating: "3",
  },
  {
    id: 6,
    src: nodejs,
    title: "Node JS",
    style: "hover:shadow-green-400",
    rating: "2.73",
  },
  {
    id: 12,
    src: git,
    title: "Git",
    style: "hover:shadow-orange-800",
    rating: "4.21",
  },
  {
    id: 14,
    src: mysql,
    title: "My SQL",
    style: "hover:shadow-blue-400",
    rating: "3",
  },
];

export const experiences = [
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

export const educationData = [
  {
    id: 1,
    class_name: "10th Standard",
    schoolName: "DAV Public School, CDA, Cuttack",
    yearOfPassing: "2016",
    grade: "10.0",
  },
  {
    id: 2,
    class_name: "12th Standard",
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

export const portfolioData = [
  {
    id: 1,
    portfolioName: "Journal Entry Automation",
    description:
      "The application was built for a US based chemical company to automate manual journals posting in SAP environment.",
    imageLink: "https://i.ytimg.com/vi/GMCmqb9MHqA/sddefault.jpg",
    stacks: ["ReactJS", "Java", "SAP ABAP", "SAP Workflow", "SAP BTP"],
    details: [
      "Manual journal entries ensure accurate financial transactions and proper recognition in the company's accounting records.",
      "Upon selection, business unit-specific forms are presented in SAP BTP for the requester to complete and submit, triggering an automated workflow with user tasks in the SAP BTP inbox.",
      "Tasks from the SAP BTP inbox are reviewed, approved, or forwarded in an integrated app. Actions are synchronized with SAP ECC, creating a posted document via a transaction code.",
    ],
    appLink: "",
    repoLink: "",
  },
  {
    id: 2,
    portfolioName: "Price Card Generation",
    description:
      "The application was designed for a Singapore based retail chain to facilitate generation of price card (offers and discount) for various commodities sold in their stores.",
    imageLink:
      "https://onecms-res.cloudinary.com/image/upload/s--E3ujKPa_--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/tdy-migration/img_5336.jpg?itok=LjQj4mY9",
    stacks: ["SAP UI5", "CAPM NodeJS", "SAP BTP"],
    details: [
      "The application streamlines the creation of price cards, eliminating inefficiencies and inconsistencies caused by manual processes..",
      "The final output of the price card is a Microsoft PowerPoint (.pptx) file. Stores can generate price cards in various paper sizes, structures, and formats, tailored to offers, promotions, product details, and more.",
      "Price cards can be generated directly from the web application. Products with different brands and promotions can be uploaded via Android devices or system data in the web platform and then can be generated.",
    ],
    appLink: "",
    repoLink: "",
  },
  {
    id: 3,
    portfolioName: "Fitness App",
    description:
      "The application was designed to provide details of various body part exercises and how to perform it.",
    imageLink: "https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg",
    stacks: ["ReactJS", "REST API"],
    details: [
      "Users can effortlessly search for exercises tailored to specific body parts, enabling personalized fitness exploration.",
      "Detailed instructions and methods for performing each exercise are provided, accompanied by tutorial videos for better understanding. Additionally, users can discover similar exercises targeting the same body part for a well-rounded workout routine.",
      "An intuitive dark mode feature is available, allowing users to switch between light and dark themes for a customized and comfortable viewing experience.",
    ],
    appLink:
      "https://my-fitness-app-j1kn-l2j2twf7k-swastik-mohapatras-projects.vercel.app/",
    repoLink: "https://github.com/swastik-mohapatra/my-fitness-app",
  },
];
