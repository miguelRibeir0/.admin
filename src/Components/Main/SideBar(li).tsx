const Li: React.FC<{ value: string }> = ({ value }) => {
  const currentPath = window.location.pathname.toLowerCase();
  const formattedPath = currentPath.replace(/^\/|\/$/g, "").split("/")[0]; // so we get the second part of the url

  const formattedValue = value.toLowerCase();

  return (
    <li className="relative flex h-20 cursor-pointer items-center justify-center gap-x-5 border-b-2 border-r-2 border-orange-500 transition-all duration-200 ease-in-out hover:bg-orange-500 hover:text-white">
      {formattedPath === formattedValue ? (
        <div className="mb-4 flex animate-pulse items-center text-3xl text-orange-500">
          .
        </div>
      ) : null}
      {value}
    </li>
  );
};

export default Li;
