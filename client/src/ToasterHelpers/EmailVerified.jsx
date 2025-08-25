import { toast } from "react-hot-toast";
const UnderDevelopment = () => {
    toast.success(
      <span className="bg-[#36454F] text-[#F0F0F0] font-sans 
      text-base border border-[#B6AFA9] rounded-lg px-5 py-3">
        Email has been successfully verified! You can now register your account.
      </span>,
      {
        position: "bottom-left",
        duration:3000,
        style: { boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
      }
    );
};

export default UnderDevelopment;