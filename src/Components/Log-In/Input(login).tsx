import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserList } from "./fetchrequests";

const Input = () => {
  const navigate = useNavigate();

  let validUser: boolean = false; //flag to check if the user exists

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);

  const userLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Checking if the user exists
    fetchUserList().then((data) => {
      for (const user of data) {
        if (user.username === username && user.password === password) {
          validUser = true;
          // Storing the user id in session storage
          sessionStorage.setItem("userId", user.id.toString());
          sessionStorage.setItem("theme", "false");
          navigate("/dashboard");
          break;
        }
      }
      if (!validUser) {
        setWarning(true);
      }
    });
  };

  useEffect(() => {
    // reseting warning on username changes
    if (warning) {
      setWarning(false);
    } // eslint-disable-next-line
  }, [username]);

  return (
    <div className="mb-5 mt-8 flex flex-col gap-y-5">
      <form onSubmit={userLogIn}>
        <div className="mb-10 flex flex-col gap-y-3">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            required
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(/\s/g, ""))}
            className={`border-2 p-2 ${warning ? "border-red-500 bg-red-300" : "border-orange-300"}`}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.replace(/\s/g, ""))}
            className={`border-2 p-2 ${warning ? "border-red-500 bg-red-300" : "border-orange-300"}`}
          />
        </div>
        <input
          type="submit"
          value="Log In"
          className="w-full cursor-pointer rounded-lg border-2 border-orange-500 bg-orange-500 p-2 font-bold text-white transition duration-200 ease-in-out hover:border-orange-300 hover:bg-orange-400"
        />
      </form>
      <button
        className="cursor-pointer rounded-lg border-2 border-orange-400 p-2 font-bold transition duration-200 ease-in-out hover:border-orange-400 hover:bg-orange-400 hover:text-white"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
      {warning ? (
        <p className="mt-2 animate-pulse text-center text-red-600">
          Invalid username or password
        </p>
      ) : null}
    </div>
  );
};

export default Input;
