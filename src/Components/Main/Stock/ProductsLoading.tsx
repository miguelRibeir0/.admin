import { MoreHorizontal } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

const rows = ["", "", ""];

const ProductsLoading = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden md:table-cell">Quantity</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((_, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="hidden sm:table-cell"></TableCell>
                  <TableCell className="font-medium">
                    <div className="h-7 w-full animate-pulse rounded-lg bg-slate-200"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-7 w-full animate-pulse rounded-lg bg-slate-200"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-7 w-full animate-pulse rounded-lg bg-slate-200"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-7 w-full animate-pulse rounded-lg bg-slate-200"></div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="h-7 w-full animate-pulse rounded-lg bg-slate-200"></div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell"></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground text-xs">
          Showing <strong>1-X</strong> of <strong>X</strong> products
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductsLoading;
