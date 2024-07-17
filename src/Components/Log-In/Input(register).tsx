import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { newUser, fetchUserList } from "./fetchrequests";

const Input = () => {
  const navigate = useNavigate();

  let usernameExists: boolean = false; //flag to check if the user exists

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);
  const [registered, setRegistered] = useState(false);

  const userRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // breaking if its already being registered
    if (registered) return;
    // flag for username checking
    setRegistered(true);

    fetchUserList().then((data) => {
      for (const user of data) {
        if (user.username === username) {
          // looking for matching usernames
          setWarning(true);
          usernameExists = true;
          break;
        }
      }
      if (!usernameExists) {
        // if no match was found, register the user
        newUser(username, password).then(() => {
          navigate("/");
        });
      }
      setRegistered(false); // reset
    });
  };

  useEffect(() => {
    // reseting warning on username changes
    if (warning) {
      setWarning(false);
    } // eslint-disable-next-line
  }, [username]);

  return (
    <div className="mb-5 flex flex-col gap-y-5">
      <form onSubmit={userRegister}>
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
            className="border-2 border-orange-300 p-2"
          />
        </div>

        <input
          type="submit"
          value="Register"
          disabled={registered}
          className="w-full cursor-pointer rounded-lg border-2 border-orange-500 bg-orange-500 p-2 font-bold text-white transition duration-200 ease-in-out hover:border-orange-400 hover:bg-orange-400"
        />
      </form>
      <button
        className="cursor-pointer rounded-lg border-2 border-orange-400 p-2 font-bold transition duration-200 ease-in-out hover:border-orange-400 hover:bg-orange-400 hover:text-white"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
      {warning ? (
        <p className="mt-2 animate-pulse text-center text-red-600">
          Username already exists
        </p>
      ) : (
        <p className="mt-2 text-center text-red-600">
          Please do not use a real password!!
        </p>
      )}
    </div>
  );
};

export default Input;
