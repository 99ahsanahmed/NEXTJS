import Link from "next/link";
import { PiLinktreeLogoThin } from "react-icons/pi";

const Connect = () => {
  return (
    // CONNECT
    <div id="connect" className="flex justify-center items-center h-96 w-full xs:text-3xl sm:text-5xl tt:text-7xl text-white/65">
      <PiLinktreeLogoThin/>
        <Link href="https://linktr.ee/code_with_ahsan"><h1>Connect with me</h1></Link>
    </div>
  )
}

export default Connect
