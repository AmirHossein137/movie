import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav
        className={`flex items-center justify-between text-slate-200 -my-14 -mx-3 bg-slate-900 p-5 md:my-0 md:bg-transparent md:p-0 ${
          openMenu ? "-mb-14" : "mb-0"
        }`}
      >
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1 text-3xl font-bold">
            <span className="text-slate-300">Pico</span>
            <span className="text-rose-600">Movies</span>
          </div>
          <ul className="hidden md:flex items-center gap-5">
            <l1>
              <a href="#" className="transition duration-200 hover:text-white">Movies</a>
            </l1>
            <l1>
              <a href="#" className="transition duration-200 hover:text-white">Tv Shows</a>
            </l1>
            <l1>
              <a href="#" className="transition duration-200 hover:text-white">People</a>
            </l1>
            <l1>
              <a href="#" className="transition duration-200 hover:text-white">More</a>
            </l1>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6 uppercase">
            <li>
              <a href="#">LogIn</a>
            </li>
            <li>
              <a className="bg-rose-700 px-7 py-3 rounded-3xl" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <button
          className="flex md:hidden cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu size={35} />
        </button>
      </nav>
      {openMenu && (
        <div className="bg-slate-900  md:hidden transition-all duration-500 border-t border-slate-500 p-5 mt-14 -mx-3">
          <ul className="flex flex-col items-center gap-5 text-slate-300">
            <l1>
              <a href="#">Movies</a>
            </l1>
            <l1>
              <a href="#">Tv Shows</a>
            </l1>
            <l1>
              <a href="#">People</a>
            </l1>
            <l1>
              <a href="#">More</a>
            </l1>
          </ul>
          <div className="flex items-center justify-center mt-4 border-t pt-6 border-gray-500 gap-4">
            <button>Login</button>
            <button className="bg-rose-600 p-2 px-5 rounded-xl">SignUp</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
