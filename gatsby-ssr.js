import React from "react"

import { ProductProvider } from "./src/context/ProductContext"

export const wrapRootElement = ({ element }) => (
  <ProductProvider>{element}</ProductProvider>
)
