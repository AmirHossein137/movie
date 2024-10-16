import Navigation from "./Navigation"
import SearchBox from './SearchBox'
import SliderTop from "./SliderTop";

const Header = () => {


  return (
    <header className="py-14 transition duration-500 bg-cover bg-center">
      <div className="container mx-auto px-3">
      <Navigation />
      <SearchBox />
      {/* <SliderTop /> */}
      </div>
    </header>
  );
};

export default Header;
