import Image from "next/image";
import Link from "next/link";
import { FaHtml5,FaCss3Alt,FaNodeJs,FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill,RiTailwindCssFill,RiReactjsFill,RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
const Project = () => {
  return (
    //MAIN PAGE
    <div
      id="project"
      className="h-screen flex flex-wrap flex-col items-center justify-center relative "
    >
      {/* PROJECTS HEADING */}
      <div className="Heading flex flex-col items-center xs:text-3xl md:text-6xl lg:text-5xl xl:text-9xl">
        <h1 className="text-white uppercase mb-3 ">projects</h1>
        <div className="border-b border-slate-500/30 w-40"></div>
      </div>

      {/* IMAGE */}
      <section className="flex flex-col justify-center items-center mt-5 ">
        <Link
          href="https://complete-web-dev-by-hitesh.vercel.app/"
          target="blank"
          className="flex flex-col justify-center"
        >
          <Image
            src="/todo.png"
            width={200}
            height={0}
            alt="Picture"
            className="xs:w-36 md:w-52 lg:w-40 "
          />
        </Link>
        <h1>Todo-app ⬆️</h1>
      </section>

      {/* ABOUT FOOTER */}
      <footer className="flex absolute bottom-0 my-4 text-white/20 xs:text-3xl xs:gap-2 md:text-4xl tt:text-5xl tt:gap-10">
      <h4 className="uppercase  text-white " >skills</h4>
        <FaHtml5 className="hover:text-white" />
        <FaCss3Alt className="hover:text-white" />
        <RiJavascriptFill className="hover:text-white" />
        <BiLogoTypescript className="hover:text-white" />
        <RiTailwindCssFill className="hover:text-white" />
        <RiReactjsFill className="hover:text-white" />
        <RiNextjsFill className="hover:text-white" />
        <FaNodeJs className="hover:text-white" />
        <DiMongodb className="hover:text-white" />
        <FaGitAlt className="hover:text-white" />
      </footer>
    </div>
  );
};

export default Project;
