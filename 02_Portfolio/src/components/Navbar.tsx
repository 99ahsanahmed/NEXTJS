import Link from "next/link"
const Navbar = () => {
  return (
    <div className="navbar sticky top-0 flex items-center bg-white/30 backdrop-blur-sm  text-black font-bold text-lg uppercase">
        <h1 className="text-3xl font-serif" >Logo</h1>
        <ul className="flex gap-4 absolute right-0 px-8 " >
            <Link href="/" ><li>Home</li> </Link>
            <li>About</li>
            <li>Connect</li>
        </ul>
     </div>
  )
}

export default Navbar