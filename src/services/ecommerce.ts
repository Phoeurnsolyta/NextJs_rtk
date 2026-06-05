import { CreateProductType, ProductType } from "@/lib/products";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ishop.cheat.casa/api/v1" }),
  endpoints: (builder) => ({
    // gettAll product
    getAllProduct: builder.query({
      query: () => `/products`,
    }),
    // get product by uuid
    getProductByUuid: builder.query<ProductType, string>({
      query: (uuid: string) => ({
        url: `/products/${uuid}`,
      }),
    }),
    // craete product
    createProduct : builder.mutation<CreateProductType> ({
        query: (newProduct: CreateProductType) => ({
            url: `/products`,
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authentication' : `bearea: ${process.env}`
            },
            body: newProduct
        })
    })
  }),
});

export const { useGetAllProductQuery } = ecommerceApi;
