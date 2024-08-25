
import React, { useState } from 'react';
import testimage from '/Downloads/7k.jpg'
import teksto from '@/public/images/projects/teksto.png'
import Project from './Project';


const Projects = () => {

    return ( 
        <main className="h-auto my-auto flex w-full justify-around flex-col items-center lg:flex-row md:flex-row">
        <div className='w-full'>
            <div className='text-4xl text-center'>Projects</div>
                <div className='flex flex-wrap flex-row'>
                    <Project
                    title="IntelliPal"
                    description="A crossplatform AI chat application where you could talk with different AI characters and even create your own virtual pal!"
                    technologies={['React Native', 'Firebase','TypeScript','OpenAI','Expo','NodeJS','Express']}
                    image={testimage}
                    github='/'
                    link='/'
                    />
                    <Project
                    title="SwiftSnap"
                    description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    technologies={['React', 'Next.JS','TypeScript','NextAuth','MongoDB','TailwindCSS','Cloudinary','DaisyUI','Prisma']}
                    image={testimage}
                    github='/'
                    link='/'
                    />
                    <Project
                    title="Teksto"
                    description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    technologies={['React', 'Firebase','TypeScript','React Bootstrap']}
                    image={teksto}
                    github='/'
                    link='/'
                    />
                    <Project
                    title="Floralify"
                    description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    technologies={['React Native', 'Firebase','TypeScript','PayMongo','Expo','NodeJS','Express']}
                    image={testimage}
                    github='/'
                    link='/'
                    />
                </div>   
                {/* 
                
                <div className=''>Old Projects</div>
                <div className='flex justify-between flex-wrap gap-12'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                
                */}
                
     
        </div>
        </main>
     );
}
 
export default Projects;