import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";
const chartData = [
  { product: "Fender", sales: 275, fill: "var(--color-chrome)" },
  { product: "Yamaha", sales: 200, fill: "var(--color-safari)" },
  { product: "Shure", sales: 287, fill: "var(--color-firefox)" },
  { product: "Alesis", sales: 173, fill: "var(--color-edge)" },
  { product: "Bose", sales: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  sales: {
    label: "Sales",
  },
  chrome: {
    label: "Chrome",
    color: "#431407",
  },
  safari: {
    label: "Safari",
    color: "#9a3412",
  },
  firefox: {
    label: "Firefox",
    color: "#ea580c",
  },
  edge: {
    label: "Edge",
    color: "#fbbf24",
  },
  other: {
    label: "Other",
    color: "#fed7aa",
  },
} satisfies ChartConfig;

const PieChartSales = () => {
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, []);

  return (
    <Card className="flex flex-col border-2 border-orange-500 pb-5 pt-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sales by Product</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="product"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Sales
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default PieChartSales;
