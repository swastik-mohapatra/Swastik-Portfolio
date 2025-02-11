/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import PortfolioDetail from "./PortfolioDetail";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Tooltip, Zoom } from "@mui/material";
import { portfolioData } from "../constants";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Portfolio = ({ mainControls }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [modalDetail, setModalDetail] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300; 
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div name="portfolio" className="py-10 w-full relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="mx-7 w-full h-full">
          <h1 className="text-4xl font-bold mb-6">Portfolio</h1>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-400 duration-200 hover:text-black"
            onClick={() => scroll("left")}
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button
            className="absolute md:-right-14 -right-14 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-400 duration-200 hover:text-black"
            onClick={() => scroll("right")}
          >
            <MdKeyboardArrowRight size={30} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scroll-smooth hide-scrollbar space-x-5 p-3"
          >
            {portfolioData.map((item) => (
              <div
                key={item?.id}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 relative group overflow-hidden rounded-lg shadow-md shadow-slate-900 hover:shadow-slate-400 duration-300 cursor-pointer bg-gray-800"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg opacity-70"
                  src={item?.imageLink}
                  alt={item?.portfolioName}
                />
                <div className="absolute inset-0 bg-black bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center items-center p-4 text-center">
                  <p className="text-sm text-gray-300 mb-4">{item?.description}</p>
                  <div className="flex flex-row gap-3">
                    <button
                      className="px-2 py-2 text-xs font-medium text-white bg-blue-800 rounded-lg hover:bg-white hover:text-blue-800 duration-500"
                      onClick={() => {
                        setDetailModal(!detailModal);
                        setModalDetail(item);
                      }}
                    >
                      Read more
                    </button>
                    <Tooltip title="Repository Link" slots={{ transition: Zoom }} arrow>
                      <button
                        className="px-2 py-2"
                        onClick={() => {
                          item?.repoLink
                            ? window.open(item?.repoLink, "_blank")
                            : toast.warn("Repo Link does not exist", {
                                position: "top-center",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "dark",
                                transition: Bounce,
                              });
                        }}
                      >
                        <FaGithub />
                      </button>
                    </Tooltip>
                    <Tooltip title="Application Link" slots={{ transition: Zoom }} arrow>
                      <button
                        className="px-2 py-2"
                        onClick={() => {
                          item?.appLink
                            ? window.open(item?.appLink, "_blank")
                            : toast.warn("Link does not exist", {
                                position: "top-center",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "dark",
                                transition: Bounce,
                              });
                        }}
                      >
                        <FaExternalLinkAlt />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <h5 className="text-2xl p-3 text-center font-bold text-white">
                  {item?.portfolioName}
                </h5>
              </div>
            ))}
          </div>
        </div>
        {detailModal && (
          <PortfolioDetail setDetailModal={setDetailModal} portfolioItem={modalDetail} />
        )}
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Portfolio;
