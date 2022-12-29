import productStyles from '../styles/Product.module.css'

const ProductList = ({ allProducts }: any) => {
  return (
    <div className={productStyles.grid}>
        {allProducts.products.map((product: any) =>(
            <a key={product.productName} href="/Product" className={productStyles.card}>
              <h2>{product.productName} &rarr;</h2>
            </a>
          )
        )}
    </div>
  )
}
export default ProductList
