import { useFormikContext } from "formik";  
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../lib/axios";

const VerifyEmail = ({ onEmailVerified }) => {
    const { values } = useFormikContext();

    const Verify = async () => {
        try {
            console.log("Verifying email:", values.email);
            const res = await api.post("/users/sendverificationemail", { email: values.email });
            
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
            }
        } catch (error) {
            console.error("Error verifying email:", error);
            toast.error("Failed to send verification email. Please try again.");
        }
    };

    return (
        <Link
          className="text-blue-500 underline w-auto h-auto flex flex-col items-center justify-center"
          onClick={Verify}
        >
            Verify Email
        </Link>
    );
};

export default VerifyEmail;
