import Nav from "../Nav";
import PageTitle from "../PageTitle";
import BarChartSales from "./BarChart";
import PieChartSales from "./PieChart";
import Revenue from "../Dashboard/Revenue";
import LineChartSales from "./LineChart";
import Transactions from "../Dashboard/Transactions";

const Sales = () => {
  return (
    <div>
      <Nav />
      <div className="h-20 w-screen" /> {/* nav filler */}
      <PageTitle title="Sales" />
      <section className="m-10 flex flex-wrap items-center justify-center gap-8">
        <div className="w-full self-start lg:w-5/12">
          <BarChartSales />
        </div>
        <div className="flex w-full flex-col gap-y-6 self-start lg:w-2/5">
          <Revenue />
          <PieChartSales />
        </div>
      </section>
      <section className="m-10 flex flex-wrap items-center justify-center gap-8">
        <div className="w-full lg:w-5/6">
          <LineChartSales />
        </div>
      </section>
      <section className="m-10 flex flex-wrap items-center justify-center gap-8">
        <div className="w-full lg:w-5/6">
          <Transactions />
        </div>
      </section>
    </div>
  );
};

export default Sales;
