import React from 'react';
import { FaReact, FaNodeJs, } from 'react-icons/fa';
import { FaBriefcase, FaCertificate, FaGraduationCap, FaLaptopCode, FaUsers, FaLightbulb, FaComments, FaBootstrap, FaGithub, FaJava, FaMicrosoft, FaArrowUpRightFromSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import CardCapstone from './CardCapstone';
import Link from 'next/link';
import { SiCsharp, SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiPrisma, SiTailwindcss, SiVercel, SiVisualstudiocode } from 'react-icons/si';
import { BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import Me from '@/public/images/me.jpg'
import Image from 'next/image';
import { MdDownload } from 'react-icons/md';
import CardFreelance from './CardFreelance';
const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-dark">
      {/* Header Section */}
      <header className="mb-10 flex flex-col items-center lg:flex-row lg:items-start lg:gap-8">
        {/* Left Column - Image */}
        <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden">
          <Image 
            src={Me}
            alt="John Doe" 
            className="w-full h-full object-cover" 

          />
        </div>

        {/* Right Column - Content */}
        <div className="mt-6 text-center lg:text-left lg:mt-0 flex-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold">Elijah Monjardin</h1>
          <p className="text-2xl text-dark mt-2">React Developer</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            {/* Social Links with Button Style */}
            <Link 
              href="https://github.com/ElijahMonj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
            >
               <FaGithub className="my-auto" />GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/elijah-monjardin-1697a1168/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
            >
               <FaLinkedin className="my-auto" />LinkedIn
            </Link>
            <Link 
              href="mailto:john.doe@example.com" 
              className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
            >
               <FaEnvelope className="my-auto" />Email
            </Link>
          </div>
          <p className="mt-4 text-lg text-dark leading-relaxed">
            A passionate IT graduate with skills in react development, seeking to leverage my skills in a professional environment.
          </p>
          
        </div>
      </header>



      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <FaGraduationCap className="text-blue-500" /> Education
        </h2>
        <div>
          <h3 className="text-lg font-medium">Bachelor’s in Information Technology</h3>
          <p className="text-sm text-dark">
            STI College San Jose Del Monte - Graduated May 2025
          </p>
          <p className="text-dark mt-4">
            <strong>Relevant Coursework:</strong>
          </p>
          <ul className="list-disc list-inside text-dark mt-2 space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Web Systems and Technologies</li>
            <li>Advanced Database Systems (SQL)</li>
          </ul>
        </div>
      </section>


      {/* Technical Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <FaLaptopCode className="text-green-500" /> Technical Skills
        </h2>
        <div className="space-y-8">
           {/* Programming Languages */}
           <div>
            <h3 className="text-xl font-medium text-dark mb-4">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { Icon: BiLogoJavascript, color: 'text-yellow-500', label: 'JavaScript', tooltip: 'Modern JavaScript' },
                { Icon: BiLogoTypescript, color: 'text-blue-500', label: 'TypeScript', tooltip: 'Typed superset of JavaScript' },
              ].map(({ Icon, color, label, tooltip }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:scale-105 transform transition duration-300 relative cursor-default"
                  title={tooltip}
                >
                  <Icon className={`${color} text-3xl`} />
                  <p className="text-xl font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
         

          {/* Frontend Development */}
          <div>
            <h3 className="text-xl font-medium text-dark mb-4">Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { Icon: FaReact, color: 'text-blue-500', label: 'React', tooltip: 'JavaScript library for building UIs' },
                { Icon: SiNextdotjs, color: 'text-black', label: 'Next.js', tooltip: 'React framework with SSR' },
                { Icon: SiTailwindcss, color: 'text-teal-500', label: 'Tailwind CSS', tooltip: 'Utility-first CSS framework' },
                { Icon: FaBootstrap, color: 'text-purple-600', label: 'Bootstrap', tooltip: 'CSS framework for responsive design' },
              ].map(({ Icon, color, label, tooltip }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:scale-105 transform transition duration-300 relative cursor-default"
                  title={tooltip}
                >
                  <Icon className={`${color} text-3xl`} />
                  <p className="text-xl font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div>
            <h3 className="text-xl font-medium text-dark mb-4">Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { Icon: FaNodeJs, color: 'text-green-500', label: 'Node.js', tooltip: 'JavaScript runtime for server-side' },
                { Icon: SiExpress, color: 'text-gray-600', label: 'Express.js', tooltip: 'Minimal web framework for Node' },
                { Icon: SiPrisma, color: 'text-blue-900', label: 'Prisma', tooltip: 'Database ORM for Node.js and TypeScript' },
                { Icon: SiFirebase, color: 'text-yellow-600', label: 'Firebase', tooltip: 'Backend platform by Google' },
              ].map(({ Icon, color, label, tooltip }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:scale-105 transform transition duration-300 relative cursor-default"
                  title={tooltip}
                >
                  <Icon className={`${color} text-3xl`} />
                  <p className="text-xl font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        
           {/* Database */}
           <div>
            <h3 className="text-xl font-medium text-dark mb-4">Databases</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
               
                { Icon: SiMongodb, color: 'text-green-600', label: 'MongoDB', tooltip: 'NoSQL database' },
                { Icon: BiLogoPostgresql, color: 'text-[#336791]', label: 'PostgreSQL', tooltip: 'Relational database' },
              ].map(({ Icon, color, label, tooltip }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:scale-105 transform transition duration-300 relative cursor-default"
                  title={tooltip}
                >
                  <Icon className={`${color} text-3xl`} />
                  <p className="text-xl font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-xl font-medium text-dark mb-4">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { Icon: SiVercel, color: 'text-black', label: 'Vercel', tooltip: 'Deployment platform for modern web apps' },
                { Icon: FaGithub, color: 'text-black', label: 'GitHub', tooltip: 'Version control and collaboration' },
                { Icon: SiVisualstudiocode, color: 'text-blue-600', label: 'VS Code', tooltip: 'Code editor' },
              ].map(({ Icon, color, label, tooltip }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:scale-105 transform transition duration-300 relative cursor-default"
                  title={tooltip}
                >
                  <Icon className={`${color} text-3xl`} />
                  <p className="text-xl font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Knowledge */}
          <div>
            <h3 className="text-xl font-medium text-dark mb-4">Additional Knowledge</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { Icon: FaJava, color: 'text-red-600', label: 'Java', tooltip: 'General-purpose programming language' },
                { Icon: SiCsharp, color: 'text-green-600', label: 'C#', tooltip: 'Language by Microsoft for enterprise development' },

                
              ].map(({ Icon, color, label, tooltip }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:scale-105 transform transition duration-300 relative cursor-default"
                  title={tooltip}
                >
                  <Icon className={`${color} text-3xl`} />
                  <p className="text-xl font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Experience Section */}
      {/* <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <FaBriefcase className="text-purple-500" /> Experience
        </h2>
        <div>
          <h3 className="text-lg font-medium">IT Intern</h3>
          <p className="text-sm text-dark">Example Company - Jan 2023 to May 2023</p>
          <ul className="list-disc list-inside text-dark mt-3 space-y-2">
            <li>Assisted in maintaining and updating the company website using React and Node.js.</li>
            <li>Supported the IT team in troubleshooting network issues and managing databases.</li>
          </ul>
        </div>
      </section> */}

      {/* Certifications Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <FaCertificate className="text-orange-500" /> Certifications & Courses
        </h2>
        <ul className="list-disc list-inside text-dark space-y-2">
          <li>Java Foundations - Oracle Academy</li>
          <li>Systems Administration - Linux Profesional Institute</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-dark mb-6">
          Here are some of my featured projects.
        </p>
        
        {/* Featured Projects */}
        <div className="grid gap-6 md:grid-cols-2">
        <CardCapstone/>
        <CardFreelance/>
        </div>
        <p className="text-dark my-6">
          For more projects, visit my <Link href="/projects" className="text-blue-500 underline">Projects page</Link>.
        </p>
      </section>


      {/* Soft Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { Icon: FaComments, color: 'text-green-500', label: 'Communication', description: 'Able to effectively communicate technical concepts to non-technical team members.' },
            { Icon: FaLightbulb, color: 'text-yellow-500', label: 'Problem-solving', description: 'Skilled in analyzing and solving complex issues under pressure.' },
            { Icon: FaUsers, color: 'text-blue-500', label: 'Teamwork', description: 'Collaborative team player with experience working in cross-functional teams.' },
            { Icon: FaLightbulb, color: 'text-red-500', label: 'Adaptability', description: 'Comfortable adapting to new challenges and environments.' },
          ].map(({ Icon, color, label, description }, index) => (
            <div key={index} className="bg-white p-4 rounded-lg flex gap-4 hover:shadow-lg transition duration-300 ease-out">
              <div>
                <Icon className={`${color} text-2xl`} />
              </div>
              <div>
                <h3 className="font-semibold">{label}</h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Resume */}
      <section className="text-center mt-12">
        <Link
            href="/cv.pdf" // Replace with the actual path to your PDF file
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 mt-5 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
        >
             Download Resume (PDF)
             <MdDownload className="my-auto" size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Resume;
