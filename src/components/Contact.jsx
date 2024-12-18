import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div name="contact" className="py-10 w-full ">
      <div className="mx-8 justify-center w-full h-full ">
      <h1 className="text-4xl font-bold">Contact</h1>
        <div className="bg-gray-800 p-8 grid lg:grid-cols-2 gap-8 rounded-lg shadow-lg shadow-slate-900 relative my-10">
          <div
            className="bg-black p-6 rounded-lg shadow-2xl relative lg:-left-12 lg:top-0 -top-12"
            // style={{ zIndex: 5 }}
          >
            <div className="space-y-6">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "gray" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                  input: { color: "white" },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "gray" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                  input: { color: "white" },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputLabelProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "gray" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                  textarea: { color: "white" },
                }}
              />
              <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
                Submit
              </button>
            </div>
          </div>

          {/* Right Section: Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg mb-4">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible.
            </p>
            <p className="text-sm text-gray-400">
              Even if it is not related to new opportunities, my inbox is always
              open. Whether you want to say hi or have a question, I will try my
              best to get back to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
