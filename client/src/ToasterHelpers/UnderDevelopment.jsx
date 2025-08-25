import { toast } from "react-hot-toast";
const UnderDevelopment = () => {
    toast.error(
      <span className="bg-[#36454F] text-[#F0F0F0] font-sans 
      text-base border border-[#36454F] rounded-lg px-5 py-3">
        This feature is under development.<br />
        Please check back later.
      </span>
    );
};

export default UnderDevelopment;
