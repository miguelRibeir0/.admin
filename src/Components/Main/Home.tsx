import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="h-20 w-screen" /> {/* nav filler */}
      <div className="m-auto mt-10 h-44 w-3/4 rounded-md bg-red-400"></div>
    </div>
  );
};

export default Home;
