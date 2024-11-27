import Link from "next/link";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
const Footer = () => {
    return ( 
        <footer className="h-auto py-12 px-5">
            <div className="h-auto flex justify-between lg:flex-row md:flex-row flex-col">
                <div className="flex flex-col gap-2">
                <div className="text-4xl lg:text-left md:text-left text-center">Get in Touch</div>
                <div className="lg:text-left md:text-left text-center">Connect with me in the following platforms</div>
                <div className="flex gap-3 lg:justify-start md:justify-start justify-center">
                    <Link href={''}><FaSquareFacebook size={32} className="hover:fill-darkgray transition duration-500 ease-out" /></Link>
                    <Link href={''}><FaSquareGithub size={32} className="hover:fill-darkgray transition duration-500 ease-out" /></Link>
                    <Link href={''}><FaLinkedin size={32} className="hover:fill-darkgray transition duration-500 ease-out" /></Link>
                </div>
                </div>
                <div className="gap-4 bg-white justify-center items-center flex flex-col">
                <Link
                    href="/cv.pdf" // Replace with the actual path to your PDF file
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 mt-5 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
                >
                    Download CV <MdDownload className="my-auto" size={18} />
                </Link>
                </div>
            </div>
        </footer>

     );
}
 
export default Footer;