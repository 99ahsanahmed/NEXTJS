import Link from "next/link"
const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 flex items-center bg-gray/30 backdrop-blur-sm  p-3">
        <h1 className="text-orange-400 text-4xl uppercase font-mono" >Ahsan</h1>
        <ul className="flex gap-4 absolute right-0 text-gray-200 text-lg px-10">
            <Link href="/" ><li>Home</li> </Link>
            <li>About</li>
            <li>Connect</li>
        </ul>
     </div>
  )
}

export default Navbar