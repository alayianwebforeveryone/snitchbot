import React from "react";
import Image from "next/image";
import Link from "next/link";
import card from "../../../Assets/Icons/card.svg"
import uniform from "../../../Assets/Icons/uniform.svg"

const Edit = ({ isVisible, close }) => {
  const handleClose = (e) => {
    if (e.target.id === "conatiner") close();
  };

  if (!isVisible) return null;

  const [isUniform, setIsUniform] = React.useState("Yes");
  const [isCard, setIsCard] = React.useState("No");

  const userEmail = "user@example.com"; // Replace with dynamic user email
  const subject = "Image Upload Issue";
  const body = `Dear User,
  
  We noticed an issue in the Uniform. Please follow the disipline.
  
  Thank you!`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div
      id="conatiner"
      onClick={handleClose}
      className="fixed inset-0 bg-black/25 flex justify-center items-center"
    >
      <div className="text-center max-w-[700px] mx-auto w-full">
        <div className={`  bg-[#314797] p-[50px] space-y-6 my-4 rounded-xl shadow-lg`}>
          <div className={` ${isUniform === "No" ? "border-red-500 border-2" : ""} bg-[#40c7dd] rounded-xl max-w-[500px] mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out`}>
            <div className="flex gap-2 text-center items-center">
            <Image src={uniform} alt="Card" width={30} height={30} />
              <h1
                className="text-white font-bold"
              >
                Uniform
              </h1>
            </div>
            <div>
              <h1 className= {`text-[#314797] ${isUniform === "No" ? "text-red-500" : ""}  font-bold`}>{isUniform}</h1>
            </div>
          </div>
          <div className={`bg-[#40c7dd] rounded-xl max-w-[500px] ${isCard === "No" ? "border-red-500 border-2" : ""} mx-auto flex justify-between p-4 shadow-md hover:scale-105 transition duration-300 ease-in-out`}>
            <div className="flex gap-2 text-center items-center">
             
                <Image src={card} alt="Card" width={30} height={30} />
              
              <h1 className="font-bold text-white">Permission Card</h1>
            </div>
            <div>
              <h1
                className={`text-[#314797] ${isCard === "No" ? "text-red-500" : ""}  font-bold`}
              >
                {isCard}
              </h1>
            </div>
          </div>
        </div>

        {/* Conditionally render the "Send Warning" button */}
        {isUniform === "No" || isCard === "No" ? (
          // Display "Send Warning" button only
          <div>
            <Link
             href={gmailLink}
             target="_blank"
            >
              <button
                type="link"
               
                className="bg-red-500 text-white px-8 py-3 rounded-xl font-medium text-base transition duration-300 ease-in-out hover:scale-105 focus:ring-4 focus:outline-none focus:ring-red-300 mb-4"
              >
                Send Warning
              </button>
            </Link>
          </div>
        ) : (
          // Display "Back" button when there is no "No"
          <Link href="#">
            <button
              onClick={close}
              type="button"
              className="bg-[#314797] text-white px-8 py-3 rounded-xl font-medium text-base transition duration-300 ease-in-out hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Edit;
