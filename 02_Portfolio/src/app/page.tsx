import Image from "next/image";
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import Link from "next/link";
export default function Home() {
  return (
    // Main page div
    <div className="main bg-gradient-to-tr from-black to-slate-950 overflow-hidden">
      {/* HOME PAGE */}
      <div className="bg-gradient-to-tr from-black to-slate-950  h-screen w-screen">
        <Navbar />

        {/* HOME PAGE-LEFT */}
            {/* NAME */}
        <div className=" uppercase absolute left-4  text-gray-50  xs:text-6xl xs:max-w-fit xs:top-36 md:text-8xl">
          Ahsan ahmed
          <br />
          siddiqui
        </div>

           {/* PICTURE */}
        <div className="absolute top-32 bg-gray/30 backdrop-blur-sm  xs:right-0 ">
          <Image
            src="/pfp1.png"
            width={500}
            height={0}
            alt="Picture of the author"
            className="xs:w-40 md:w-96"
          />
        </div>
        <Links />

        {/* HOME PAGE-RIGHT */}
        <div id="Right" className="absolute bg-white rounded-md bg-opacity-10 xs:bottom-28 xs:mx-1 xs:p-0 as:bottom-60 md:bottom-24">

          {/* Heading */}
          <h1 className="text-black uppercase font-extrabold xs:text-3xl as:text-4xl">
            I am a, <span className="text-slate-200">computer Science</span>
            Student
          </h1>

          <h5 className="text-black font-semibold xs:text-xs as:text-base">
            In today's rapidly evolving digital world, technology shapes every
            aspect of our lives. My fascination with this transformation led me
            to web development. I specialize in building dynamic, user-centric
            web applications using the latest, cutting-edge technologies
          </h5>
          <Link href="#About">
            <button className="bg-black text-white rounded-lg p-2 xs:text-sm">
              see more
            </button>
          </Link>
        </div>
      </div>

      {/* ABOUT PAGE */}
      <div
        id="About"
        className="bg-black h-screen flex justify-center items-center relative"
      >
        {/* Images    */}
        <div className="gutech absolute top-0">
          <Image src="/gu.webp" width={200} height={0} alt="Picture" />
        </div>

        <div className="hikmah absolute left-0">
          <Image src="/hikmah.png" width={200} height={0} alt="Picture" />
        </div>

        <div className="hikmah absolute left-0">
          <Image src="/hikmah.png" width={200} height={0} alt="Picture" />
        </div>

        {/* About heading */}
        <h1 className="text-white xs:text-4xl uppercase z-10">about ahsan</h1>
      </div>
    </div>
  );
}
