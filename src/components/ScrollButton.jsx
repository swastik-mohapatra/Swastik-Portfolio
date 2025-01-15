import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollButton = () => {
  return (
    <div className="text-center">
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="flex justify-center items-center rounded-full fixed bottom-8 right-10 w-16 h-16 bg-orange-400 text-gray-800 shadow-md shadow-slate-400 hover:bg-white hover:text-orange-800 hover:shadow-orange-400 duration-500"
      >
        <MdKeyboardArrowUp size={50} />
      </button>
    </div>
  );
};

export default ScrollButton;
