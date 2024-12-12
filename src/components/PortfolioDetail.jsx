/* eslint-disable react/prop-types */
const PortfolioDetail = ({ setDetailModal,portfolioItem }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-3/4 max-w-2xl">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {portfolioItem?.portfolioName}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setDetailModal(false)}
            >
              <span className="sr-only">Close modal</span>
              ✖
            </button>
          </div>
          
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {portfolioItem?.description}
            </p>
            
          </div>
  
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setDetailModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PortfolioDetail;
  