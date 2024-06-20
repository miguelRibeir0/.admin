const Input = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-3">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <input type="submit" className="border-2 cursor-pointer" />
    </div>
  );
};

export default Input;
