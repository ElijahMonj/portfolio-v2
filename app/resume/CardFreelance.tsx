import Image from "next/image";
import me from '@/public/images/me.jpg'
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithubAlt } from "react-icons/fa6";

const CardFreelance = () => {
    return ( 
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="rounded-t-lg overflow-hidden">
                <Image src={me} alt="project image" style={{ objectFit: "cover" }} className="rounded-t-lg" />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap p-4 gap-2">
                <span className="bg-gray text-dark text-xs font-medium px-3.5 py-1.5 rounded-full m-1 select-none hover:bg-dark hover:text-gray transition duration-500 ease-out">NextJS</span>
                {/* Add other tags here */}
            </div>

            {/* Title and Description */}
            <div className="px-5">
                <h3 className="text-xl font-bold mb-2">The Best Project Ever Lived</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* Links */}
            <div className="flex justify-center pb-5 gap-4">
            <Link href={'/'} 
                className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark transition duration-500 ease-out flex justify-center items-center gap-2"
                aria-label="View Project"
                >View <FaArrowUpRightFromSquare className="my-auto"/>
            </Link>
            <Link href={'/'} 
                className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark transition duration-500 ease-out flex justify-center items-center gap-2"
                aria-label="View Github"
                >Github <FaGithubAlt className="my-auto" size={18}/></Link>
            </div>
        </div>
    );
}

export default CardFreelance