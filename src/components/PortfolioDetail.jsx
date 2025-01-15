import { Chip, Stack, Tooltip, Zoom } from "@mui/material";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Bounce, toast, ToastContainer } from "react-toastify";

/* eslint-disable react/prop-types */
const PortfolioDetail = ({ setDetailModal, portfolioItem }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-4xl"
      >
        <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {portfolioItem?.portfolioName}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setDetailModal(false)}
          >
            <span className="sr-only">Close modal</span>✖
          </button>
        </div>

        <div className="p-4 md:p-4 space-y-4 grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm leading-relaxed">
              {portfolioItem?.description}
            </p>
            <ul className="mt-4 list-disc ml-5 space-y-1 leading-relaxed">
              {portfolioItem.details.map((point, index) => (
                <li
                  key={`portfolio-point-${index}`}
                  className="text-white-100 text-xs pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto">
            <img
              className="rounded-md shadow-md shadow-gray-800 object-cover"
              height="250"
              width="350"
              src={portfolioItem?.imageLink}
              alt={portfolioItem?.portfolioName}
            />
          </div>
        </div>
        <div className="p-3 md:p-3 space-y-4">
          <div className="flex flex-row gap-4 text-sm">
            <p className="mt-1 whitespace-nowrap font-bold text-lg">
              Tech Stacks:
            </p>
            <Stack direction="row" spacing={1}>
              {portfolioItem?.stacks?.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  color="warning"
                  variant="outlined"
                />
              ))}
            </Stack>
          </div>
          <div className="flex flex-row gap-3 text-sm">
            <p className=" whitespace-nowrap font-bold text-lg">
              Related Links:
            </p>
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
                  portfolioItem?.repoLink
                    ? window.open(portfolioItem?.repoLink, "_blank")
                    : toast.warn(" Repo Link does not exist", {
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
              arrow
            >
              <button
                className="inline-block px-2 py-2"
                onClick={() => {
                  portfolioItem?.appLink
                    ? window.open(portfolioItem?.appLink, "_blank")
                    : toast.warn(" Repo Link does not exist", {
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
          </div>
        </div>

        <div className="flex items-center p-3 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="button"
            className="ml-auto text-white bg-blue-700 duration-500 hover:bg-white hover:text-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:focus:ring-blue-800"
            onClick={() => setDetailModal(false)}
          >
            Close
          </button>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default PortfolioDetail;
