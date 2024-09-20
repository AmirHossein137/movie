import { useState } from "react";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserContext();


  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10">
      <h1>Login Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-[400px] bg-slate-600 rounded-xl p-5"
      >
        <input
          type="text"
          className=" bg-slate-700 h-12 rounded-lg pl-2 outline-none"
          placeholder="Enter UserName ..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className=" bg-slate-700 h-12 rounded-lg pl-2 outline-none"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full font-bold bg-slate-800 py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
