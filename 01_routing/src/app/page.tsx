import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h1 className="my-4" > Hello </h1>
      <div className="flex gap-3 justify-center" >
        <h1 className="font-bold " >Navigation was <br/> never easier</h1>
      <Link className=" shadow-lg rounded-lg p-2 bg-black text-white" href="/about" > About </Link>
      <Link className=" shadow-lg rounded-lg p-2 bg-black text-white" href="/products" > Products </Link>
      </div>
      
    </div>
  );
}
