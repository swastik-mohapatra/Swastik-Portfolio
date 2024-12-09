import Typewriter from "typewriter-effect";
import AIPIC from "../assets/images/comp5.png";

function Home() {
  return (
    <div name="home">
      <div className="py-10 ">
        <div className="md:flex md:justify-between md:items-center flex-none grid grid-cols-1 md:grid-cols-0 gap-2 ">
          <div className="ml-0 md:ml-6 md:mt-5 leading-relaxed">
            <h1 className="text-4xl font-bold leading-normal">Hi,</h1>
            <h1 className="text-4xl font-bold leading-normal">I am Swastik Mohapatra</h1>
            <h1 className="text-4xl font-bold leading-normal">
              <Typewriter
                options={{
                  strings: ["Software Engineer", "Front End Developer"],
                  autoStart: true,
                  pauseFor: 4000,
                  loop: true,
                }}
              />
            </h1>
            <br />
            <p className="flex flex-col justify-center">
              Crafting seamless user experiences through code mastery – welcome
              to the digital frontier of web design and software architecture.
            </p>
            
            <div className="flex flex-row gap-6 sm:ml-[-4px] mt-7">
              <button className=" bg-indigo-500 text-gray-100 p-3 text-sm  rounded-lg tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-white hover:text-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                Download Resume
              </button>
              <button className="  text-gray-100 p-3 text-sm border  rounded-lg tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-white hover:text-black shadow-lg cursor-pointer transition ease-in duration-300">
                Contact me
              </button>
            </div>
          </div>
          <div className="ml-0 md:ml-20 justify-center items-center text-center">
            <div className="">
              <img
                src={AIPIC}
                alt="My Profile"
                className="object-cover"
                width="650"
                height="100"
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
