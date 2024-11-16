import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   

    <>
  
  <div className="bg-[#314797] mt-48 text-white py-32 font-sans h-[400px]  ">
    <div className=" w-[40%] mx-auto     ">
      <div className="text-center ">
        <h2 className="text-5xl font-bold mb-4">SnitchBot ...</h2>
        <p className=" text-gray-300 text-center text-xl ">
        “ Your vigilant partner in ensuring workplace and school compliance.”
        </p>
      </div>
      <div className="mx-auto w-[20%] my-12 ">
    <Link
    href="/upload"
    >
      <button

              type="button"
              className="bg-[#00ABE4]  text-white px-12 text-xl  py-3 rounded-xl font-bold  transition duration-300 ease-in-out hover:bg-purple-500 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Start
            </button>
    </Link>
      </div>
    </div>
  </div>
</>
  );
}
