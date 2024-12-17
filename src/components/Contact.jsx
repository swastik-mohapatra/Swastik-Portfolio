import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div name="contact" className="py-10 w-full">
      <div className="mx-5 justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Contact</h1>
        <div className="my-10">
        <div className="flex flex-col gap-6 ">
          {/* Name and Phone Number */}
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              }}
              label="Name"
              color="warning"
              size="small"
              className="w-full md:w-64"
            />
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              }}
              label="Phone Number"
              color="warning"
              size="small"
              className="w-full md:w-64"
            />
          </div>
          {/* Email */}
          <div className="flex w-full">
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              }}
              label="Email"
              color="warning"
              size="small"
              className="w-full md:w-[33rem]"
            />
          </div>
          {/* Message */}
          <div className="flex w-full">
            <TextField
              sx={{ 
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              }}
              label="Message"
              color="warning"
              multiline
              rows={4}
              className="w-full md:w-[33rem]"
            />
          </div>
          <button type="button" className="bg-blue-800 rounded-lg hover:bg-white hover:text-blue-800 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 p-4 w-full md:w-[33rem]">Send</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
