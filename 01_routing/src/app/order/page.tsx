"use client"
import { useRouter } from "next/navigation"
const order = () => {
    const router = useRouter();
    const routeBack = ()=>{
        console.log("order-placed")
        router.push("/")
    }
  return (
    <>
    <h1>Place your order</h1>
    <button onClick={routeBack} >Order Now</button>
    </>
  )
}

export default order