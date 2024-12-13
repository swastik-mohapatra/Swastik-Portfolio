import { useState } from "react";
import PortfolioDetail from "./PortfolioDetail";

const Portfolio = () => {
  const [detailModal, setDetailModal] = useState(false);
  const [modalDetail, setModalDetail] = useState(null);

  const portfolioData = [
    {
      id: 1,
      portfolioName: "Journal Entry Automation",
      description:
        "The application was built for a US based chemical company to automate journal entry posting in SAP environment.",
      imageLink: "https://i.ytimg.com/vi/GMCmqb9MHqA/sddefault.jpg",
      stacks:["ReactJS", "Java", "SAP ABAP","SAP Workflow", "SAP BTP"]
    },
    {
      id: 2,
      portfolioName: "Price Card Harmonisation",
      description:
        "The application was designed for a Singapore based retail chain to facilitate generation of price card (offers and discount) for various commodities sold in their stores.",
      imageLink:
        "https://onecms-res.cloudinary.com/image/upload/s--E3ujKPa_--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/tdy-migration/img_5336.jpg?itok=LjQj4mY9",
        stacks:["SAP UI5", "CAPM NodeJS","SAP BTP"]
    },
    {
      id: 3,
      portfolioName: "Fitness App",
      description:
        "The application was designed to provide details of various body part exercises and how to perform it.",
      imageLink: "https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg",
      stacks:["ReactJS", "REST API"]
    },
  ];

  return (
    <div name="portfolio" className="py-10 w-full">
      <div className="mx-5 justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {portfolioData.map((item) => (
              <div
                key={item?.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src={item?.imageLink}
                  alt={item?.portfolioName}
                />
                <div className="absolute inset-0 bg-black bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center items-center p-4 text-center">
                  <h5 className="text-2xl font-bold text-white mb-2">
                    {item?.portfolioName}
                  </h5>
                  <p className="text-sm text-gray-300 mb-4">
                    {item?.description}
                  </p>
                  <button
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={() => {
                      setDetailModal(!detailModal);
                      setModalDetail(item);
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {detailModal && <PortfolioDetail setDetailModal={setDetailModal} portfolioItem={modalDetail}/>}
    </div>
  );
};

export default Portfolio;
