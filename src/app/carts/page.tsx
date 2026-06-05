"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-2xl font-bold text-gray-700">Your cart is empty </p>
        <Link href="/">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Products</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border border-pink-200 rounded-xl p-4 shadow-sm"
          >
            {/* Product Image */}
            <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.Name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.Name}</h2>
              <p className="text-gray-500 text-sm">Unit Price: ${item.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                −
              </Button>

              <span className="w-6 text-center font-bold">{item.quantity}</span>

              <Button
                size="sm"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-8 border-t pt-6 flex flex-col gap-2">
        <div className="flex justify-between text-gray-600">
          <span>Total Items:</span>
          <span className="font-semibold">{totalQuantity}</span>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <span>Total Price:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>

        {/* <Button className="mt-4 w-full" size="lg">
          Proceed to Checkout
        </Button> */}

        <Link href="/">
          <Button variant="outline" className="w-full mt-2 border border-pink-300">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}