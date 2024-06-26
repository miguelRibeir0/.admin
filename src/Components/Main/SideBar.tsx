import Li from "./SideBar(li)";

const SideBar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <>
      <div
        className={`absolute z-10 h-screen w-screen bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`fixed left-0 top-0 z-20 mt-20 h-screen w-1/2 bg-white transition-transform duration-500 lg:w-1/4 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col font-bold">
          <Li value="Dashboard"></Li>
          <Li value="Stock"></Li>
          <Li value="Sales"></Li>
          <Li value="Budget"></Li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
