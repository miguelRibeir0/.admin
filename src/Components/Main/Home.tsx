import Nav from "./Nav";
import Revenue from "./Dashboard/Revenue";
import Subs from "./Dashboard/Subs";
import Sales from "./Dashboard/Sales";
import Transactions from "./Dashboard/Transactions";
import PageTitle from "./PageTitle";

//Landing Page after login
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="h-20 w-screen" /> {/* nav filler */}
      <PageTitle title="Dashboard" />
      <section className="m-10 flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-1/4">
          <Revenue />
        </div>
        <div className="w-full lg:w-1/4">
          <Subs />
        </div>
        <div className="w-full lg:w-1/4">
          <Sales />
        </div>
        <div className="w-full">
          <Transactions />
        </div>
      </section>
    </div>
  );
};

export default Home;
