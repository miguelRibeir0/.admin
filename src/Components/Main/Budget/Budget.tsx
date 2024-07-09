import Nav from "../Nav";
import PageTitle from "../PageTitle";
import RadialBudget from "./RadialBudget";
import LinearGraph from "./LinearGraph";

const Budget = () => {
  return (
    <div>
      <Nav />
      <div className="h-20 w-screen" /> {/* nav filler */}
      <PageTitle title="Budget" />
      <section className="m-10 flex flex-wrap items-center justify-center gap-8">
        <div className="w-full self-start lg:w-5/12">
          <RadialBudget setEdit={true} />
        </div>
      </section>
      <section className="m-10 flex flex-wrap items-center justify-center gap-8">
        <div className="w-full self-start">
          <LinearGraph />
        </div>
      </section>
    </div>
  );
};

export default Budget;
