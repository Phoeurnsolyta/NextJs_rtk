"use client";
import ProductCardComponent from "@/components/products/ProductCardComponent";
import { useGetAllProductQuery } from "@/services/ecommerce";

export default function ProductList() {
  const { data:products, error, isLoading } = useGetAllProductQuery({
    page: 1,
    size: 24
  });

  console.log(`All product: ${products}`);
  console.log(`Is Loading: ${isLoading}`);
  console.log(`Error: ${error}`);
  console.log(`product List:`, products);

  return (
  <div className=" grid grid-cols-4 gap-4 container mx-auto">
    {
      // products?.content?.map ((pro, _) => (
      //   <ProductCardComponent
      //   key={_}
      //   id={pro?.id}
      //   title={pro?.title}
      //   image={pro?.image}
      //   description={pro?.description}
      //   price={pro?.price}
      //   category={pro?.category}
      //   />

      // ))

      products?.map((pro) => (
        <ProductCardComponent
          key={pro.id}
          id={pro.id}
          title={pro.title}
          description={pro.description}
          image={pro.images?.[0] || ""}
          price={pro.price}
          category={pro.category?.name}
        />
      ))
    }

  </div>
  );
}

