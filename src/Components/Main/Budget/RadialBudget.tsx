import { useState } from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/Components/ui/card";
import { ChartConfig, ChartContainer } from "@/Components/ui/chart";

const chartData = [{ spent: 1125, fill: "#f97316" }];

const chartConfig = {
  spent: {
    label: "Safari",
    color: "#f97316",
  },
} satisfies ChartConfig;

type RadialBudgetProps = {
  setEdit: boolean;
};

const RadialBudget: React.FC<RadialBudgetProps> = ({ setEdit }) => {
  const [inputValue, setInputValue] = useState("");
  const [budget, setBudget] = useState(100);
  const [displayValue, setDisplayValue] = useState(4050);
  const [percent, setPercent] = useState(27);

  const spent = chartData[0].spent;

  const handleBudgetChange = (e: React.FormEvent) => {
    e.preventDefault();
    //Calculating the % related to the budget set
    const finalValue = (spent * 360) / parseInt(inputValue);
    setBudget(Math.floor(finalValue));
    setDisplayValue(parseInt(inputValue));
    setPercent(Math.floor((Math.floor(finalValue) * 100) / 360));
    setInputValue("");
  };

  return (
    <Card className="flex flex-col border-2 border-orange-500 pb-2 pt-2">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl lg:text-2xl">
          Monthly Budget | {displayValue + " $"}
        </CardTitle>
        <CardDescription>June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={budget}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="spent" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {spent.toLocaleString() + "$"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Spent
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      {setEdit === true ? (
        <>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Using up {percent.toLocaleString()}% of the budget
            </div>
          </CardFooter>
          <section className="mb-10">
            <form
              onSubmit={handleBudgetChange}
              className="flex w-full flex-col items-center justify-center gap-y-7"
            >
              <div className="flex gap-x-5">
                <label>New Budget :</label>
                <input
                  type="number"
                  className="w-24 border-2 border-orange-500 pl-1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  min={0}
                  max={100000}
                />
              </div>
              <input
                type="submit"
                className="w-3/4 cursor-pointer rounded-lg bg-orange-500 px-3 py-1 text-white hover:bg-orange-400 lg:w-1/6"
              />
            </form>
          </section>
        </>
      ) : (
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Using up 27% of the budget
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total money spent for the last month
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default RadialBudget;
