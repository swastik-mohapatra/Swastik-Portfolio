/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";
import CircleLoader from "react-spinners/CircleLoader";

const Contact = ({ mainControls }) => {
  const [emailBody, setEmailBody] = useState({});
  const [loading, setLoading] = useState(false); 

  const baseUrl = "https://email-service-1-kxjb.onrender.com";

  const onChangeInput = (e, name) => {
    setEmailBody({ ...emailBody, [name]: e.target.value });
  };

  const sendEmail = async () => {
    setLoading(true); 
    try {
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailBody),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Email sent successfully:", data);
        Swal.fire({
          title: data?.message,
          background: "#1f2937",
          color: "#fff",
          icon: "success",
        });
        setEmailBody({});
      } else {
        const errorData = await res.json();
        console.error("Error from server:", errorData);
        Swal.fire({
          title: "Error in sending mail",
          text: errorData?.error,
          background: "#1f2937",
          color: "#fff",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      Swal.fire({
        title: error?.message,
        background: "#1f2937",
        color: "#fff",
        icon: "error",
      });
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div name="contact" className="py-10 w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="mx-8 justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Contact</h1>
          <div className="bg-gray-800 p-8 grid lg:grid-cols-2 gap-8 rounded-lg shadow shadow-slate-900 relative my-10">
            <div className="bg-black p-6 rounded-lg shadow-2xl relative lg:-left-12 lg:top-0 -top-12">
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
                  onChange={(e) => onChangeInput(e, "name")}
                  value={emailBody["name"] || ""}
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
                  onChange={(e) => onChangeInput(e, "email")}
                  value={emailBody["email"] || ""}
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
                  onChange={(e) => onChangeInput(e, "message")}
                  value={emailBody["message"] || ""}
                />
                <button
                  className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300 font-bold"
                  onClick={() => {
                    if (
                      !emailBody.name ||
                      !emailBody.email ||
                      !emailBody.message
                    ) {
                      Swal.fire({
                        title: "Please fill in all fields.",
                        background: "#1f2937",
                        color: "#fff",
                        icon: "warning",
                      });
                      return;
                    }
                    sendEmail();
                  }}
                  disabled={loading} 
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-lg mb-4">
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible.
              </p>
              <p className="text-sm text-gray-400">
                Even if it is not related to new opportunities, my inbox is
                always open. Whether you want to say hi or have a question, I
                will try my best to get back to you.
              </p>
            </div>
          </div>
          {loading && (
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-85 flex justify-center items-center z-50">
              <CircleLoader color="#fff" size={100} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
