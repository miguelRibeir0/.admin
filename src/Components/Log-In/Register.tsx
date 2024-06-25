import Input from "./Input(register)";

const Register = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div className="w-4/5 rounded-md border-orange-500 bg-white p-6 shadow-md outline-black lg:w-1/4">
        <h1 className="mb-10 mt-5 self-end text-3xl font-bold">New User:</h1>
        <Input></Input>
      </div>
    </section>
  );
};

export default Register;
