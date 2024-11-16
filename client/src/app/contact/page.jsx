import react from "react";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from ; // Import React Icons

const Contact = () => {
  return (
    <>
       {/* contact page  */}
       <div className="min-h-screen mt-[40px] flex flex-col items-center justify-center py-16 px-6 sm:px-8 lg:px-16">
      {/* Contact Container */}
      <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-2xl transform transition-all   hover:shadow-xl">
        <h2 className="text-4xl font-semibold text-center text-[#40ac78] mb-8">
          Get in Touch with Us
        </h2>

        {/* Contact Information Section */}
        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center space-x-6 hover:text-[#40ac78] transition duration-300">
            {/* <FaEnvelope className="text-[#40c7dd] text-3xl" /> */}
            <p className="text-lg font-medium text-gray-700">contact@yourcompany.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-6 hover:text-[#40ac78] transition duration-300">
            {/* <FaPhoneAlt className="text-[#40c7dd] text-3xl" /> */}
            <p className="text-lg font-medium text-gray-700">+1 (123) 456-7890</p>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-6 hover:text-[#40ac78] transition duration-300">
            {/* <FaMapMarkerAlt className="text-[#40c7dd] text-3xl" /> */}
            <p className="text-lg font-medium text-gray-700">
              123 Business Rd, Business City, BC 12345
            </p>
          </div>
        </div>

        {/* Additional Message Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            We would love to hear from you! Please don't hesitate to reach out with any questions, comments, or feedback.
          </p>
          <button className="px-8 py-3 bg-[#40c7dd] text-white font-semibold rounded-lg shadow-md hover:bg-[#6d68cb] transition-colors transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
export default Contact;