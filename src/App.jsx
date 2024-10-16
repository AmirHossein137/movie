import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const location = useLocation();
  return (
    <div className="container mx-auto px-4">
      {location.pathname !== "/login" ? <Header /> : ""}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
