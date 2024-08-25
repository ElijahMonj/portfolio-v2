import Me from '@/public/images/me.jpg'
import Image from "next/image";
export default function Home() {
  return (
    <>
    <main className="h-auto my-auto flex w-full justify-between flex-col items-center lg:flex-row md:flex-row">
      <div className="w-full lg:1/2 md:1/2">
          <Image src={Me} alt="me" className='mx-auto w-96 rounded-full p-16 lg:p-2 md:p-4'style={{objectFit: "contain"}}/>
      </div>
      <div className="w-full lg:1/2 md:1/2 flex items-center flex-col ">
        <div className="w-3/4 py-5">
          <p className='text-6xl'>Hello,</p>
          <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>     
        </div>
      </div>
    </main>
    </>
    
  );
}
