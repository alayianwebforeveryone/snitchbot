// // import Link from "next/link";

// // const Upload = () => {
// //   const userEmail = "user@example.com"; // Replace with dynamic user email
// //   const subject = "Image Upload Issue";
// //   const body = `Dear User,

// // We noticed an issue with your dress. Please make sure to follow proper dress and discipline.

// // Thank you!`;

// //   const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// //   return (
// //     <div className="mt-48 ">
    
// //       {/* Upload Page */}
//       // <div className="text-center">
//       //   <h1 className="text-[#40ac78] text-lg sm:text-xl pb-6 font-semibold">
//       //     Add an image in the following box to try our system
//       //   </h1>
//       //   <div className="max-w-[320px] mb-6 mx-auto p-4 border-2 border-slate-300 rounded-lg">
//       //     <div className="max-w-[320px] mx-auto my-4 py-[50px] border-2 border-slate-200 rounded-lg shadow-lg">
//       //       <h1 className="text-2xl sm:text-3xl text-[#6d68cb] font-bold">Add an Image</h1>
//       //     </div>
//       //   </div>
//       //   <Link href="#">
//       //     <button
//       //       type="button"
//       //       className="bg-[#40c7dd] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40ac78] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
//       //     >
//       //       Show Result
//       //     </button>
//       //   </Link>
//       // </div>

// //       {/* Upload Successful Status */}
//       // <div className="text-center  max-w-[500px] mx-auto  w-full">
//       //   <div className="bg-[#314797] p-[50px] space-y-6 my-4 rounded-xl shadow-lg">
//       //     <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
//       //       <div className="flex gap-2 text-center items-center">
//       //         {/* <RiShirtLine className="text-xl text-[#314797]" /> */}
//       //         <h1 className="font-bold text-white">Uniform</h1>
//       //       </div>
//       //       <div>
//       //         <h1 className="text-[#314797] font-bold">Yes</h1>
//       //       </div>
//       //     </div>
//       //     <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
//       //       <div className="flex gap-2 text-center items-center">
//       //         {/* <FaRegIdCard className="text-xl text-[#314797]" /> */}
//       //         <h1 className="font-bold text-white">Permission Card</h1>
//       //       </div>
//       //       <div>
//       //         <h1 className="text-[#314797] font-bold">No</h1>
//       //       </div>
//       //     </div>
//       //   </div>
//       //   <Link href="#">
//       //     <button
//       //       type="button"
//       //       className="bg-[#40c7dd] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40ac78] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
//       //     >
//       //       Back
//       //     </button>
//       //   </Link>
//       // </div>

// //       {/* Upload Failed Status */}
// //       {/* <div className="text-center  max-w-[500px] mx-auto w-full">
// //         <div className="bg-[#314797] py-[50px] space-y-6 my-4 rounded-xl shadow-lg">
// //           <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
// //             <div className="flex gap-2 text-center items-center">
// //               <RiShirtLine className="text-xl text-[#314797]" />
// //               <h1 className="font-bold text-white">Uniform</h1>
// //             </div>
// //             <div>
// //               <h1 className="text-red-500 font-bold">No</h1>
// //             </div>
// //           </div>
// //           <div className="bg-[#40c7dd] rounded-xl max-w-[300px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out">
// //             <div className="flex gap-2 text-center items-center">
// //               <FaRegIdCard className="text-xl text-[#314797]" />
// //               <h1 className="font-bold text-white">Permission Card</h1>
// //             </div>
// //             <div>
// //               <h1 className="text-red-500 font-bold">No</h1>
// //             </div>
// //           </div>
// //         </div>
// //         <Link href="#">
// //           <button
// //             type="button"
// //             className="bg-[#40ac78] text-white px-8 py-3 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40c7dd] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
// //           >
// //             Warning has been sent
// //           </button>
// //         </Link>
// //       </div> */}
// //     <div className="mt-32 text-center text-white">
// //       <a href={gmailLink}
// //         target="_blank"
// //       >
        
// //         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
// //           Send Warning
// //         </button>
// //       </a>
// //     </div>
      
