import Image from "next/image";
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import Link from "next/link";
export default function Home() {
  return (
    // Main page div
    <div className="main bg-gradient-to-tr from-black to-slate-950">

    
    {/* HOME PAGE */}
    <div className="bg-gradient-to-tr from-black to-slate-950   h-screen ">
    <Navbar/>

    {/* HOME PAGE-LEFT */}
    <div className=" uppercase absolute left-7 top-60  text-gray-50  lg:text-9xl lg:w-48">Ahsan ahmed<br/>siddiqui</div>

    <div className="lg:right-0 absolute top-32 bg-gray/30 backdrop-blur-smw-fit " >
    <Image
      src="/pfp1.png"
      width={500}
      height={0}
      alt="Picture of the author"
    />
    </div>
    <Links/>

    {/* HOME PAGE-RIGHT */}
    <div className="right absolute bg-white rounded-md bg-opacity-10 lg:bottom-56 p-10" >

      <h1 className="text-black uppercase font-extrabold  lg:text-9xl ">I am a,  <span className="text-slate-200">computer Science</span> Student</h1>

      <h5 className="text-black font-semibold lg:text-3xl" >In today's rapidly evolving digital world, technology shapes every aspect of our lives. My fascination with this transformation led me to web development. I specialize in building dynamic, user-centric web applications using the latest, cutting-edge technologies</h5>
      <Link href="#About"><button className="bg-black text-white rounded-lg p-2 lg:text-2xl">see more</button></Link> 
    </div>
    </div>

    {/* ABOUT PAGE */}
    <div id="About" className="bg-black h-screen flex justify-center items-center relative">
      
      <div className="gutech absolute top-0">
      <Image
      src="/gu.webp"
      width={200}
      height={0}
      alt="Picture"
    /></div>

      <div className="hikmah absolute left-0">
      <Image
      src="/hikmah.png"
      width={200}
      height={0}
      alt="Picture"
    /></div>

<div className="hikmah absolute left-0">
      <Image
      src="/hikmah.png"
      width={200}
      height={0}
      alt="Picture"
    /></div>

      <h1 className="text-white text-9xl uppercase z-10">about ahsan</h1>
    </div>


    </div>
  );
}
