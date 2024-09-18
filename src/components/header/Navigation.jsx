const Navigation = () => {
  return (
    <nav className="flex items-center justify-between mb-9 text-slate-200">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1 text-3xl font-bold">
          <span className="text-slate-300">Pico</span>
          <span className="text-rose-600">Movies</span>
        </div>
        <ul className="flex items-center gap-5">
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
      </div>
      <div>
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
    </nav>
  );
};

export default Navigation;
