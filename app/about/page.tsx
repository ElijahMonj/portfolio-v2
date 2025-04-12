import React from 'react';
import { FaReact, FaNodeJs, FaSyncAlt, FaSearch, FaBriefcase, } from 'react-icons/fa';
import { FaCertificate, FaGraduationCap, FaLaptopCode, FaUsers, FaLightbulb, FaBootstrap, FaGithub, FaJava, FaLinkedin, FaEnvelope, FaClock, FaToolbox } from 'react-icons/fa6';
import CardCapstone from './CardCapstone';
import Link from 'next/link';
import { SiCsharp, SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiPrisma, SiTailwindcss, SiVercel, SiVisualstudiocode } from 'react-icons/si';
import { BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import Me from '@/public/images/me.jpg'
import Image from 'next/image';
import CardFreelance from './CardFreelance';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Elijah Monjardin | React Developer & IT Student",
  description: "Explore Elijah Monjardin's details, skills, and achievements in web development, React, and IT. Contact for collaborations and opportunities.",
  openGraph: {
    title: "About | Elijah Monjardin | React Developer & IT Student",
    description: "Discover Elijah Monjardin's details, skills, and achievements in web development, React, and IT. Contact for collaborations and opportunities.",
    locale: "en_US",
    url: "https://elijahmonjardin.tech/about",
    siteName: "Elijah Monjardin",
  },
};

const Resume = () => {
  const githubLink = 'underline font-medium hover:text-darkgray transition duration-500 ease-out';
  return (
    <div className="max-w-4xl mx-auto p-6 text-dark animateUp">
      {/* Header Section */}
      <header className="mb-10 flex flex-col items-center lg:flex-row lg:items-start lg:gap-8">
        {/* Left Column - Image */}
        <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden">
          <Image 
            src={Me}
            alt="Elijah Monjardin"
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
              aria-label="GitHub"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
            >
               <FaGithub className="my-auto" />GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/elijah-monjardin/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
            >
               <FaLinkedin className="my-auto" />LinkedIn
            </Link>
            <Link 
              aria-label='Email'
              href="mailto:monjardinelijah120@gmail.com" 
              className="px-3 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out"
            >
               <FaEnvelope className="my-auto" />Email
            </Link>
          </div>
          <p className="mt-4 text-lg text-dark leading-relaxed">
            A passionate IT graduate skilled in React development, eager to apply my enthusiasm for building applications in a professional environment
          </p>
          
        </div>
      </header>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <FaBriefcase className="text-purple-500" /> Experience
        </h2>
        <div>
          <h3 className="text-lg font-medium">Full-Stack Developer Intern</h3>
          <p className="text-sm text-dark">Lamina Studios - Feb 2025 - Present</p>
          <ul className="list-disc list-inside text-dark mt-3 space-y-2">
            <li>Worked on a Smart Logistics System using Laravel + Vue.js.</li>
            <li>Collaborated with fellow developer interns to add a registration portal, a customizable landing page, improved SEO, and QR code implementation.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <FaGraduationCap className="text-blue-500" /> Education
        </h2>
        <div>
          <h3 className="text-lg font-medium">Bachelor’s in Information Technology</h3>
          <p className="text-sm text-dark">
            STI College San Jose Del Monte – Graduated May 2025
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
        
        <div className="my-5">
          <h3 className="text-lg font-medium">Full Stack JavaScript Curriculum</h3>
          <p className="text-sm text-dark">
            The Odin Project – Completed 2023
          </p>
          <p className="text-dark mt-4">
            <strong>Key Skills:</strong>
          </p>
          <ul className="list-disc list-inside text-dark mt-2 space-y-1">
            <li>Learned MongoDB, Express.js, React, and Node.js (MERN) full stack development</li>
            <li>Learned Version Control using Git and GitHub</li>
            <li>Learned Responsive Web Design and Bootstrap Framework</li>
            <li>Developed projects such as a <a href='https://elijahmonj.github.io/Weather-App/' className={githubLink}>weather app</a>, <a href='https://elijahmonj.github.io/Tic-Tac-Toe/' className={githubLink}>tic-tac-toe game</a>, and <a href='https://github.com/ElijahMonj/think-and-share' className={githubLink}>social media web app</a></li>
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
                { Icon: FaReact , color: 'text-blue-400', label: 'React Native', tooltip: 'Build mobile apps using React' },
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
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <p className="text-dark mb-6">
          Here are some of my featured projects.
        </p>
        
       
        <div className="grid gap-6 md:grid-cols-2">
          
          <CardCapstone/>
          <CardFreelance/>
        </div>
        <p className="text-dark my-6">
          For more projects, visit my <Link href="/projects" aria-label='projects' className="text-blue-500 underline">Projects page</Link>.
        </p>
      </section>
      
      {/* Soft Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              Icon: FaLightbulb,
              color: 'text-yellow-500',
              label: 'Critical thinking',
              description: "Identified inefficiencies in the manual process of expiring unattended appointments and implemented an automated solution using cron jobs to reduce manual effort.",
            },
            {
              Icon: FaSyncAlt,
              color: 'text-blue-500',
              label: 'Adaptability',
              description: "Adapted to changes in tools by learning and using Firebase to speed up development and meet the client's deadline. Transitioned from developer to researcher during the capstone thesis.",
            },
            {
              Icon: FaUsers,
              color: 'text-green-500',
              label: 'Team Collaboration & Communication',
              description: 'Led the capstone documentation and research, and ensured alignment between study objectives and the developed system through clear communication with the co-developer.',
            },
            {
              Icon: FaSearch,
              color: 'text-pink-500',
              label: 'Research',
              description: 'Conducted client interviews and tricycle driver surveys to identify core problems and user needs, forming the foundation of solution.',
            },
            {
              Icon: FaClock,
              color: 'text-purple-500',
              label: 'Effective Time & Stress Management',
              description: 'Divided research and documentation tasks into manageable steps for our capstone project, reducing team stress and meeting deadline.',
            },
            {
              Icon: FaToolbox,
              color: 'text-orange-500',
              label: 'Resourcefulness',
              description: 'Utilized design ideas from Dribbble and existing technologies, such as react-native-gifted-chat, to accelerate development processes and meet tight deadlines.',
            },
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


    </div>
  );
};

export default Resume;
