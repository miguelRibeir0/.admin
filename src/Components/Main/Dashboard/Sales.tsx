import { CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import AnimatedNumbers from "react-animated-numbers";

const Sales = () => {
  const number: number = Math.floor(Math.random() * 5000) + 500;
  const percentage: number = Math.floor(Math.random() * 100);
  const positive: boolean = Math.random() < 0.5;
  return (
    <Card className="border-2 border-orange-500 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sales</CardTitle>
        <CreditCard className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-1 text-2xl font-bold">
          <p className="text-base font-bold text-orange-500">+</p>
          <AnimatedNumbers
            includeComma
            transitions={() => ({
              type: "spring",
              duration: 1.5,
            })}
            animateToNumber={number}
          ></AnimatedNumbers>
        </div>
        <p
          className={`text-muted-foreground mt-1 text-xs ${positive ? "" : "text-red-500"}`}
        >
          {positive ? "+" : "-"}
          {percentage}% from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default Sales;
