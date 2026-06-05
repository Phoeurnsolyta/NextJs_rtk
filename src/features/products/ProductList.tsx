"use client";
import { useGetAllProductQuery } from "@/services/ecommerce";

export default function ProductList() {
  const { data, error, isLoading } = useGetAllProductQuery([]);

  console.log(`All product: ${data}`);
  console.log(`Is Loading: ${isLoading}`);
  console.log(`Error: ${error}`);

  return (
  <div>

  </div>
  );
}
