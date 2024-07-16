import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  { date: "2024-04-01", visit: 222, conversions: 10 },
  { date: "2024-04-02", visit: 97, conversions: 26 },
  { date: "2024-04-03", visit: 167, conversions: 27 },
  { date: "2024-04-04", visit: 242, conversions: 10 },
  { date: "2024-04-05", visit: 373, conversions: 47 },
  { date: "2024-04-06", visit: 301, conversions: 12 },
  { date: "2024-04-07", visit: 245, conversions: 12 },
  { date: "2024-04-08", visit: 409, conversions: 15 },
  { date: "2024-04-09", visit: 59, conversions: 29 },
  { date: "2024-04-10", visit: 261, conversions: 38 },
  { date: "2024-04-11", visit: 327, conversions: 21 },
  { date: "2024-04-12", visit: 292, conversions: 19 },
  { date: "2024-04-13", visit: 342, conversions: 34 },
  { date: "2024-04-14", visit: 137, conversions: 17 },
  { date: "2024-04-15", visit: 120, conversions: 9 },
  { date: "2024-04-16", visit: 138, conversions: 27 },
  { date: "2024-04-17", visit: 446, conversions: 21 },
  { date: "2024-04-18", visit: 364, conversions: 46 },
  { date: "2024-04-19", visit: 243, conversions: 23 },
  { date: "2024-04-20", visit: 89, conversions: 15 },
  { date: "2024-04-21", visit: 137, conversions: 17 },
  { date: "2024-04-22", visit: 224, conversions: 24 },
  { date: "2024-04-23", visit: 138, conversions: 21 },
  { date: "2024-04-24", visit: 387, conversions: 23 },
  { date: "2024-04-25", visit: 215, conversions: 43 },
  { date: "2024-04-26", visit: 75, conversions: 27 },
  { date: "2024-04-27", visit: 383, conversions: 48 },
  { date: "2024-04-28", visit: 122, conversions: 27 },
  { date: "2024-04-29", visit: 315, conversions: 47 },
  { date: "2024-04-30", visit: 454, conversions: 52 },
  { date: "2024-05-01", visit: 165, conversions: 8 },
  { date: "2024-05-02", visit: 293, conversions: 31 },
  { date: "2024-05-03", visit: 247, conversions: 15 },
  { date: "2024-05-04", visit: 385, conversions: 29 },
  { date: "2024-05-05", visit: 481, conversions: 14 },
  { date: "2024-05-06", visit: 498, conversions: 36 },
  { date: "2024-05-07", visit: 388, conversions: 27 },
  { date: "2024-05-08", visit: 149, conversions: 31 },
  { date: "2024-05-09", visit: 227, conversions: 15 },
  { date: "2024-05-10", visit: 293, conversions: 14 },
  { date: "2024-05-11", visit: 335, conversions: 40 },
  { date: "2024-05-12", visit: 197, conversions: 23 },
  { date: "2024-05-13", visit: 197, conversions: 33 },
  { date: "2024-05-14", visit: 448, conversions: 40 },
  { date: "2024-05-15", visit: 473, conversions: 15 },
  { date: "2024-05-16", visit: 338, conversions: 27 },
  { date: "2024-05-17", visit: 499, conversions: 38 },
  { date: "2024-05-18", visit: 315, conversions: 13 },
  { date: "2024-05-19", visit: 235, conversions: 12 },
  { date: "2024-05-20", visit: 177, conversions: 40 },
  { date: "2024-05-21", visit: 82, conversions: 10 },
  { date: "2024-05-22", visit: 81, conversions: 10 },
  { date: "2024-05-23", visit: 252, conversions: 15 },
  { date: "2024-05-24", visit: 294, conversions: 32 },
  { date: "2024-05-25", visit: 201, conversions: 17 },
  { date: "2024-05-26", visit: 213, conversions: 23 },
  { date: "2024-05-27", visit: 420, conversions: 43 },
  { date: "2024-05-28", visit: 233, conversions: 33 },
  { date: "2024-05-29", visit: 78, conversions: 17 },
  { date: "2024-05-30", visit: 340, conversions: 40 },
  { date: "2024-05-31", visit: 178, conversions: 37 },
  { date: "2024-06-01", visit: 178, conversions: 35 },
  { date: "2024-06-02", visit: 470, conversions: 16 },
  { date: "2024-06-03", visit: 103, conversions: 21 },
  { date: "2024-06-04", visit: 439, conversions: 43 },
  { date: "2024-06-05", visit: 88, conversions: 23 },
  { date: "2024-06-06", visit: 294, conversions: 22 },
  { date: "2024-06-07", visit: 323, conversions: 48 },
  { date: "2024-06-08", visit: 385, conversions: 46 },
  { date: "2024-06-09", visit: 438, conversions: 8 },
  { date: "2024-06-10", visit: 155, conversions: 25 },
  { date: "2024-06-11", visit: 92, conversions: 17 },
  { date: "2024-06-12", visit: 492, conversions: 46 },
  { date: "2024-06-13", visit: 81, conversions: 17 },
  { date: "2024-06-14", visit: 426, conversions: 12 },
  { date: "2024-06-15", visit: 307, conversions: 48 },
  { date: "2024-06-16", visit: 371, conversions: 21 },
  { date: "2024-06-17", visit: 475, conversions: 46 },
  { date: "2024-06-18", visit: 107, conversions: 34 },
  { date: "2024-06-19", visit: 341, conversions: 25 },
  { date: "2024-06-20", visit: 408, conversions: 4 },
  { date: "2024-06-21", visit: 169, conversions: 31 },
  { date: "2024-06-22", visit: 317, conversions: 10 },
  { date: "2024-06-23", visit: 480, conversions: 19 },
  { date: "2024-06-24", visit: 132, conversions: 23 },
  { date: "2024-06-25", visit: 141, conversions: 38 },
  { date: "2024-06-26", visit: 434, conversions: 38 },
  { date: "2024-06-27", visit: 448, conversions: 19 },
  { date: "2024-06-28", visit: 149, conversions: 17 },
  { date: "2024-06-29", visit: 103, conversions: 13 },
  { date: "2024-06-30", visit: 446, conversions: 17 },
];

const chartConfig = {
  visit: {
    label: "Visits",
    color: "#ea580c",
  },
  conversions: {
    label: "Conversions",
    color: "#fbbf24",
  },
} satisfies ChartConfig;

const LineChartSales = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("visit");

  const total = React.useMemo(
    () => ({
      visit: chartData.reduce((acc, curr) => acc + curr.visit, 0),
      conversions: chartData.reduce((acc, curr) => acc + curr.conversions, 0),
    }),
    [],
  );

  return (
    <Card className="border-2 border-orange-500">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Website Visits Conversion</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["visit", "conversions"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left transition duration-200 ease-in-out even:border-l hover:bg-orange-100 hover:bg-opacity-40 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartSales;
