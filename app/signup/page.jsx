"use client"
import { signup } from "./action";
import Link from "next/link";
import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoArrowBackOutline } from "react-icons/io5";
import { bygoogle } from "./action";
import { createClient } from "../utils/supabase/client";


function Page() {

  const bygoogle = async()=>{
    const supabase = createClient();
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    
  }
  return (
    <div className=" bg-[#070706] text-white relative">
      <div className="flex items-center gap-2 absolute top-5 left-5 text-lg cursor-pointer z-20">
        <IoArrowBackOutline />
        <Link href={"/"}>Home</Link>
      </div>

      {/* Background Shapes */}
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      <h1 className="pt-10 text-2xl text-center mb-10">Sign Up</h1>

      <div className="flex justify-center p-4 w-full">
        <div className="flex flex-col items-center border-2 border-slate-800 rounded-2xl w-full max-w-md p-6 bg-black">
          <p className="text-lg mb-4">Enter Your Details</p>
          <form className="flex flex-col gap-4">
            <Input
              type="text"
              name="username"
              placeholder="Name"
              className="bg-black text-white border border-slate-800 rounded-md"
            />
            <Input
              type="tel"
              name="tel"
              placeholder="Contact Number"
              className="bg-black text-white border border-slate-800 rounded-md"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-black text-white border border-slate-800 rounded-md"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-black text-white border border-slate-800 rounded-md"
            />

            <button
              type="submit"
              formAction={signup}
              className="bg-[#F26C2B] text-black font-semibold py-2 px-4 rounded-2xl mt-4 w-full max-w-xs"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-[#F26C2B]">
              LogIn
            </Link>
          </p>
          <hr className="text-white bg-white border-[0.5px] border-slate-800 my-4 w-full max-w-md" />
          <button
            onClick={bygoogle}
            className="flex gap-2 items-center border-[1px] border-white rounded-lg mt-6 px-6 py-2 mb-6 w-full max-w-xs justify-center"
          >
            <FaGoogle className="text-[#F26C2B] relative bottom-[2px]" />
            Continue with Google
          </button>
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
}

export default Page;
