
import Image from "next/image";
import image from '@/public/images/projects/capstone/2.jpg';
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Capstone = () => {
    const technologies = ["React Native","Expo","Google Maps","Node.js", "Express", "MongoDB", "EJS","Bootstrap","Socket.io","Semaphore"];
    return (
        <div className="w-full animateUp lg:flex-row md:w-full md:flex-row flex-col sm:w-128 xs:w-96 relative flex justify-between mx-auto p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            
            <Image src={image} alt={'project image'} style={{ objectFit: "contain" }} className="rounded-lg md:h-48 md:w-auto w-full" />

            {/* Project Details */}
            <div className="p-3 w-full flex flex-col justify-between">
                {/* Project Title */}
                <span className="text-xs font-semibold text-dark uppercase tracking-wide">IT Capstone Project</span>
                <div className="text-2xl font-bold">TricyCall</div>
                
                {/* Project Description */}
                <div className="text-gray-700">A cloud-based multi-platform tricycle
                    hailing system with notifications, emergency
                    assistance, and GPS tracking for tower toda.
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap mt-2">
                    {technologies.map((tech) => (
                        <div
                            className="bg-gray text-dark text-xs font-medium px-3.5 py-1.5 rounded-full m-1 select-none hover:bg-dark hover:text-gray transition duration-500 ease-out"
                            key={technologies.indexOf(tech)}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-center gap-5 flex-shrink-0">
                <Link
                    href={'/projects/capstone'}
                    className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
                >
                    Case Study <FaArrowUpRightFromSquare className="my-auto" size={18} />
                </Link>
            </div>
        </div>
    );
};

export default Capstone;
