
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithubAlt } from "react-icons/fa6";
interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    image: StaticImageData;
    github?: string;
    link: string;
    label: string; // Added for project category
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, image, github, link, label }) => {
    return (
        <div className="w-full lg:flex-row md:w-full md:flex-row flex-col sm:w-128 xs:w-96 relative flex justify-between mx-auto p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Project Image */}
            <Image src={image} alt={'project image'} style={{ objectFit: "contain" }} className="rounded-lg md:h-48 md:w-auto w-full" />

            {/* Project Details */}
            <div className="p-3 w-full flex flex-col justify-between">
                {/* Project Label */}
                <span className="text-xs font-semibold text-dark uppercase tracking-wide">{label}</span>

                {/* Project Title */}
                <div className="text-2xl font-bold">{title}</div>

                {/* Project Description */}
                <div className="text-gray-700">{description}</div>

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
            <div className="flex flex-col justify-center gap-5">
                <Link
                    href={link}
                    className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
                >
                    View <FaArrowUpRightFromSquare className="my-auto" />
                </Link>
                {github && <Link
                    href={github}
                    className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
                >
                    GitHub <FaGithubAlt className="my-auto" size={18} />
                </Link>}
            </div>
        </div>
    );
};

export default Project;
