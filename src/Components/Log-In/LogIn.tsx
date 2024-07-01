import { Link } from "react-router-dom";
import Input from "./Input(login)";
import github from "../../assets/github.svg";
import Logo from "../Logo";

const LogIn = () => {
  return (
    <section className="relative flex h-screen w-screen items-center justify-center gap-y-3">
      <div className="w-4/5 rounded-md border-orange-500 bg-white p-6 shadow-md outline-black lg:w-2/4 2xl:w-1/4">
        <Logo color="" />
        <Input />
      </div>
      <Link to={"https://github.com/miguelRibeir0/.admin"} target="_blank">
        <img
          src={github}
          className="absolute left-1/2 top-3/4 mt-28 w-12 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer hover:opacity-80"
        />
      </Link>
    </section>
  );
};

export default LogIn;
