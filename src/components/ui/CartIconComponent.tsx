"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CartIconComponent() {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  );
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <Link href="/carts">
      {" "}
      <div className="flex items-center gap-4 cursor-pointer hover:opacity-75 transition">
        <div className="relative text-3xl">
          <FontAwesomeIcon icon={faCartShopping} />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </div>
        <p className="font-semibold">Total: ${totalAmount.toFixed(2)}</p>
      </div>
    </Link>
  );
}
