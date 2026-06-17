"use client"

import ProductCardComponent from "@/components/products/ProductCardComponent";
// import ButtonComponent from "@/components/ButtonComponent";
// import ProductCardComponent from "@/components/products/ProductCardComponent";
// import { CardSmall } from "@/components/ui/CartComponent";
// import CartIconComponent from "@/components/ui/CartIconComponent";
import ProductList from "@/features/products/ProductList";
import ProductPage from "./products/page";
// import { addToCart } from "@/features/cart/cartSlice";
// import Image from "next/image";
// import { useDispatch } from "react-redux";

export default function Home() {
  // const dispatch = useDispatch();
  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };
  return (
    <main className="p-10">
      {/* <div>
        <ButtonComponent/>  
      </div>
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl font-san font-medium mt-2">My Cart:</h1>

        <div className="flex items-center align-middle">
          <CartIconComponent />
        </div>
      </div> */}

      {/* <CardSmall /> */}

      <section>
        
       <ProductPage/>
      </section>
    </main>
  );
}
