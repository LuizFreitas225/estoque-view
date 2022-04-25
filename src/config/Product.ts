interface Product {
    id?: number,
    name: string | null,
    code: string | null,
    description: string | null,
    price?: number,
    productCategory?: string| null
  }
  
  export default Product;
  