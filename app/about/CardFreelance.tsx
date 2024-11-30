import Image from "next/image";
import freelance from '@/public/images/projects/delightNailSpa.png'
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithubAlt } from "react-icons/fa6";

const CardFreelance = () => {
    const technologies=['React','NextJS', 'Firebase','TypeScript','PayMongo','TailwindCSS','DaisyUI','Vercel']
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image Section */}
            <div className="relative rounded-t-lg overflow-hidden">
                <Image src={freelance} alt="project image" style={{ objectFit: "cover" }} className="rounded-t-lg" />
                <span className="absolute select-none top-3 left-3 bg-dark text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Freelance Project
                </span>
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
                <h3 className="text-xl font-bold mb-2">Delight Nail Spa: Online Appointment Booking System</h3>
                <p className="text-gray-600 mb-4">A website for Delight Nail Spa that allows them to maange services online, customers to book appointments, and pay online.</p>
            </div>

            {/* Links */}
            <div className="flex justify-center pb-5 gap-4">
            <Link href={'https://delightnailspa.com/'} 
                target="_blank" rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark transition duration-500 ease-out flex justify-center items-center gap-2"
                aria-label="View Project"
                >View <FaArrowUpRightFromSquare className="my-auto"/>
            </Link>
           
            </div>
        </div>
    );
}

export default CardFreelance