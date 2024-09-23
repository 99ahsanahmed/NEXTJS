import Image from "next/image";
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import About from "@/components/About"
import Connect from "@/components/Connect"
import Link from "next/link";

export default function Home() {
  return (
    // Main page div
    <div className="main bg-gradient-to-tr from-black to-slate-950 overflow-hidden">
      {/* HOME PAGE */}
      <div id="home" className="bg-gradient-to-tr from-black to-slate-950  h-screen w-screen">
        <Navbar />

{/* HOME PAGE-LEFT */}
          {/* NAME */}
        <div className=" uppercase absolute left-4  text-gray-50  xs:text-6xl xs:max-w-fit xs:top-36 md:text-8xl lg:text-8xl lg:top-52 lg:left-0 lg:w-72 tt:top-80 tt:text-9xl xl:top-80">
          Ahsan ahmed
          <br />
          siddiqui
        </div>

           {/* PICTURE */}
        <div className="absolute top-32 bg-gray/30 backdrop-blur-sm xs:right-0 lg:top-48 lg:right-0 tt:left-96 tt:top-64">
          <Image
            src="/pfp1.png"
            width={500}
            height={0}
            alt="Picture of the author"
            className="xs:w-40 md:w-96 lg:w-72 tt:w-2/6 xl:w-2/6"
          />
        </div>
        <Links />

{/* HOME PAGE-RIGHT */}
        <div id="Right" className="absolute bg-white/5 rounded-md bg-opacity-10 xs:bottom-28 xs:mx-1 xs:p-0 as:bottom-44 md:bottom-24 lg:right-0 lg:p-5 tt:right-0 tt:bottom-72 tt:w-2/4">

          {/* Heading */}
          <h1 className="text-slate-300 uppercase font-extrabold xs:text-3xl as:text-4xl lg:text-4xl tt:text-7xl">
            I am a, <span className="bg-black font-light mr-2">computer Science</span> 
            Student
          </h1>

          {/* DETAILS */}
          <h5 className="text-white/55 font-semibold xs:text-xs as:text-sm lg:text-2xl xl:text-3xl xl:py-2">
            In today's rapidly evolving digital world, technology shapes every
            aspect of our lives. My fascination with this transformation led me
            to web development. I specialize in building dynamic, user-centric
            web applications using the latest, cutting-edge technologies
          </h5>

          {/* BUTTON */}
          <Link href="#About">
            <button className="bg-black text-slate-300 rounded-xl my-3 p-3 xs:text-sm lg:text-xl xl:text-4xl">
              see more
            </button>
          </Link>
        </div>

      </div>

      <About/>
      <Connect/>      
    </div>
  );
}
