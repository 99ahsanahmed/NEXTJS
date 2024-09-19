import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar top-0 z-50 fixed flex items-center bg-gray/30 backdrop-blur-sm p-3 w-full ">
      <h1 className="text-orange-400 text-4xl uppercase font-mono">Ahsan <br/><span  className="text-3xl text-slate-50 font-extralight" >SIDDIQUI</span></h1>
      <ul className="flex gap-4 absolute right-0 text-gray-200 text-lg px-10">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="#About" >
        <li>About</li>
        </Link>
        <Link href="">
        <li>Connect</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
