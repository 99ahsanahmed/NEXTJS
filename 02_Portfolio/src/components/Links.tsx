import Link from "next/link"
import { FaFacebook,FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
const Links = () => {
  return (
    <div className="Links  absolute bottom-0 right-10" >
        <ul>
           <Link href="https://github.com/99ahsanahmed" target="_blank"><li><FaGithub className=" mb-3 text-slate-400 text-3xl" /></li></Link> 
            <Link href="https://www.linkedin.com/in/ahsan-ahmed-99344325a/" target="_blank" > <li><FaLinkedin className=" mb-3 text-slate-400    text-3xl" /></li></Link>
            <Link href="https://www.instagram.com/__ahsanahmed/" target="_blank"> <li><FaInstagram className="mb-5 text-slate-400   text-3xl"/></li></Link>
            <Link href="https://www.facebook.com/profile.php?id=100007275645767&mibextid=ZbWKwL" target="_blank"><li><FaFacebook className="mb-5 text-slate-400    text-3xl" /></li></Link>
        </ul>
    </div>
  )
}

export default Links