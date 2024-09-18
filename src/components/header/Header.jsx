import { useState } from "react";
import Navigation from "./Navigation"
import SearchBox from './SearchBox'
import SliderTop from "./SliderTop";

const Header = () => {

  const [changeHeaderBg , setChangeHeaderBg] = useState('header-bg.avif')

  return (
    <header className="py-14 transition duration-500 bg-cover bg-center" style={{ backgroundImage : `linear-gradient(to bottom , rgb(0 0 0 / 80%) , rgb(0 0 0 / 40%) , rgb(0 0 0 /70%)) ,url(${changeHeaderBg})` }}>
      <div className="container mx-auto px-3">
      <Navigation />
      <SearchBox />
      <SliderTop setChangeHeaderBg={setChangeHeaderBg}/>
      </div>
    </header>
  );
};

export default Header;
