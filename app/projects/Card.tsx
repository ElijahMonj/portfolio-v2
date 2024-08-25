
import Image from "next/image";
import testimage from '/Downloads/7k.jpg'
import Link from "next/link";
import { FaArrowUpRightFromSquare,FaGithubAlt  } from "react-icons/fa6";
const Card = () => {
    return ( 
        <div className="w-96 bg-slate-300 rounded-lg">
            <div className="">
            <Image src={testimage} alt={'project image'}  style={{objectFit: "contain"}} className="rounded-t-lg"/>
            </div>
            
            <div className="flex p-3 flex-wrap">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full m-1">NextJS</div>               
            </div>
            <div className="mx-5 text-2xl font-bold">The best Project Ever Lived</div>
            <div className="mx-5 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="flex justify-center pb-5 gap-5">
                <Link href={'/'} className="px-3 py-2 rounded-lg bg-slate-800 flex justify-center items-center gap-2">View <FaArrowUpRightFromSquare className="my-auto"/></Link>
                <Link href={'/'} className="px-3 py-2 rounded-lg bg-slate-800 flex justify-center items-center gap-2">Github <FaGithubAlt className="my-auto" size={18}/></Link>
            </div>
        </div>
     );
}
 
export default Card;