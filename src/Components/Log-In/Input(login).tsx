import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchUserList } from "./fetchrequests";

const Input = () => {
  const navigate = useNavigate();

  let validUser: boolean = false; //flag to check if the user exists

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    //checking if the user exists
    fetchUserList().then((data) => {
      data.forEach((user) => {
        if (user.user === username && user.password === password) {
          validUser = true;
          navigate("/home");
          return;
        }
      });
      if (!validUser) {
        alert("Invalid username or password");
      }
    });
  };

  return (
    <div className="mb-5 flex flex-col gap-y-5">
      <form onSubmit={userLogIn}>
        <div className="mb-10 flex flex-col gap-y-3">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            required
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(/\s/g, ""))}
            className="border-2 border-orange-300 p-2"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.replace(/\s/g, ""))}
            className="border-2 border-orange-300 p-2"
          />
        </div>
        <input
          type="submit"
          value="Log In"
          className="w-full cursor-pointer rounded-lg bg-orange-400 p-2 text-white transition duration-200 ease-in-out hover:bg-orange-500"
        />
      </form>
      <button
        className="cursor-pointer rounded-lg border-2 border-orange-300 p-2 transition duration-200 ease-in-out hover:bg-orange-500 hover:text-white"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Input;
