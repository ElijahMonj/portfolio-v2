import Image from "next/image";

import Me from "@/public/images/me.jpg";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full">
      {/* Project Header */}
      <div className="text-center px-5">
        <h1 className="text-5xl font-bold mb-4">TricyCall: A Tricycle Hailing App</h1>
        <Image
          src={Me}
          alt="project image"
          className="rounded-lg mx-auto mt-6"
        />
      </div>

      {/* Team Members Section */}
      <div className="max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-4">Team Members</h2>
        {/* You */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <Image
            src={Me}
            alt="John Doe"
            width={512}
            height={512}
            className="rounded-full w-24 h-24"
          />
          <div className="text-center">
            <p className="text-lg font-medium">John Doe</p>
            <p className="text-dark text-sm">UI Designer, Developer, & Researcher</p>
          </div>
        </div>

        <div className="flex gap-6 justify-center relative">
            {teamMembers.map((member) => (
                <Link
                href={'/'}
                key={member.name}
                className="relative group"
                style={{ width: "64px", height: "64px", zIndex: 10 }}
                >
                {/* Scalable Avatar */}
                <Image
                    src={member.image}
                    alt={member.name}
                    width={512}
                    height={512}
                    className="rounded-full transition-transform duration-300 transform group-hover:scale-110 w-16 h-16"
                />

                {/* Hover Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-99">
                    <div className="group-hover:opacity-80 transition duration-300 bg-dark text-white text-sm font-medium rounded-full px-3 py-1 whitespace-nowrap z-20 opacity-0">
                    {member.name}
                    </div>
                </div>
                </Link>
            ))}
            </div>

      </div>

      {/* Project Overview */}
      <div className="max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-dark">
          Development a cloud-based multi-platform tricycle hailing system
            with real-time chat, emergency assistance, and GPS tracking for
            Tower Toda. The project aimed to address the challenges faced by
            commuters in Tower Toda, a barangay in the Philippines, by providing
            a convenient and reliable mode of transportation.
        </p>
      </div>

      {/* Key Features */}
      <div className="max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-dark space-y-3">
            <li>
            <strong>Dynamic Booking System:</strong> Developed a real-time booking system that allows passengers to easily book rides, select passenger count, and apply discounts.
            </li>
            <li>
            <strong>Live Tracking:</strong> Integrated real-time location tracking for both passengers and drivers to ensure accurate and up-to-date trip statuses.
            </li>
            <li>
            <strong>Emergency Assistance:</strong> Implemented automatic SMS alerts for all drivers in the event of an emergency, increasing safety for both drivers and passengers.
            </li>
            <li>
            <strong>Chat Support:</strong> Introduced real-time chat functionality for better communication between passengers and drivers during their trips.
            </li>
            <li>
            <strong>Driver and Passenger Management:</strong> Designed intuitive dashboards for managing trips, availability, and trip history for both drivers and passengers.
            </li>
            <li>
            <strong>Ticketing System:</strong> Created a report, rating and review system that allows passengers to provide feedback on drivers, helping to maintain service quality.
            </li>
        </ul>
        </div>


      {/* Technologies Used */}
      <div className="max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-4">Technologies Used</h2>
        <p className="text-dark mb-4">
          The following technologies were utilized by the development team to build the app. My contributions focused on UI design, coding the user interface in React Native, and conducting user research and documentation.
        </p>
        <ul className="list-disc pl-6 text-dark space-y-3">
          <li><strong>React Native:</strong> For building mobile applications.</li>
          <li><strong>Expo:</strong> For simplifying the development process with React Native.</li>
          <li><strong>Google Maps:</strong> For integrating maps and geolocation features.</li>
          <li><strong>Node.js:</strong> For server-side JavaScript runtime.</li>
          <li><strong>Express:</strong> For building web applications and APIs.</li>
          <li><strong>MongoDB:</strong> For a NoSQL database solution.</li>
          <li><strong>EJS:</strong> For templating and rendering dynamic HTML views.</li>
          <li><strong>Bootstrap:</strong> For responsive design and UI components.</li>
          <li><strong>Socket.io:</strong> For enabling real-time communication in the app.</li>
        </ul>
      </div>



      {/* Challenges and Learnings */}
      <div className="max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-4">Challenges and Learnings</h2>
        <p className="text-dark mb-4">
          One key challenge was conducting research to understand the needs of commuters in Tower Toda. 
          I learned how to speak to a client and write and conduct interviews and surveys that the respondents would understand to gather insights and feedback from potential users.
          This helped me identify key functionalities that would address their and gauge their level of tech literacy.
          I learned that it is important to consider the user&apos;s perspective when designing a product to ensure it meets their needs and expectations.
        </p>
        <p className="text-dark">
          Another challenge was ensuring the interface was
          user-friendly for both drivers and passengers. As the UX/UI
          Designer, I researched for inspirations and ideas to create a design that easy to navigate, understand, and use, while also ensuring the app was visually appealing. 
          I learned how to effectively communicate with developers to ensure the design was implemented correctly.
        </p>
        
      </div>

      {/* Outcome */}
      <div className="max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-4">Outcome</h2>
        <p className="text-dark">
        TricyCall is now a fully functional prototype, tested in real-world scenarios, and recognized for its innovative approach to addressing commuter needs. The project received overwhelmingly positive feedback during its presentation, highlighting its significant potential for scalability. It was also selected for presentation at a prestigious symposium, showcasing its impact and relevance in solving transportation challenges.
        </p>
      </div>
    </div>
  );
};

const teamMembers = [
  { name: "Louis Sindao", image: Me },
  { name: "Jake Birad", image: Me },
  { name: "Jehiel Camiling", image: Me },
];

export default Page;
