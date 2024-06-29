import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

const Transactions = () => {
  return (
    <Card className="border-2 border-orange-500 shadow-md">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b-orange-500">
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>

              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>250.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden text-red-500 sm:table-cell">
                Refund
              </TableCell>

              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>
                <span className="text-red-500">- 150.00</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Noah Williams</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  noah@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                Subscription
              </TableCell>

              <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>350.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>

              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>450.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>

              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>250.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden text-red-500 sm:table-cell">
                Refund
              </TableCell>

              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>
                <span className="text-red-500">- 150.00</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>

              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right">
                <span className="mr-1 text-orange-500">$</span>450.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default Transactions;
