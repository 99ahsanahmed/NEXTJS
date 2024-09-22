import Image from "next/image";
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
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
        <div className=" uppercase absolute left-4  text-gray-50  xs:text-6xl xs:max-w-fit xs:top-36 md:text-8xl lg:text-8xl lg:top-60 lg:left-0 xl:text-9xl xl:top-60">
          Ahsan ahmed
          <br />
          siddiqui
        </div>

           {/* PICTURE */}
        <div className="absolute top-32 bg-gray/30 backdrop-blur-sm xs:right-0 lg:top-56 lg:left-96">
          <Image
            src="/pfp1.png"
            width={500}
            height={0}
            alt="Picture of the author"
            className="xs:w-40 md:w-96 lg:w-72 xl:w-2/6"
          />
        </div>
        <Links />

{/* HOME PAGE-RIGHT */}
        <div id="Right" className="absolute bg-white rounded-md bg-opacity-10 xs:bottom-28 xs:mx-1 xs:p-0 as:bottom-44 md:bottom-24 lg:right-0 lg:bottom-96 lg:w-1/2 lg:mr-5 lg:p-5">

          {/* Heading */}
          <h1 className="text-black uppercase font-extrabold xs:text-3xl as:text-4xl lg:text-6xl xl:text-7xl">
            I am a, <span className="text-slate-200">computer Science</span>
            Student
          </h1>

          {/* DETAILS */}
          <h5 className="text-black font-semibold xs:text-xs as:text-sm lg:text-2xl xl:text-3xl xl:py-2">
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

      {/* ABOUT PAGE */}
      <div
        id="About"
        className="bg-black h-screen flex flex-wrap flex-col items-center"
      >

        <div className="Heading mt-24 border-b border-slate-500/30">

        {/* About heading */}
        <h1 className="text-white xs:text-3xl uppercase ">about me</h1>
        </div>
        
        <div className="About ">
          <h3 className="text-white mx-6 my-4" >I am pursuing a Bachelor's in Computer Science at GUtech, enhancing my skills as a developer. Simultaneously, I am studying Dars-e-Nizami at Hikmah Institute, gaining timeless wisdom to address contemporary challenges. I am currently focused on building expertise in HTML, CSS, TypeScript, Tailwind, ReactJS, Next.js, Node.js, and MongoDB.</h3>
        </div>
        {/* Images    */}
        <div className="Pictures xs:flex-col flex flex-wrap items-center gap-5 mt-7 mx-4">

        <div className="gutech">
          <Image src="/gu.webp" width={200} height={0} alt="Picture" className="xs:w-32"/>
        </div>

        <div className="hikmah">
          <Image src="/hikmah.png" width={200} height={0} alt="Picture" className="xs:w-24"/>
        </div>
        </div>
        
      </div>
    </div>
  );
}
