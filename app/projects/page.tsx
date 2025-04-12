
import React from 'react';

import teksto from '@/public/images/projects/teksto.png'
import delightNailSpa from '@/public/images/projects/delightNailSpa.png'
import Project from './Project';

import neopal from '@/public/images/projects/neopal.png'
import Capstone from './Capstone';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | Elijah Monjardin | React Developer & IT Student",
    description: "Explore Elijah Monjardin's portfolio showcasing projects, skills, and achievements in web development, React, and IT. Contact for collaborations and opportunities.",
    openGraph: {
        title: "Projects | Elijah Monjardin | React Developer & IT Student",
        description: "View Elijah Monjardin's portfolio to discover innovative web projects and his recent academic and freelance projects.",
        locale: "en_US",
        url: "https://elijahmonjardin.tech/projects",
        siteName: "Elijah Monjardin",
    },
};

const Projects = () => {

    return ( 
        <main className="h-auto my-auto flex w-full justify-around flex-col items-center lg:flex-row md:flex-row">
        <div className='w-full px-5'>
            <div className='text-xl text-center font-bold my-5 animateUp'>Freelance Projects</div>
            <div className='flex flex-wrap flex-row gap-5 '>
                <Project
                    // title="Delight Nail Spa"
                    // description="A website for Delight Nail Spa that allows them to maange services online, customers to book appointments, and pay online."
                    title="Online Booking System for a Spa"
                    description="A website for a local Spa that allows them to manage services online, customers to book appointments, and pay online."
                    technologies={['React','NextJS', 'Firebase','TypeScript','PayMongo','TailwindCSS','DaisyUI']}
                    image={delightNailSpa}
                    
                    link='https://delightnailspa.com/'
                    label='Freelance IT Project'
                />
                
                
            </div>   
            <div className='text-xl my-5 text-center font-bold animateUp'>Academic Projects</div>
            <Capstone/>
            <div className='text-xl my-5 text-center font-bold animateUp'>Personal Projects</div>
            <Project
                title="NeoPal"
                description="An AI chat web app where you could talk with different AI characters and even create your own virtual pal!"
                technologies={['React', 'NextJS','NextAuth','TypeScript','Qroq','Llama','TailwindCSS','Cloudinary','DaisyUI','Prisma','PostgreSQL']}
                image={neopal}
                github='https://github.com/ElijahMonj/ai-chat-app-web'
                link='https://neopal.vercel.app/'
                label='Personal Hobby Project'
            />
        </div>
        </main>
    );
}
export default Projects;