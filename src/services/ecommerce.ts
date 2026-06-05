import { ProductType } from '@lib/products';

import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

export const ecommerceApi = createApi ({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery ({baseUrl: process.env.NEXT_PUBLIC_ISHOP_BASE_URL

    }),
    endpoints: (builder) => ({
        // gettAll product
        getAllProduct: builder.query<{ProductType}>(() => {
            query: () => `/products`
        })
    })

})
  
