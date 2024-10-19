import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`text-center py-6 mt-8 bg-[#0d0d0d] border-t border-[#444] ${
        location.pathname === "/profile" ? "hidden" : "block"
      }`}
    >
      Footer
    </div>
  );
};

export default Footer;
