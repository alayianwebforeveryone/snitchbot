import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
    <div className=" min-h-screen pt-40 px-6 flex flex-col items-center space-y-16">
        {/* Home Page */}
        <div className="max-w-[600px] text-center">
          <h1 className="text-[#40ac78] text-4xl font-semibold leading-tight pb-6">
            “SnitchBot ... Your vigilant partner in ensuring workplace and school compliance.”
          </h1>
          <Link href="#">
            <button
              type="button"
              className="bg-[#6d68cb] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-purple-500 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Start
            </button>
          </Link>
        </div>
        </div>
    
    
    
    </>
  );
}
