import toast from "react-hot-toast"
import success from "../icons/success.png"
import { useEffect } from "react"

const LoginSuccessful = () => {
  useEffect(() => {
    toast.success("Login successful!", {
      icon: <img src={success} alt="Success" />,
      position: "bottom-right",
      duration: 3000,
      style: { width: 10, height: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
    });
  }, []);

  return null;
}

export default LoginSuccessful  