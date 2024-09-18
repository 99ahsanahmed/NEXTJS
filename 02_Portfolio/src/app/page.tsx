import Image from "next/image";
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
export default function Home() {
  return (
    // Main page div
    <div className="main bg-gradient-to-tr from-black to-slate-950">
    <Navbar/>

    {/* HOME PAGE */}
    <div className="bg-gradient-to-tr from-black to-slate-950 h-screen" >

    {/* HOME PAGE-LEFT */}
    <div className=" uppercase absolute left-3 top-56  text-gray-50 text-9xl">Ahsan ahmed <br/><span className="absolute left-4" >siddiqui</span></div>

    <div className="absolute left-1/4 top-56 bg-gray/30 backdrop-blur-sm  " >
    <Image
      src="/pfp1.png"
      width={550}
      height={0}
      alt="Picture of the author"
    />
    </div>

    {/* HOME PAGE-RIGHT */}
    <div className="right absolute right-10 top-56  " >
      <h1 className="text-6xl uppercase font-extrabold">I am a, <br/> <span className="text-slate-900">computer <br /> Science</span> Student</h1>
    </div>
    <Links/>
    </div>
    
    <hr />

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
