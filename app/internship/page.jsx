import Link from "next/link";
import Image from "next/image";
import { LuChevronsDown } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../(components)/Navbar";

function page() {

  return (
    <div className="bg-[#070706] text-white">
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col items-center mt-5 px-4">
        <h1 className="text-2xl text-center">
          Join our Virtual Training and Internship Journey
        </h1>
        <p className="text-sm mt-2 text-center max-w-xs md:max-w-lg">
          Set off on a journey of growth and innovation with our comprehensive
          virtual training and internship programs at Axonec.
        </p>
      </div>

      <div className="flex flex-wrap justify-around items-center w-full mt-12 gap-10 px-4">
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <Image
            className="rounded-lg"
            src="/1-webdev.jpg"
            width={250}
            height={250}
            alt="Web Development"
          />
          <h1 className="text-lg font-semibold text-center">Web Development</h1>
          <p className="text-center">
            Dive into hands-on coding projects, learn from experienced
            developers, and contribute to cutting-edge web solutions.
          </p>
          <Link
            className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-1 rounded-md font-semibold text-center"
            href={"/profile/id"}
          >
            Take Test
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <Image
            className="rounded-lg"
            src="/python.png"
            width={250}
            height={250}
            alt="Python Development"
          />
          <h1 className="text-lg font-semibold text-center">
            Python Development
          </h1>
          <p className="text-center">
            Engage in hands-on coding projects, learn from experienced
            developers, and contribute to innovative Python solutions.
          </p>
          <Link
            className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-1 rounded-md font-semibold text-center"
            href={"/profile/id"}
          >
            Take Test
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <Image
            className="rounded-lg"
            src="/java.png"
            width={250}
            height={250}
            alt="Java Development"
          />
          <h1 className="text-lg font-semibold text-center">
            Java Development
          </h1>
          <p className="text-center">
            Immerse yourself in practical projects, learn from experienced Java
            developers, and contribute to the development of Java-based
            solutions.
          </p>
          <Link
            className="text-black bg-[#F26C2B] hover:bg-[#cc5c24] px-4 py-1 rounded-md font-semibold text-center"
            href={"/profile/id"}
          >
            Take Test
          </Link>
        </div>
      </div>

      <div className="scroll flex justify-center text-4xl mt-8">
        <LuChevronsDown />
      </div>

      <div className="bg-black">
        <div className="w-[15vw] h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 top-[130%] left-[15%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      <div className="mt-8 flex flex-col items-center px-4">
        <h1 className="text-3xl mb-5 capitalize text-center">
          What all we provide for you here
        </h1>
        <div className="w-full max-w-md">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Flexible Learning</AccordionTrigger>
              <AccordionContent>
                Access to a variety of learning materials at your own pace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                2. Training by Experienced Developers
              </AccordionTrigger>
              <AccordionContent>
                Learn from industry professionals with real-world experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Real World-Projects</AccordionTrigger>
              <AccordionContent>
                Work on projects that simulate real-world challenges and
                scenarios.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Certificate of Internship</AccordionTrigger>
              <AccordionContent>
                Receive a certificate upon successful completion of the
                internship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. Networking Opportunities</AccordionTrigger>
              <AccordionContent>
                Connect with professionals and peers in the industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>6. Goodies for Top Candidates</AccordionTrigger>
              <AccordionContent>
                Exclusive rewards and incentives for top-performing candidates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>7. Full-Time Opportunity</AccordionTrigger>
              <AccordionContent>
                Potential for full-time employment based on performance and
                availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pb-[5vh]"></div>
        </div>
      </div>
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          {/* Footer Top */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-6">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-[#F26C2B]">
                Get in Touch
              </h2>
              <p className="mt-2">info@company.com</p>
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
}

export default page;
