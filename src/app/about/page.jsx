import react from "react";

const About = () => {
  return (
    <>
      {/* about page  */}

      <div className="min-h-screen mt-[40px] flex flex-col items-center justify-center py-16 px-6 sm:px-8 lg:px-16">
        {/* About Section Container */}
        <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-2xl transform transition-all  hover:shadow-xl">
          {/* About Heading */}
          <h2 className="text-4xl font-semibold text-center text-[#40ac78] mb-8">
            About Us
          </h2>

          {/* Company Description */}
          <div className="text-gray-700 space-y-6 mb-8">
            <p className="text-lg">
              We are a passionate team dedicated to delivering top-notch services that drive innovation and customer satisfaction. Our company was founded on the principle that great ideas come from collaboration, and we're here to help our clients grow by turning their dreams into reality.
            </p>
            <p className="text-lg">
              Our journey started in [Year], and since then, we've been pushing the boundaries of creativity and technology. Whether you're a startup or an established business, we're here to provide innovative solutions that make a difference.
            </p>
          </div>

          {/* Team Section */}
        

          {/* Mission or Values Section */}
          <div className="text-gray-700">
            <h3 className="text-3xl font-semibold text-[#40ac78] text-center mb-6">
              Our Mission
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-[#40c7dd] text-2xl">🡆</span>
                <p className="text-lg">
                  Deliver innovative solutions that create lasting value for our customers.
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-[#40c7dd] text-2xl">🡆</span>
                <p className="text-lg">
                  Foster a culture of collaboration, creativity, and continuous improvement.
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-[#40c7dd] text-2xl">🡆</span>
                <p className="text-lg">
                  Build strong, meaningful relationships with our clients based on trust and respect.
                </p>
              </li>
            </ul>
          </div>

         
        </div>
      </div>

    </>
  );
};
export default About;