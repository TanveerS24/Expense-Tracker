import { useFormikContext } from "formik";  
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../lib/axios";

const VerifyEmail = ({ onEmailVerified }) => {
    const { values } = useFormikContext();

    const Verify = async () => {
        try {
            console.log("Verifying email:", values.email);
            const res = await api.post(`${import.meta.env.VITE_BASE_URL}/users/sendverificationemail`, { email: values.email });

            if (res.status === 200) {
                localStorage.setItem("status", "sent");

                // Show toast directly
                toast.success(
                  <span className="bg-red-300 text-base border-red-900 rounded-lg px-5 py-3 ">
                    Verification email sent! Please check your inbox.
                  </span>,
                  {
                    position: "bottom-left",
                    duration: 3000,
                    style: { boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
                  }
                );

                if (onEmailVerified) onEmailVerified();
            } else if (res.status === 409) {
                toast.error("Email already exists.");
            }
        } catch (error) {
          console.error("Error verifying email:", error);
          if (error.response && error.response.status === 409) {
            toast.error("Email already exists.");
          } else {
              toast.error("Failed to send verification email. Please try again.");
          }
        }
    };

    return (
      <div className="flex items-center justify-center mt-2">
        <Link
          className="text-blue-500 underline w-fit h-fit cursor-target"
          onClick={Verify}
        >
            Verify Email
        </Link>
      </div>
    );
};

export default VerifyEmail;
