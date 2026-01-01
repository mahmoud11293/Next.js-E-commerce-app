"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/context/CartContext";
import { Badge, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartDetails } = useCart();

  return (
    <section className="py-20">
      <div className="container mx-auto">
        {cartDetails && (
          <>
            <section className="mb-20">
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">SubTotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartDetails.data.products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-x-5 relative">
                          <Badge className="absolute -top-0.5 -start-0.5 h-5 min-w-5 rounded-full font-mono text-[0.625rem] leading-5 text-center text-white">
                            <X />
                          </Badge>

                          <Image
                            src={product.product.imageCover}
                            width={55}
                            height={55}
                            alt={product.product.title}
                          />
                          <h2>{product.product.title}</h2>
                        </div>
                      </TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.count}</TableCell>
                      <TableCell className="text-right">
                        {product.count * product.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex justify-between">
                <Button variant={"outline"}>
                  <Link href={"/products"}>Return to Shop</Link>
                </Button>

                <Button variant={"destructive"}>Remove All</Button>
              </div>
            </section>
            <section className="flex justify-between">
              <div className="flex items-center gap-4 w-5/12">
                <Input placeholder="Coupon Code" />
                <Button variant={"destructive"}>Apply Coupon</Button>
              </div>

              <div className="w-5/12 px-6 py-8 border border-gray-900">
                <h3 className="font-bold mb-6 text-xl">Cart Total</h3>
                <ul className="divide-y divide-gray-900">
                  <li className="py-6 flex justify-between">
                    <span>Subtotal:</span> <span>100 EGP</span>
                  </li>
                  <li className="py-6 flex justify-between">
                    <span>Shipping:</span> <span>Free</span>
                  </li>
                  <li className="py-6 flex justify-between">
                    <span>Total:</span> <span>100 EGP</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Button variant={"destructive"}>Proceed to Checkout</Button>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
}
