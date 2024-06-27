import { CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const Sales = () => {
  return (
    <Card className="border-2 border-orange-500 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sales</CardTitle>
        <CreditCard className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          <span className="mr-1 text-orange-500">+</span>12,234
        </div>
        <p className="text-muted-foreground mt-1 text-xs">
          +19% from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default Sales;
