"use client"
import { ProductCardProps, ProductType } from "@/lib/products";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "../ui/card";
import { Button } from "../ui/button";

export default function ProductCardComponent({id, title, description, image, price, category}: ProductCardProps) {
  return (
    <div>
      <Card
            key={id}
            size="sm"
            className="w-[320px] overflow-hidden rounded-xl border border-pink-300 mx-5 my-5"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="relative h-[250px] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">
                Price: ${price}
              </p>

              <p className="mt-4 text-lg font-semibold">
                Category: {category}
              </p>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button >
                Add To Cart
              </Button>
              <Button
                variant="destructive"
              >
                Remove From Cart
              </Button>
            </CardFooter>
          </Card>
    </div>
  );
}
