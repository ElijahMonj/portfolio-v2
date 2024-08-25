
import Image, { StaticImageData } from "next/image";
import testimage from '/Downloads/7k.jpg'
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithubAlt } from "react-icons/fa6";
interface ProjectProps {
    title:string,
    description:string,
    technologies:string[],
    image:StaticImageData,
    github:string,
    link:string,
}
const Project:React.FC<ProjectProps> = ({title,description,technologies,image,github,link}) => {
    return ( 
        <div className="mb-3 lg:w-3/4 lg:flex-row md:w-full md:flex-row flex-col sm:w-128 xs:w-96 w-full bg-gray relative flex justify-between mx-auto p-5 rounded-lg ">
            <Image src={image} alt={'project image'}  style={{objectFit: "contain"}} className="rounded-lg md:h-48 md:w-auto w-full"/>
            <div className="p-3 w-full flex flex-col justify-between">
                <div className="text-2xl">{title}</div>
                <div className="">{description}</div>
                <div className="flex flex-wrap">
                    {technologies.map((tech) => (
                        <div className="bg-darkgray text-dark text-xs font-medium px-3.5 py-1.5 rounded-full m-1" 
                        key={technologies.indexOf(tech)}>{tech}</div>                
                    ))}
                </div>
            </div>  
            <div className="flex flex-col justify-center gap-5">
                <Link href={link} className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out">View <FaArrowUpRightFromSquare className="my-auto"/></Link>
                <Link href={github} className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out">Github <FaGithubAlt className="my-auto" size={18}/></Link>
            </div>      
        </div>
        
     );
}
 
export default Project;