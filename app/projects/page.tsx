
import React, { useState } from 'react';
import testimage from '/Downloads/7k.jpg'
import teksto from '@/public/images/projects/teksto.png'
import delightNailSpa from '@/public/images/projects/delightNailSpa.png'
import Project from './Project';
import Card from '../resume/Card';
import neopal from '@/public/images/projects/neopal.png'
import Capstone from './Capstone';
const Projects = () => {

    return ( 
        <main className="h-auto my-auto flex w-full justify-around flex-col items-center lg:flex-row md:flex-row">
        <div className='w-full'>
            <div className='text-4xl text-center'>Projects</div>
                <div className='flex flex-wrap flex-row gap-5'>
                    <Project
                        title="Delight Nail Spa"
                        description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        technologies={['React','NextJS', 'Firebase','TypeScript','PayMongo','TailwindCSS','DaisyUI']}
                        image={delightNailSpa}
                        github='/'
                        link='/'
                        label='Freelance IT Project'
                    />
                    <Project
                        title="NeoPal"
                        description="An AI chat web app where you could talk with different AI characters and even create your own virtual pal!"
                        technologies={['React', 'NextJS','NextAuth','TypeScript','Qroq','Llama','TailwindCSS','Cloudinary','DaisyUI','Prisma','PostgreSQL']}
                        image={neopal}
                        github='/'
                        link='/'
                        label='Personal Hobby Project'
                    />
                   
                    <Project
                        title="Teksto"
                        description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        technologies={['React', 'Firebase','TypeScript','Bootstrap','World News API']}
                        image={teksto}
                        github='/'
                        link='/'
                        label='Freelance IT Project'
                    />
                    
                </div>   
                <div className='text-4xl text-center my-5'>Other Projects</div>
                <Capstone/>
        </div>
        </main>
     );
}
 
export default Projects;