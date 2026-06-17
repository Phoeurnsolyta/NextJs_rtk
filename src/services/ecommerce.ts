import { CreateProductType, ProductReponse, ProductType } from "@/lib/products";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    // gettAll product
    // getAllProduct: builder.query< ProductReponse,
    // {page: number, size:number}>({
    //   query: ({page = 0, size = 12}) => `/products?page=${page}& size = ${size}`,
    // }),

    getAllProduct: builder.query<ProductType[], { page: number; size: number }>(
      {
        query: ({ page, size }) =>
          `/products?offset=${(page - 1) * size}&limit=${size}`,
      },
    ),

    // get single product
    getSingleProduct: builder.query<ProductType, string>({
      query: (id) => `/products/${id}`,
    }),

    // get product by uuid
    // getProductByUuid: builder.query<ProductType, string>({
    //   query: (uuid: string) => ({
    //     url: `/products/${uuid}`,
    //   }),
    // }),
    // craete product
    // createProduct : builder.mutation <CreateProductType> ({
    //     query: (newProduct: CreateProductType) => ({
    //         url: `/products`,
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authentication' : `bearea: ${process.env}`
    //         },
    //         body: newProduct
    //     })
    // })
  }),
});

export const { useGetAllProductQuery, useGetSingleProductQuery } = ecommerceApi;
