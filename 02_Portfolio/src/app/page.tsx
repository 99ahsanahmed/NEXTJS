import Image from "next/image";
import Navbar from "@/components/Navbar"
export default function Home() {
  return (
    <div className="main bg-gradient-to-tr from-black to-slate-950" >
    <Navbar/>

    <div className=" uppercase absolute left-3 top-32  text-gray-50 text-9xl">Ahsan ahmed <br/><span>siddiqui</span></div>

    <div className="absolute left-96 top-56 bg-gray/30 backdrop-blur-sm  " >
    <Image
      src="/pfp1.png"
      width={500}
      height={0}
      alt="Picture of the author"
    />
    </div>
    </div>
  );
}
