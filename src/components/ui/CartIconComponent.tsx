"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartIconComponent() {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  );

  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <div className="relative text-3xl">
      <FontAwesomeIcon icon={faCartShopping} />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
      <p>Total: ${totalAmount}</p>
    </div>
  );
}
