import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
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

import { getDefaultProducts, getUSerProducts } from "./fetchrequests";
import ProductsLoading from "./ProductsLoading";
import ProductEdit from "./ProductEdit";
import ProductDelete from "./ProductDelete";

type ProductsProps = {
  submitted: boolean | null;
  submitting: (value: boolean) => void;
  setEdit: boolean;
};

const Products: React.FC<ProductsProps> = ({
  submitted,
  submitting,
  setEdit,
}) => {
  const queryClient = useQueryClient();
  const userId = Number(sessionStorage.getItem("userId"));
  //Fetching the Default Products
  const { data: product, isLoading } = useQuery({
    queryKey: ["products", submitted],
    queryFn: getDefaultProducts,
  });
  //Fetching the User Specific Products
  const { data: userProduct } = useQuery({
    queryKey: ["userProducts", userId, submitted],
    queryFn: ({ queryKey }) => {
      const [, userId] = queryKey;
      return getUSerProducts(Number(userId));
    },
  });
  // Making sure each row has its own edit window
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  // Making sure each row has its own delete window
  const [deletingProductId, setDeletingProductId] = useState<number | null>(
    null,
  );

  useEffect(() => {
    // It allows to change submitted back to false, so table refetches
    queryClient.invalidateQueries({ queryKey: ["products"] });
    queryClient.invalidateQueries({ queryKey: ["userProducts"] });
    submitting(false);
  }, [submitted, queryClient, submitting]);

  interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    status: string;
    date: string;
  }

  if (isLoading) return <ProductsLoading />;

  return (
    <>
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
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  Actions
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product?.map((product: Product) => {
                return (
                  <TableRow key={product.id}>
                    <TableCell className="hidden sm:table-cell"></TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>
                      {product.status === "Draft" ? (
                        <Badge variant="secondary">{product.status}</Badge>
                      ) : (
                        <Badge variant="outline">{product.status}</Badge>
                      )}
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.quantity}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.date}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                );
              })}
              {setEdit === true
                ? userProduct?.map((product: Product) => {
                    return (
                      <TableRow key={product.id}>
                        <TableCell className="hidden sm:table-cell"></TableCell>
                        <TableCell className="font-medium">
                          {product.name}
                        </TableCell>
                        <TableCell>
                          {product.status === "Draft" ? (
                            <Badge variant="secondary">{product.status}</Badge>
                          ) : (
                            <Badge variant="outline">{product.status}</Badge>
                          )}
                        </TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product.quantity}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product.date}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger
                              asChild
                              className="hover:bg-orange-200"
                            >
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
                              <DropdownMenuItem
                                onClick={() => setEditingProductId(product.id)}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => setDeletingProductId(product.id)}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                            {/* Confirming the edit window matches the product id  */}
                            {editingProductId === product.id && (
                              <ProductEdit
                                isOpen={editingProductId !== null}
                                setIsOpen={() => setEditingProductId(null)}
                                productId={product.id}
                                pName={product.name}
                                pQuantity={product.quantity}
                                pPrice={product.price}
                                pStatus={product.status}
                                submitting={submitting}
                              />
                            )}
                            {deletingProductId === product.id && (
                              <ProductDelete
                                isOpen={deletingProductId !== null}
                                setIsOpen={() => setDeletingProductId(null)}
                                productId={product.id}
                                submitting={submitting}
                              />
                            )}
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : null}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-muted-foreground text-xs">
            Showing <strong>1-X</strong> of <strong>X</strong> products
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Products;
