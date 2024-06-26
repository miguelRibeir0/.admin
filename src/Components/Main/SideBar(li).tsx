const Li: React.FC<{ value: string }> = ({ value }) => {
  const currentPath = window.location.pathname.toLowerCase();
  const formattedPath = currentPath.replace(/^\/|\/$/g, "").split("/")[0]; // so we get the second part of the url

  const formattedValue = value.toLowerCase();

  return (
    <li className="relative flex h-14 items-center justify-center border-b-2 border-orange-500 hover:bg-orange-500 hover:text-white">
      {formattedPath === formattedValue ? (
        <div className="mb-4 mr-5 flex items-center text-3xl text-orange-500">
          .
        </div>
      ) : null}
      {value}
    </li>
  );
};

export default Li;
