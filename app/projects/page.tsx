
import React from 'react';

import teksto from '@/public/images/projects/teksto.png'
import delightNailSpa from '@/public/images/projects/delightNailSpa.png'
import Project from './Project';

import neopal from '@/public/images/projects/neopal.png'
import Capstone from './Capstone';
const Projects = () => {

    return ( 
        <main className="h-auto my-auto flex w-full justify-around flex-col items-center lg:flex-row md:flex-row">
        <div className='w-full'>
            <div className='text-3xl text-center font-bold animateUp'>Freelance Projects</div>
                <div className='flex flex-wrap flex-row gap-5'>
                    <Project
                        title="Delight Nail Spa"
                        description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        technologies={['React','NextJS', 'Firebase','TypeScript','PayMongo','TailwindCSS','DaisyUI']}
                        image={delightNailSpa}
                        
                        link='https://delightnailspa.com/'
                        label='Freelance IT Project'
                    />
                    
                    {/* <Project
                        title="Teksto"
                        description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        technologies={['React', 'Firebase','TypeScript','Bootstrap','World News API','NodeJS','Express']}
                        image={teksto}
                        
                        link='https://tekstolib.com/'
                        label='Freelance IT Project'
                    /> */}
                    
                </div>   
                <div className='text-3xl text-center my-5 font-bold animateUp'>Academic Projects</div>
                <Capstone/>
                <div className='text-3xl text-center my-5 font-bold animateUp'>Personal Projects</div>
                <Project
                    title="NeoPal"
                    description="An AI chat web app where you could talk with different AI characters and even create your own virtual pal!"
                    technologies={['React', 'NextJS','NextAuth','TypeScript','Qroq','Llama','TailwindCSS','Cloudinary','DaisyUI','Prisma','PostgreSQL']}
                    image={neopal}
                    github='/'
                    link='/'
                    label='Personal Hobby Project'
                />
                   
        </div>
        </main>
     );
}
 
export default Projects;