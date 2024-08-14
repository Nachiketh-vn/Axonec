import Image from "next/image";
import Link from "next/link";
import { MdBusinessCenter } from "react-icons/md";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import HeroButton from "./(components)/HeroButton";

export default function Home() {
  return (
    <div className="bg-[#0C0C0C] text-white">
      {/* Background Circles */}
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      {/* Navbar */}

      <Navbar />
      {/* Hero Section */}
      <div className="text-white flex flex-col justify-center items-center lg:mt-[15vh] sm:mt-[12vh] mt-[8vh] px-4">
        <div className="flex flex-col items-start md:items-center lg:items-start">
          <h1 className="mb-[2vh] text-lg md:text-md lg:text-xl text-center md:text-left">
            At Axonec We <span className="text-[#F26C2B]">Believe</span> In
          </h1>
          <p className="text-3xl sm:text-5xl md:text-3xl lg:text-6xl text-center md:text-left">
            Unlocking Potential, Transforming Solutions!
          </p>
          <h1 className="mt-[1vh] text-md md:text-sm lg:text-lg text-center lg:text-left lg:relative lg:left-[58vw] lg:top-[4vh]">
            Get ready to{" "}
            <span className="text-[#F26C2B]">accelerate your career</span> with
            us
          </h1>
        </div>
      </div>

      <HeroButton />

      {/* Services Section */}
      <div className="py-[7vh] md:py-[10vh] px-6">
        <div className="container  mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-Commerce */}
            <div className="bg-black border-2 border-white p-6 rounded-lg hover:shadow-custom1 shadow-custom">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  E-Commerce Solutions
                </h3>
                <p className="text-gray-300 mb-4">
                  We provide comprehensive e-commerce solutions to help you sell
                  your products and services online with ease and efficiency.
                </p>
              </div>
              <div>
                <Link
                  className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-2 rounded-md font-semibold relative z-10"
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Web Development */}
            <div className="bg-black border-2 border-white p-6 rounded-lg hover:shadow-custom1 shadow-custom">
              <h3 className="text-xl font-semibold text-white mb-4">
                Web Development
              </h3>
              <p className="text-gray-300 mb-4">
                Our expert developers create custom websites tailored to your
                business needs, ensuring a seamless user experience.
              </p>
              <div>
                <Link
                  className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-2 rounded-md font-semibold relative z-10"
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Mobile App Development */}
            <div className="bg-black border-2 border-white p-6 rounded-lg hover:shadow-custom1 shadow-custom">
              <h3 className="text-xl font-semibold text-white mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-300 mb-4">
                We design and develop mobile apps for both iOS and Android
                platforms, providing innovative and user-friendly solutions.
              </p>
              <div>
                <Link
                  className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-2 rounded-md font-semibold relative z-10"
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Online Business Management */}
            <div className="bg-black border-2 border-white p-6 rounded-lg hover:shadow-custom1 shadow-custom">
              <h3 className="text-xl font-semibold text-white mb-4">
                Online Business Management
              </h3>
              <p className="text-gray-300 mb-4">
                From strategy to execution, we offer comprehensive online
                business management services to help you grow your business
                online.
              </p>
              <div>
                <Link
                  className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-2 rounded-md font-semibold relative z-10"
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Hoarding Advertisement */}
            <div className="bg-black border-2 border-white p-6 rounded-lg hover:shadow-custom1 shadow-custom">
              <h3 className="text-xl font-semibold text-white mb-4">
                Hoarding Advertisement
              </h3>
              <p className="text-gray-300 mb-4">
                Reach your audience with impactful hoarding advertisements
                designed and managed by our experienced team.
              </p>
              <div>
                <Link
                  className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-2 rounded-md font-semibold relative z-10"
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
