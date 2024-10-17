import { Menu, CircleUserRound } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { ImgURL } from "../../helpers/ImgUrl";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout } = useUserContext();


  const menuItem = [
    { title: "Movies", href: "/movies" },
    { title: "Tv Shows", href: "/tvshow" },
    { title: "People", href: "/people" },
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
            <span className="text-yellow-600">Movies</span>
          </Link>
          <ul className="hidden md:flex items-center gap-5">
            {menuItem.map((menu) => (
              <li key={menu.title}>
                <NavLink
                  to={menu.href}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b border-yellow-600 text-white font-bold"
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
              <div className="dropdown">
                <div tabIndex={0} className="btn flex py-2 px-5">
                  <div className="flex items-center justify-center overflow-hidden rounded-full w-8 h-full border border-yellow-400">
                    {user?.avatar?.tmdb?.avatar_path ? (
                      <img src={ImgURL("w45" , user?.avatar?.tmdb?.avatar_path)} />
                    ) : (
                      <CircleUserRound />
                    )}
                  </div>
                  {user.username}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                </ul>
              </div>
              <button
                className="bg-yellow-600 text-white py-2 px-5 rounded-lg transition duration-200 hover:bg-yellow-800"
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
                  to={"https://www.themoviedb.org/signup"}
                  className="bg-yellow-700 px-7 py-3 rounded-3xl"
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
