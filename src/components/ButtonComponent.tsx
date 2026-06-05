"use client";

import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { decrement, increment } from "@/features/countSlice/countSlice";

export default function ButtonComponent() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return (
    <div>
      <p className="text-2xl font-san font-bold m-10 pl-15">Count: {count}</p>
      <Button className="m-3" onClick={() => dispatch(increment(1))}>Increment</Button>

      <Button className="m-3" onClick={() => dispatch(decrement(1))}>Decrement</Button>

      <Button className="m-3" onClick={() => dispatch(increment(-count))}>Reset</Button>
    </div>
  );
}