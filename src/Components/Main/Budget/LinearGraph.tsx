"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

const chartData = [
  { date: "2024-04-01", Sold: 222, Spent: 150 },
  { date: "2024-04-02", Sold: 97, Spent: 180 },
  { date: "2024-04-03", Sold: 167, Spent: 120 },
  { date: "2024-04-04", Sold: 242, Spent: 260 },
  { date: "2024-04-05", Sold: 373, Spent: 290 },
  { date: "2024-04-06", Sold: 301, Spent: 340 },
  { date: "2024-04-07", Sold: 245, Spent: 180 },
  { date: "2024-04-08", Sold: 409, Spent: 320 },
  { date: "2024-04-09", Sold: 59, Spent: 110 },
  { date: "2024-04-10", Sold: 261, Spent: 190 },
  { date: "2024-04-11", Sold: 327, Spent: 350 },
  { date: "2024-04-12", Sold: 292, Spent: 210 },
  { date: "2024-04-13", Sold: 342, Spent: 380 },
  { date: "2024-04-14", Sold: 137, Spent: 220 },
  { date: "2024-04-15", Sold: 120, Spent: 170 },
  { date: "2024-04-16", Sold: 138, Spent: 190 },
  { date: "2024-04-17", Sold: 446, Spent: 360 },
  { date: "2024-04-18", Sold: 364, Spent: 410 },
  { date: "2024-04-19", Sold: 243, Spent: 180 },
  { date: "2024-04-20", Sold: 89, Spent: 150 },
  { date: "2024-04-21", Sold: 137, Spent: 200 },
  { date: "2024-04-22", Sold: 224, Spent: 170 },
  { date: "2024-04-23", Sold: 138, Spent: 230 },
  { date: "2024-04-24", Sold: 387, Spent: 290 },
  { date: "2024-04-25", Sold: 215, Spent: 250 },
  { date: "2024-04-26", Sold: 75, Spent: 130 },
  { date: "2024-04-27", Sold: 383, Spent: 420 },
  { date: "2024-04-28", Sold: 122, Spent: 180 },
  { date: "2024-04-29", Sold: 315, Spent: 240 },
  { date: "2024-04-30", Sold: 454, Spent: 380 },
  { date: "2024-05-01", Sold: 165, Spent: 220 },
  { date: "2024-05-02", Sold: 293, Spent: 310 },
  { date: "2024-05-03", Sold: 247, Spent: 190 },
  { date: "2024-05-04", Sold: 385, Spent: 420 },
  { date: "2024-05-05", Sold: 481, Spent: 390 },
  { date: "2024-05-06", Sold: 498, Spent: 520 },
  { date: "2024-05-07", Sold: 388, Spent: 300 },
  { date: "2024-05-08", Sold: 149, Spent: 210 },
  { date: "2024-05-09", Sold: 227, Spent: 180 },
  { date: "2024-05-10", Sold: 293, Spent: 330 },
  { date: "2024-05-11", Sold: 335, Spent: 270 },
  { date: "2024-05-12", Sold: 197, Spent: 240 },
  { date: "2024-05-13", Sold: 197, Spent: 160 },
  { date: "2024-05-14", Sold: 448, Spent: 490 },
  { date: "2024-05-15", Sold: 473, Spent: 380 },
  { date: "2024-05-16", Sold: 338, Spent: 400 },
  { date: "2024-05-17", Sold: 499, Spent: 420 },
  { date: "2024-05-18", Sold: 315, Spent: 350 },
  { date: "2024-05-19", Sold: 235, Spent: 180 },
  { date: "2024-05-20", Sold: 177, Spent: 230 },
  { date: "2024-05-21", Sold: 82, Spent: 140 },
  { date: "2024-05-22", Sold: 81, Spent: 120 },
  { date: "2024-05-23", Sold: 252, Spent: 290 },
  { date: "2024-05-24", Sold: 294, Spent: 220 },
  { date: "2024-05-25", Sold: 201, Spent: 250 },
  { date: "2024-05-26", Sold: 213, Spent: 170 },
  { date: "2024-05-27", Sold: 420, Spent: 460 },
  { date: "2024-05-28", Sold: 233, Spent: 190 },
  { date: "2024-05-29", Sold: 78, Spent: 130 },
  { date: "2024-05-30", Sold: 340, Spent: 280 },
  { date: "2024-05-31", Sold: 178, Spent: 230 },
  { date: "2024-06-01", Sold: 178, Spent: 200 },
  { date: "2024-06-02", Sold: 470, Spent: 410 },
  { date: "2024-06-03", Sold: 103, Spent: 160 },
  { date: "2024-06-04", Sold: 439, Spent: 380 },
  { date: "2024-06-05", Sold: 88, Spent: 140 },
  { date: "2024-06-06", Sold: 294, Spent: 250 },
  { date: "2024-06-07", Sold: 323, Spent: 370 },
  { date: "2024-06-08", Sold: 385, Spent: 320 },
  { date: "2024-06-09", Sold: 438, Spent: 480 },
  { date: "2024-06-10", Sold: 155, Spent: 200 },
  { date: "2024-06-11", Sold: 92, Spent: 150 },
  { date: "2024-06-12", Sold: 492, Spent: 420 },
  { date: "2024-06-13", Sold: 81, Spent: 130 },
  { date: "2024-06-14", Sold: 426, Spent: 380 },
  { date: "2024-06-15", Sold: 307, Spent: 350 },
  { date: "2024-06-16", Sold: 371, Spent: 310 },
  { date: "2024-06-17", Sold: 475, Spent: 520 },
  { date: "2024-06-18", Sold: 107, Spent: 170 },
  { date: "2024-06-19", Sold: 341, Spent: 290 },
  { date: "2024-06-20", Sold: 408, Spent: 450 },
  { date: "2024-06-21", Sold: 169, Spent: 210 },
  { date: "2024-06-22", Sold: 317, Spent: 270 },
  { date: "2024-06-23", Sold: 480, Spent: 530 },
  { date: "2024-06-24", Sold: 132, Spent: 180 },
  { date: "2024-06-25", Sold: 141, Spent: 190 },
  { date: "2024-06-26", Sold: 434, Spent: 380 },
  { date: "2024-06-27", Sold: 448, Spent: 490 },
  { date: "2024-06-28", Sold: 149, Spent: 200 },
  { date: "2024-06-29", Sold: 103, Spent: 160 },
  { date: "2024-06-30", Sold: 446, Spent: 400 },
];

const chartConfig = {
  Sold: {
    label: "Sold",
    color: "hsl(24.6,95%,53.1%)",
  },
  Spent: {
    label: "Spent",
    color: "hsl(0,0%,30%)",
  },
} satisfies ChartConfig;

const LinearGraph = () => {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card className="border-2 border-orange-500">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Profit Tracking</CardTitle>
          <CardDescription>
            Showing money spent vs earned for the last 3 months ( in USD $ )
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSold" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Sold)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Sold)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSpent" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Spent)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Spent)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
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
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Spent"
              type="natural"
              fill="url(#fillSpent)"
              stroke="var(--color-Spent)"
              stackId="a"
            />
            <Area
              dataKey="Sold"
              type="natural"
              fill="url(#fillSold)"
              stroke="var(--color-Sold)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default LinearGraph;
