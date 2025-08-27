import toast from "react-hot-toast"
import success from "../icons/success.png"

const LoginSuccessful = () => {
  toast.success("Login successful!", {
    icon: <img src={success} alt="Success" />,
    position: "bottom-right",
    duration: 3000,
    style: { width: 10, height: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
  });
}

export default LoginSuccessful  