import { useState } from "react";
import PortfolioDetail from "./PortfolioDetail";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Tooltip, Zoom } from "@mui/material";
import { portfolioData } from "../constants";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Portfolio = () => {
  const [detailModal, setDetailModal] = useState(false);
  const [modalDetail, setModalDetail] = useState(null);

  return (
    <div name="portfolio" className="py-10 w-full">
      <div className="mx-5 justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {portfolioData.map((item) => (
              <div
                key={item?.id}
                className="relative group overflow-hidden rounded-lg shadow-lg shadow-slate-900 hover:shadow-slate-300 duration-300 cursor-pointer bg-gray-800"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg opacity-70"
                  src={item?.imageLink}
                  alt={item?.portfolioName}
                />
                <div className="absolute inset-0 bg-black bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center items-center p-4 text-center">
                  <p className="text-sm text-gray-300 mb-4">
                    {item?.description}
                  </p>
                  <div className="flex flex-row gap-3">
                    <button
                      className="inline-block px-2 py-2 text-xs font-medium text-white bg-blue-800 rounded-lg hover:bg-white hover:text-blue-800 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      onClick={() => {
                        setDetailModal(!detailModal);
                        setModalDetail(item);
                      }}
                    >
                      Read more
                    </button>
                    <Tooltip
                      title="Repository Link"
                      slots={{
                        transition: Zoom,
                      }}
                      arrow
                    >
                      <button
                        className="inline-block px-2 py-2"
                        onClick={() => {
                          item?.repoLink
                            ? window.open(item?.repoLink, "_blank")
                            : toast.warn(' Repo Link does not exist', {
                              position: "top-center",
                              autoClose: 1500,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                              transition: Bounce,
                              });
                        }}
                      >
                        <FaGithub />
                      </button>
                    </Tooltip>
                    <Tooltip
                      title="Application Link"
                      slots={{
                        transition: Zoom,
                      }}
                      sx={{
                        backgroundColor: "red",
                      }}
                      arrow
                    >
                      <button
                        className="inline-block px-2 py-2"
                        onClick={() => {
                          item?.appLink
                            ? window.open(item?.appLink, "_blank")
                            : toast.warn('Link does not exist', {
                              position: "top-center",
                              autoClose: 1500,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                              transition: Bounce,
                              });
                        }}
                      >
                        <FaExternalLinkAlt />
                      </button>
                    </Tooltip>
                    {/* <Tooltip
                      title="Application Link"
                      slots={{
                        transition: Zoom,
                      }}
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: "red", 
                            color: "white", 
                            fontSize: "0.875rem", 
                            padding: "4px 8px", 
                          },
                        },
                        arrow: {
                          sx: {
                            color: "red", // Change arrow color to match background
                          },
                        },
                      }}
                      arrow
                    >
                      <button className="inline-block px-2 py-2">
                        <FaExternalLinkAlt />
                      </button>
                    </Tooltip> */}
                  </div>
                </div>
                <h5 className="text-2xl p-3 text-center font-bold text-white">
                  {item?.portfolioName}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      {detailModal && (
        <PortfolioDetail
          setDetailModal={setDetailModal}
          portfolioItem={modalDetail}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Portfolio;
