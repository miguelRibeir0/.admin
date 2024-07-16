import Nav from "./Nav";
import Revenue from "./Dashboard/Revenue";
import Subs from "./Dashboard/Subs";
import SalesNumber from "./Dashboard/Sales";
import Transactions from "./Dashboard/Transactions";
import PageTitle from "./PageTitle";
import PieChartSales from "./Sales/PieChart";
import RadialBudget from "./Budget/RadialBudget";
import Products from "./Stock/Products";

//Landing Page after login
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="h-20 w-screen" /> {/* nav filler */}
      <PageTitle title="Dashboard" />
      <section className="m-10 flex flex-wrap justify-center gap-8 lg:gap-y-20">
        <div className="w-full lg:w-1/4">
          <Revenue />
        </div>
        <div className="w-full lg:w-1/4">
          <Subs />
        </div>
        <div className="w-full lg:w-1/4">
          <SalesNumber />
        </div>
        <div className="w-full lg:w-11/12">
          <Transactions />
        </div>
        <div className="w-full lg:w-5/12">
          <PieChartSales />
        </div>
        <div className="w-full lg:w-5/12">
          <RadialBudget setEdit={false} />
        </div>
        <div className="w-full lg:w-11/12">
          <Products submitted={null} submitting={() => ""} setEdit={false} />
        </div>
      </section>
    </div>
  );
};

export default Home;
