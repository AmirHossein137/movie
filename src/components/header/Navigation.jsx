import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout } = useUserContext();

  const menuItem = [
    { title: "Movies", href: "/movies" },
    { title: "Tv Shows", href: "/tvshow" },
    { title: "People", href: "/people" },
    { title: "More", href: "/" },
  ];

  return (
    <>
      <nav
        className={`flex items-center justify-between text-slate-200 -my-14 -mx-3 bg-slate-900 p-5 md:my-0 md:bg-transparent md:p-0 ${
          openMenu ? "-mb-14" : "mb-0"
        }`}
      >
        <div className="flex items-center gap-10">
          <Link to={"/"} className="flex items-center gap-1 text-3xl font-bold">
            <span className="text-slate-300">Pico</span>
            <span className="text-rose-600">Movies</span>
          </Link>
          <ul className="hidden md:flex items-center gap-5">
            {menuItem.map((menu) => (
              <li key={menu.title}>
                <NavLink
                  to={menu.href}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b border-rose-600 text-white font-bold"
                      : "text-slate-300"
                  }
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
          {Object.keys(user).length ? (
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-white">
                {user.username}
              </span>
              <button
                className="bg-rose-600 text-white py-2 px-5 rounded-lg transition duration-200 hover:bg-rose-800"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex items-center gap-6 uppercase">
              <li>
                <Link to={"/login"}>LogIn</Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className="bg-rose-700 px-7 py-3 rounded-3xl"
                  href="#"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
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
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Tv Shows</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
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
