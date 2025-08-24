import { toast } from "react-hot-toast";
const UnderDevelopment = () => {
    toast.error(
      <span>
        This feature is under development.<br />
        Please check back later.
      </span>,
      {
        style: {
          background: '#36454F', // charcoal gray (a "gray that isn’t gray")
          color: '#F0F0F0',      // light text
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          border: '1px solid #B6AFA9', // greige border
          borderRadius: '8px',
          padding: '12px 20px',
        },
      }
    );
};

export default UnderDevelopment;
