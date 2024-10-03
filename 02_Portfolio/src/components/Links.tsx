import Link from "next/link"
import { FaFacebook,FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
const Links = () => {
  return (
    <div id="links" className="absolute bottom-0 right-10 xs:right-0" >

        <ul className="xs:flex xs:gap-6 xs:m-3  as:gap-4 md:gap-5  lg:mr-10 text-white/20 text-3xl lg:text-3xl " >
           <Link href="https://github.com/99ahsanahmed" target="_blank"><li><FaGithub/></li></Link> 
            <Link href="https://www.linkedin.com/in/ahsan-ahmed-99344325a/" target="_blank" > <li><FaLinkedin /></li></Link>
            <Link href="https://www.instagram.com/__ahsanahmed/" target="_blank"> <li><FaInstagram /></li></Link>
            <Link href="https://www.facebook.com/profile.php?id=100007275645767&mibextid=ZbWKwL" target="_blank"><li><FaFacebook /></li></Link>
        </ul>
    </div>
  )
}

export default Links