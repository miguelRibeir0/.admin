const Li: React.FC<{ value: string }> = ({ value }) => {
  const currentPath = window.location.pathname.toLowerCase();
  const formattedPath = currentPath.replace(/^\/|\/$/g, "").split("/")[0]; // so we get the second part of the url

  const formattedValue = value.toLowerCase();

  return (
    <li className="relative flex h-20 cursor-pointer items-center justify-center gap-x-5 border-b-2 border-orange-500 transition-all duration-200 ease-in-out hover:bg-orange-500 hover:text-white dark:border-gray-100 dark:border-opacity-50">
      {formattedPath === formattedValue ? (
        <div className="absolute mb-[1.1rem] mr-28 animate-pulse items-center text-4xl text-orange-500 lg:mr-40">
          .
        </div>
      ) : null}
      {value}
    </li>
  );
};

export default Li;
