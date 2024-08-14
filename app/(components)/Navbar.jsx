"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { createClient } from "../utils/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

function navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setuser] = useState(null)
  
   const router = useRouter();
    const getSession = async () => {
     const supabase = await createClient();
     const {
       data: { user },
     } = await supabase.auth.getUser();
      console.log("id is :",user);
      setuser(user);
    };

    useEffect(() => {
      getSession();
    }, []);

    const [intern, setIntern] = useState(false);
    useEffect(() => {
      const fetchDomain = async () => {
        const supabase = createClient(); // Create Supabase client instance

        try {
          const { data, error } = await supabase
            .from("profiles") // Replace 'profiles' with your table name
            .select("intern")
            .eq("id", user.id)
            .single(); // Fetch a single record

          if (error) {
            throw error;
          }

          setIntern(data.intern);
        } catch (error) {
          console.log(error);
        }
      };

      fetchDomain();
    }, [user]);


  const Logout = async () => {
     const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out");
    } else {
      console.log("User logged out successfully");
      window.location.reload();
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="text-white flex justify-between items-center px-6 md:px-20 py-5">
        <Link 
        href={"/"}
        className="flex gap-2 items-center">
          <Image
            src="/axonec.png"
            width={35}
            height={35}
            alt="Logo"
          />
          <h1 className=" text-lg font-bold">Axonec</h1>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="relative z-10">
            Home
          </Link>
          <Link href="/about" className="relative z-10">
            About
          </Link>
          {!intern ? (
            <Link href="/internship" className="relative z-10">
              Internship
            </Link>
          ) : (
            <Link href="/tasks" className="relative z-10">
              Tasks
            </Link>
          )}
          {user === null ? (
            <Link
              className="text-black bg-[#F26C2B] hover:bg-[#c05622] px-4 py-1 rounded-md font-semibold relative z-10"
              href="/login"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => Logout()}
              className="text-black flex gap-2 items-center bg-[#F26C2B] hover:bg-[#c05622] px-4 py-1 rounded-md font-semibold relative z-10"
            >
              <p>Logout</p> <IoLogOutOutline className="text-xl" />
            </button>
          )}
        </div>
        <div
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <button className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0C0C0C] absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-40">
          <Link
            href="/"
            className="mb-8 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mb-8 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          {!intern ? (
            <Link
              href="/internship"
              className="mb-8 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Internship
            </Link>
          ) : (
            <Link
              href="/tasks"
              className="mb-8 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Tasks
            </Link>
          )}
          {user === null ? (
            <Link
              href="/login"
              className="text-black bg-[#F26C2B] px-6 py-2 rounded-md text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => Logout()}
              className="text-black flex gap-2 items-center bg-[#F26C2B] hover:bg-[#c05622] px-6 py-2 rounded-md text-2xl"
            >
              <p>Logout</p> <IoLogOutOutline className="text-xl" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default navbar;
