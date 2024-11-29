import Me from '@/public/images/me.jpg';
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-auto my-auto flex flex-col-reverse lg:flex-row md:flex-row items-center justify-between w-full p-6 lg:p-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
        <Image
          src={Me}
          alt="me"
          className="mx-auto w-64 lg:w-96 rounded-full lg:p-0 shadow-lg transform transition duration-1000 ease-out scale-0 opacity-0 animate-hero"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Text Section */}
      <div className="w-3/4 py-5 transform transition duration-1000 ease-out translate-y-8 opacity-0 animate-hero">
        <p className="text-2xl lg:text-2xl font-semibold text-gray-800">
          Hi, I’m <span className="text-dark font-bold">Elijah Monjardin</span> 👋
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
          A React Developer
        </h1>
        <p className="text-lg lg:text-2xl text-gray-600 mb-6">
          I&apos;m an IT student that is passionate in developing react applications and building projects with others!
        </p>
        <blockquote className="italic text-gray-500 border-l-4 border-gray-300 pl-4">
          &quot;The best way to predict the future is to create it.&quot; – Peter Drucker
        </blockquote>
      </div>

    </main>
  );
}
