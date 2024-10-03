import Image from "next/image";
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import About from "@/components/About"
import Connect from "@/components/Connect"
import Projects from "@/components/Project";
import Link from "next/link";
import Project from "@/components/Project";

export default function Home() {
  return (
    // Main page div
    <div className="main bg-gradient-to-tr from-black to-slate-950 overflow-hidden">
      {/* HOME PAGE */}
      <div id="home" className="flex flex-col justify-center items-center  bg-gradient-to-tr from-black to-slate-950 h-screen w-screen xs:gap-10 lg:gap-16 ">
        <Navbar />

{/* HOME PAGE-LEFT */}
          <div className="LeftSide flex  items-center">
          {/* NAME */}
        <div className="uppercase text-white text-justify as:font-extrabold xs:text-lg md:text-4xl lg:text-5xl tt:9xl">
          Ahsan ahmed siddiqui.
        </div>

           {/* PICTURE */}
        <div className="">
          <Image
            src="/pfp1.png"
            width={450}
            height={0}
            alt="Picture of the author"
            className="xs:w-28 md:w-40 lg:w-28"
          />
        </div>
        <Links />
        </div>

{/* HOME PAGE-DOWN */}
        <div id="Down" className="flex flex-col bg-white/5 rounded-md bg-opacity-10 p-4 lg:ml-5 lg:mr-10">

          {/* Heading */}
          <h1 className="text-slate-300 uppercase font-extrabold md:text-4xl lg:text-5xl tt:text-6xl">
            I am a&#44; <span className="bg-black font-light mr-2">computer Science</span> 
            Student
          </h1>

          {/* DETAILS */}
          <p className="text-white/55  font-semibold text-justify xs:text-sm xs:font-thin md:font-bold md:text-sm lg:py-2 lg:px-16 lg:text-lg tt:text-2xl">
            In today&#39;s rapidly evolving digital world&#44; technology shapes every
            aspect of our lives. My fascination with this transformation led me
            to web development. I specialize in building dynamic&#44; user centric
            web applications using the latest&#44; cutting edge technologies
          </p>

          {/* BUTTON */}
          <Link href="#About">
            <button className="bg-black text-slate-300 rounded-xl my-3 p-3 xs:text-sm lg:text-xl xl:text-4xl">
              see more
            </button>
          </Link>
        </div>

      </div>

      <About/>
      <Project/>
      <Connect/>      
    </div>
  );
}
