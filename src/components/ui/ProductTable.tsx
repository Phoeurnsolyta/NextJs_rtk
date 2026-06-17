"use client";

import { ProductType } from "@/lib/products";
import Image from "next/image";
import { Button } from "../ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface ProductTableProps {
  products: ProductType[];
  onViewProduct: (product: ProductType) => void;
}

export default function ProductTable({
  products,
  onViewProduct,
}: ProductTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow
            key={product.id}
            className="cursor-pointer"
            onClick={() => onViewProduct(product)}
          >
            <TableCell>
              <Image
                src={product.images?.[0] || ""}
                alt={product.title}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
            </TableCell>

            <TableCell className="font-medium">{product.title}</TableCell>

            <TableCell className="max-w-xs truncate">
              {product.description}
            </TableCell>

            <TableCell>${product.price}</TableCell>

            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" onClick={(e) => e.stopPropagation()}>
                  Add To Cart
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={(e) => e.stopPropagation()}
                >
                  Remove
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
