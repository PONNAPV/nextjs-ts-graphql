import { gql } from "graphql-request"

export const ALL_PRODUCTS = gql`
{
  products{
    productId
    productName
  }
}`
export const ALL_CATEGORIES = gql`
{
    categories{
      categoryId
      categoryName
      products{
        productId
        productName
      }
    }
  }`