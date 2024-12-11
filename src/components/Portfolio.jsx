const Portfolio = () => {
    const portfolioData=[
        {
            id:1,
            portfolioName:"Journal Entry Automation",
            description:"The application was built for a US based checmical company to automate journal entry posting in SAP environment.",
            imageLink:"https://i.ytimg.com/vi/GMCmqb9MHqA/sddefault.jpg"
        },
        {
            id:2,
            portfolioName:"Price card Harmonisation",
            description:"The application was designed for a Singapore based retail chain to facilitate generation of price card (offers and discount) for various commodities sold in their stores.",
            imageLink:"https://onecms-res.cloudinary.com/image/upload/s--E3ujKPa_--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/tdy-migration/img_5336.jpg?itok=LjQj4mY9"
        },
        {
            id:3,
            portfolioName:"Fitness App",
            description:"The application was designed to provide details of various body part exercises and how to perform it.",
            imageLink:"https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
        }
    ]
  return (
    <div name="portfolio" className="py-10 w-full ">
      <div className=" mx-5 justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <div className="my-10">
            <div className="flex flex-row gap-10">
            {portfolioData.map((item)=>(
                <div key={item?.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={item?.imageLink}
                    alt={item?.portfolioName}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.portfolioName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item?.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
