import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import Loader from "../components/Loader"

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login , loading} = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex flex-col gap-5 relative items-center w-full min-h-screen justify-center bg-[url(/public/movies.webp/)] object-cover">
      <div className="absolute w-full h-full bg-loginBg inset-0"></div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-[500px] z-10 bg-[#08090ad4] rounded-xl p-5"
      >
        <h1 className="text-center font-bold text-2xl">Login Form</h1>
        <input
          type="text"
          className=" bg-black h-12 rounded-lg indent-3 border border-[#5d4f26] outline-none placeholder:text-sm placeholder:text-white"
          placeholder="Enter UserName ..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className=" bg-black h-12 border border-[#5d4f26] rounded-lg pl-2 outline-none placeholder:text-sm placeholder:text-white"
          placeholder="Enter Password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center h-14 font-bold bg-yellow-600 py-3 rounded-lg"
        >
          {loading ? <Loader /> : "Login"}
        </button>
      </form>
    </div>
  );
};



export default Login;
