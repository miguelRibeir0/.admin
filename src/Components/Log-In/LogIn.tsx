import Input from "./Input";

const LogIn = () => {
  return (
    <div className="w-4/5 rounded-md border-orange-500 bg-white p-6 shadow-md outline-black">
      <h1 className="mb-10 mt-5 self-end text-3xl font-bold">
        <span className="mr-1 text-orange-500">.</span>admin
      </h1>
      <Input></Input>
    </div>
  );
};

export default LogIn;
