"use client";

import Image from "next/image";
import { ProductType } from "@/lib/products";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductDetailsModalProps {
  product: ProductType | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailComponent({
  product,
  open,
  onOpenChange,
}: ProductDetailsModalProps) {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {product.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Image
            src={product.images?.[0] || ""}
            alt={product.title}
            width={500}
            height={300}
            className="w-full rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold">
              Description
            </h3>
            <p>{product.description}</p>
          </div>

          <div>
            <span className="font-semibold">
              Price:
            </span>{" "}
            ${product.price}
          </div>

          {product.category && (
            <div>
              <span className="font-semibold">
                Category:
              </span>{" "}
              {product.category.name}
            </div>
          )}

          <div>
            <span className="font-semibold">
              Product ID:
            </span>{" "}
            {product.id}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
