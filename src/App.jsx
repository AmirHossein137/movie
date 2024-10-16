import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const location = useLocation();
  return (
    <div className={location.pathname === "/login" ? "" : "container mx-auto px-4"}
    >
      {location.pathname !== "/login" ? <Header /> : ""}
      <Outlet />
      {location.pathname !== "/login" ? <Footer /> : ""}
    </div>
  );
}

export default App;
