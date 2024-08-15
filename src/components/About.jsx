import AboutPic from "../assets/images/image_about.jpg";

const About = () => {
  return (
    <div name="about" className="py-10 w-full md:h-screen ">
      <div className=" mx-5 justify-center w-fit h-full">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="my-8">
          <div className="grid gird-cols-1 md:grid-cols-2 md:ml-[-7rem]">
           
            <div>
              <div className="about_img_container">
                <img
                  src={AboutPic}
                  alt="My Profile"
                />
              </div>
            </div>
            <div className="justify-normal">
              <p>
                {" "}
                Welcome to my digital space! I&apos;m passionate about bringing
                ideas to life through code and creativity. With a background in
                Information Technology, I specialize in crafting seamless user
                experiences and architecting robust software solutions.
              </p>
              <br />
              <p>
                Driven by curiosity and a relentless pursuit of excellence, I am
                constantly exploring new technologies and pushing the boundaries
                of what&apos;s possible. Collaboration is at the heart of
                everything I do.
              </p>
              <br />
              <p>
                Beyond the screen, you&apos;ll find me exploring the outdoors,
                engaging in regular workouts, or indulging myself in fun
                activities.
              </p>
              <br />
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
