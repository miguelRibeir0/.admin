import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-5 flex flex-col gap-y-5">
      <form>
        <div className="mb-10 flex flex-col gap-y-3">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            required
            id="username"
            className="border-2 border-orange-300 p-2"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            className="border-2 border-orange-300 p-2"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="w-full cursor-pointer rounded-lg bg-orange-400 p-2 text-white transition duration-200 ease-in-out hover:bg-orange-500"
        />
      </form>
      <button
        className="cursor-pointer rounded-lg border-2 border-orange-300 p-2 transition duration-200 ease-in-out hover:bg-orange-500 hover:text-white"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
      <p className="mt-2 text-center text-red-600">
        Please do not use a real password!!
      </p>
    </div>
  );
};

export default Input;
