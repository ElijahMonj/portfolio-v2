import Image from "next/image";
import me from '@/public/images/me.jpg'
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithubAlt } from "react-icons/fa6";

const CardCapstone = () => {
    const technologies = ["React Native","Expo","Google Maps","Node.js", "Express", "MongoDB", "EJS","Bootstrap","Socket.io"];
    return ( 
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="rounded-t-lg overflow-hidden">
                <Image src={me} alt="project image" style={{ objectFit: "cover" }} className="rounded-t-lg" />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap p-4">
                {technologies.map((tech) => (
                    <div
                        className="bg-gray text-dark text-xs font-medium px-3.5 py-1.5 rounded-full m-1 select-none hover:bg-dark hover:text-gray transition duration-500 ease-out"
                        key={technologies.indexOf(tech)}
                    >
                        {tech}
                    </div>
                ))}
            </div>

            {/* Title and Description */}
            <div className="px-5">
                <h3 className="text-xl font-bold mb-2">TricyCall: Tricycle Hailing App</h3>
                <p className="text-gray-600 mb-4"> A tricycle hailing app for both drivers and passengers for Tower TODA.</p>
            </div>

            {/* Links */}
            <div className="flex justify-center pb-5 gap-4">
            <Link href={'https://tricycall.online/'} 
                target="_blank" rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark transition duration-500 ease-out flex justify-center items-center gap-2"
                aria-label="View Project"
                >View <FaArrowUpRightFromSquare className="my-auto"/>
            </Link>
            <Link href={'/projects/capstone'} 
                className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark transition duration-500 ease-out flex justify-center items-center gap-2"
                aria-label="View Case Study"
                >Case Study <FaArrowUpRightFromSquare className="my-auto"/></Link>
            </div>
        </div>
    );
}

export default CardCapstone;