
export type ProductType = {
    uuid: string,
    thumbnail: string,
    name: string,
    priceOut: number,
    description : string
}

export type CreateProductType = {
    totalPages: 0,
  totalElements: 0,
  "pageable": {
    "pageNumber": 0,
    "paged": true,
    "pageSize": 0,
    "unpaged": true,
    "offset": 0,
    "sort": [
      {
        "direction": "string",
        "nullHandling": "string",
        "ascending": true,
        "property": "string",
        "ignoreCase": true
      }
    ]
  },
  "first": true,
  "last": true,
  "numberOfElements": 0,
  "size": 0,
  "content": [
    {
      "uuid": "string",
      "name": "string",
      "description": "string",
      "computerSpec": {
        "processor": "string",
        "ram": "string",
        "storage": "string",
        "gpu": "string",
        "os": "string",
        "screenSize": "string",
        "battery": "string"
      },
      "stockQuantity": 0,
      "priceOut": 0,
      "discount": 0,
      "color": [
        {
          "color": "string",
          "images": [
            "string"
          ]
        }
      ],
      "thumbnail": "string",
      "images": [
        "string"
      ],
      "filteredImage": "string",
      "warranty": "string",
      "availability": true,
      "category": {
        "uuid": "string",
        "name": "string",
        "description": "string",
        "media": "string"
      },
      "supplier": {
        "name": "string",
        "uuid": "string",
        "email": "string",
        "phone": "string",
        "address": {
          "uuid": "string",
          "addressLine1": "string",
          "addressLine2": "string",
          "road": "string",
          "linkAddress": "string"
        }
      },
      "brand": {
        "name": "string",
        "uuid": "string",
        "description": "string",
        "brandLogo": "string"
      }
    }
  ],
  "number": 0,
  "sort": [
    {
      "direction": "string",
      "nullHandling": "string",
      "ascending": true,
      "property": "string",
      "ignoreCase": true
    }
  ],
  "empty": true
}