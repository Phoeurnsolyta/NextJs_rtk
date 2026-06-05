"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardSmall() {
  const dispatch = useDispatch();

  const product = {
    id: 1,
    Name: "Small Card Product",
    image:
      "https://i.pinimg.com/736x/e7/7f/02/e77f02479d794a433d491dd9506223fd.jpg",
    price: 10,
    quantity: 0,
  };

  const product1 = {
    id: 2,
    Name: "Small Card Product",
    image:
      "https://i.pinimg.com/1200x/58/ed/17/58ed17ba4599c2522a74a8ec57df2b9c.jpg",
    price: 10,
    quantity: 0,
  };

  return (
    <main className=" grid grid-cols-2">
      {/* card 1 */}
      <Card
        size="sm"
        className="w-[320px] overflow-hidden rounded-xl border border-pink-300 mx-5 my-5"
      >
        <CardHeader>
          <CardTitle>{product.Name}</CardTitle>
          <CardDescription>Product for testing Redux Cart</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="relative h-[250px] w-full">
            <Image
              src={product.image}
              alt={product.Name}
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-lg">Price: ${product.price}</p>

          <p className="mt-2 font-semibold">Quantity: {product.quantity}</p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button onClick={() => dispatch(addToCart(product))}>Add Cart</Button>

          <Button
            variant="destructive"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            Remove Cart
          </Button>
        </CardFooter>
      </Card>

      {/* card 2 */}
      <Card
        size="sm"
        className="w-[320px] overflow-hidden rounded-xl border border-pink-300 mx-5 my-5"
      >
        <CardHeader>
          <CardTitle>{product1.Name}</CardTitle>
          <CardDescription>Product for testing Redux Cart</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="relative h-[250px] w-full">
            <Image
              src={product1.image}
              alt={product1.Name}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <p className="mt-4 text-lg font-semibold">Price: ${product1.price}</p>
          <p className="mt-2 font-semibold">Quantity: {product1.quantity}</p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button onClick={() => dispatch(addToCart(product1))}>
            Add Cart
          </Button>

          <Button
            variant="destructive"
            onClick={() => dispatch(removeFromCart(product1.id))}
          >
            Remove Cart
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