// //     </div>
// //   );
// // };

// // export default Upload;
// 'use client'
// import Link from "next/link";
// import React, { useState } from "react";
// import Edit from "./result";

// function UserDetailPopup() {
//   const [showModal, setShowModal] = useState(false);
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Generate image preview
//       setPreview(URL.createObjectURL(file));
//       setImage(file);
//     }
//   };

//   const handleUpload = () => {
//     if (!image) {
//       alert('Please select an image to upload');
//       return;
//     }

//     // Handle the image upload (you can integrate your API here)
//     console.log('Image uploaded:', image);
//     alert('Image uploaded successfully!');
//   };

//   return (
  
      
//         <div
//           className=" mt-48   z-50    p-2  "
//         >
//            <div className="text-center">
//         <h1 className="text-[#40ac78] text-lg sm:text-xl pb-6 font-semibold">
//           Add an image in the following box to try our system
//         </h1>
      

// <div className="max-w-[40%] mb-6 mx-auto p-4 border-2 border-slate-300 rounded-lg">
//         <div className=" mx-auto my-4 py-[50px] border-2 border-slate-200 rounded-lg shadow-lg">
//           <h1 className="text-3xl my-12  sm:text-5xl text-[#6d68cb] font-bold">Add an Image</h1>

//        <form 
//        className="px-3"
//        >
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="block w-full mt-4 p-3 border-2  border-slate-300 rounded-md cursor-pointer text-[#6d68cb] hover:border-[#40ac78]"
//           />

//           {preview && (
//             <div className="mt-4">
//               <img
//                 src={preview}
//                 alt="Image Preview"
//                 className="w-32 h-32 object-cover rounded-md shadow-lg mx-auto"
//               />
//             </div>
//           )}

//         <button
//           type="submit"
//           onClick={() => setShowModal(true)}
//           className="bg-[#40c7dd] text-white px-8 py-3 mt-12  rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40ac78] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
//         >
//           Show Result
//         </button>


//        </form>
//         </div>
//       </div>

//       </div>
//           <Edit isVisible={showModal} close={() => setShowModal(false)} />
//         </div>

      

    
//   );
// }

// export default UserDetailPopup;





'use client'
import Link from "next/link";
import React, { useState } from "react";
import Edit from "./result";

function UserDetailPopup() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate image preview
      setPreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!image) {
      alert('Please select an image to upload');
      return;
    }

    // Handle the image upload (you can integrate your API here)
    // console.log('Image uploaded:', image);
    // alert('Image uploaded successfully!');

    // Show the modal
    setShowModal(true);
     // Reset the form
     setImage(null);
     setPreview(null);
  };

  return (
    <div className="mt-48 z-50 p-2">
      <div className="text-center">
        <h1 className="text-[#40ac78] text-lg sm:text-xl pb-6 font-semibold">
          Add an image in the following box to try our system
        </h1>
        <div className="max-w-[40%] mb-6 mx-auto p-4 border-2 border-slate-300 rounded-lg">
          <div className="mx-auto my-4 py-[50px] border-2 border-slate-200 rounded-lg shadow-lg">
            <h1 className="text-3xl my-12 sm:text-5xl text-[#6d68cb] font-bold">
              Add an Image
            </h1>

            <form className="px-3" onSubmit={handleFormSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full mt-4 p-3 border-2 border-slate-300 rounded-md cursor-pointer text-[#6d68cb] hover:border-[#40ac78]"
              />

              {preview && (
                <div className="mt-4">
                  <img
                    src={preview}
                    alt="Image Preview"
                    className="w-32 h-32 object-cover rounded-md shadow-lg mx-auto"
                  />
                </div>
              )}

              <button
                type="submit"
                className="bg-[#40c7dd] text-white px-8 py-3 mt-12 rounded-full font-medium text-base transition duration-300 ease-in-out hover:bg-[#40ac78] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Show Result
              </button>
            </form>
          </div>
        </div>
      </div>
      <Edit isVisible={showModal} close={() => setShowModal(false)} />
    </div>
  );
}

export default UserDetailPopup;
