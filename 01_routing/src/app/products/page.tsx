import Link from "next/link"
export default function products() {
    return (
      <>
      <h1>Products</h1>
      <ul>
        <li><Link href="products/1" >Product_1</Link></li>
        <li><Link href="products/2" >Product_2</Link></li>
        <li><Link href="products/3" replace>Product_3</Link></li>
      </ul>
      </>
    );
  }
  