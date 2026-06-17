"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import ProductTable from "@/components/ui/ProductTable";
import ProductDetailComponent from "@/components/modal/ProductDetailComponent";

import { ProductType } from "@/lib/products";
import { useGetAllProductQuery } from "@/services/ecommerce";

export default function ProductPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );

  const [openModal, setOpenModal] = useState(false);

  const size = 10;

  const {
    data: products,
    isLoading,
    error,
  } = useGetAllProductQuery({
    page,
    size,
  });

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter((product) =>
        [
          product.id,
          product.title,
          product.description,
          product.price,
          product.category?.name,
        ]
          .join(" ")
          .toLowerCase()
          .includes(keyword),
      );
    }

    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, sortOrder]);

  const handleViewProduct = (product: ProductType) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container mx-auto p-5">
   
      <div className="flex gap-3 mb-6">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          variant={sortOrder === "asc" ? "default" : "outline"}
          onClick={() => setSortOrder("asc")}
        >
          ASC Price
        </Button>

        <Button
          variant={sortOrder === "desc" ? "default" : "outline"}
          onClick={() => setSortOrder("desc")}
        >
         DESC Price
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            setSearch("");
            setSortOrder("none");
          }}
        >
          Reset
        </Button>
      </div>

      <ProductTable
        products={filteredProducts}
        onViewProduct={handleViewProduct}
      />

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>

        <span className="flex items-center">Page {page}</span>

        <Button variant="outline" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
      </div>

      <ProductDetailComponent
        product={selectedProduct}
        open={openModal}
        onOpenChange={setOpenModal}
      />
    </div>
  );
}
