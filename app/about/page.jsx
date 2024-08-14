import Link from "next/link";
import Navbar from "../(components)/Navbar";

const AboutUs = () => {

  return (
    <div className="bg-[#070706] text-white min-h-screen">
      {/* Background Shapes */}
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-white shadow-md rounded-lg relative z-10 p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#F26C2B] mb-6">
          About Axonec
        </h1>
        <p className="text-base md:text-lg mb-4">
          Welcome to <span className="text-[#F26C2B]">Axonec</span>, your
          trusted partner in IT consulting and services. We are a company driven
          by a passion for technology and a commitment to delivering
          cutting-edge solutions that empower businesses to thrive in the
          digital age. Over the years, we have established ourselves as a
          dynamic force in the IT landscape, offering innovative solutions that
          keep our clients ahead in an ever-evolving technological world.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#F26C2B] mb-4">
          Our Mission
        </h2>
        <p className="text-base md:text-lg mb-6">
          At Axonec, we recognize the transformative power of technology. Our
          mission is to provide comprehensive IT consulting services that enable
          businesses to harness the full potential of software solutions. We are
          dedicated to staying at the forefront of innovation, offering tailored
          strategies and implementations that meet the unique needs of our
          clients.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#F26C2B] mb-4">
          What Sets Us Apart
        </h2>
        <p className="text-base md:text-lg mb-6">
          Axonec stands out for its dedication to excellence and a
          client-centric approach. We understand that every business is unique,
          and our team of skilled professionals is committed to crafting bespoke
          solutions that align with your goals. From system integration to
          software development and beyond, we are here to navigate the complex
          world of IT, ensuring that your business stays ahead of the curve.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#F26C2B] mb-4">
          Our Services
        </h2>
        <ul className="list-disc list-inside text-base md:text-lg mb-6">
          <li>E-commerce Development</li>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Online Business Management</li>
          <li>Hoarding Advertisement</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#F26C2B] mb-4">
          Join Our Internship Program
        </h2>
        <p className="text-base md:text-lg">
          Interested in joining Axonec? We offer a comprehensive internship
          program designed to nurture the next generation of IT professionals.
          To apply, candidates must complete a MCQ Test, and selections are made
          based on their scores. This rigorous process ensures that only the
          best talents become part of our dynamic team.
        </p>
      </div>
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          {/* Footer Top */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-6">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-[#F26C2B]">
                Get in Touch
              </h2>
              <p className="mt-2">axonecinfo@gmail.com</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#F26C2B]">
                  Our Services
                </h3>
                <ul className="mt-2">
                  <li>Web Development</li>
                  <li>App Development</li>
                  <li>E-commerce Development</li>
                  <li>Online Business Management</li>
                  <li>Hoarding Advertisement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#F26C2B]">
                  Quick Links
                </h3>
                <ul className="mt-2">
                  <li>
                    <Link href="/" className="hover:text-[#F26C2B]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[#F26C2B]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/internship" className="hover:text-[#F26C2B]">
                      Internship
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-[#F26C2B]">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-sm">
            <p>&copy; 2024 Axonec. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
