import react from "react";
import Image from "next/image";
import Link from "next/link";
import { RiShirtLine } from "react-icons/ri";
import { FaRegIdCard } from "react-icons/fa";

const Upload = () => {
  return (
    <>
    <div className=" my-[40px]">

      {/* Upload Page */}
      <div className="text-center">
        <h1 className="text-[#40ac78] text-lg sm:text-xl pb-6 font-semibold">
          Add an image in the following box to try our system
        </h1>
        <div className="max-w-[320px] mb-6 mx-auto p-4 border-2 border-slate-300 rounded-lg">
          <div className="max-w-[320px] mx-auto my-4 py-[50px] border-2 border-slate-200 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl text-[#6d68cb] font-bold">Add an Image</h1>
          </div>
        </div>
        <Link href="#">
          <button
            type="button"
            className="bg-[#40c7dd] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40ac78] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Show Result
          </button>
        </Link>
      </div>

      {/* Upload Successful Status */}
      <div className="text-center  max-w-[500px] mx-auto  w-full">
        <div className="bg-[#314797] p-[50px] space-y-6 my-4 rounded-xl shadow-lg">
          <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex gap-2 text-center items-center">
              <RiShirtLine className="text-xl text-[#314797]" />
              <h1 className="font-bold text-white">Uniform</h1>
            </div>
            <div>
              <h1 className="text-[#314797] font-bold">Yes</h1>
            </div>
          </div>
          <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex gap-2 text-center items-center">
              <FaRegIdCard className="text-xl text-[#314797]" />
              <h1 className="font-bold text-white">Permission Card</h1>
            </div>
            <div>
              <h1 className="text-[#314797] font-bold">No</h1>
            </div>
          </div>
        </div>
        <Link href="#">
          <button
            type="button"
            className="bg-[#40c7dd] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40ac78] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Back
          </button>
        </Link>
      </div>

      {/* Upload Failed Status */}
      <div className="text-center  max-w-[500px] mx-auto w-full">
        <div className="bg-[#314797] py-[50px] space-y-6 my-4 rounded-xl shadow-lg">
          <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex gap-2 text-center items-center">
              <RiShirtLine className="text-xl text-[#314797]" />
              <h1 className="font-bold text-white">Uniform</h1>
            </div>
            <div>
              <h1 className="text-red-500 font-bold">No</h1>
            </div>
          </div>
          <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex gap-2 text-center items-center">
              <FaRegIdCard className="text-xl text-[#314797]" />
              <h1 className="font-bold text-white">Permission Card</h1>
            </div>
            <div>
              <h1 className="text-red-500 font-bold">No</h1>
            </div>
          </div>
        </div>
        <Link href="#">
          <button
            type="button"
            className="bg-[#40ac78] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40c7dd] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Warning has been sent
          </button>
        </Link>
      </div>
    </div>
      
    </>
  );
};
export default Upload;