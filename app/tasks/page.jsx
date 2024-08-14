"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../(components)/Navbar";
import Link from "next/link";
import Footer from "../(components)/Footer";
import { Button } from "../../components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { createClient } from "../utils/supabase/client";
import { useRouter } from "next/navigation";

const MainPage = () => {
  // State to manage if the certificate download is allowed
  const [cAllowed, setcAllowed] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getSession = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("id is:", user.id);
    setUser(user);
  };

  useEffect(() => {
    getSession();
  }, []);


  const [domain, setDomain] = useState("");
  useEffect(() => {
    const fetchDomain = async () => {
      const supabase = createClient(); // Create Supabase client instance

      try {
        const { data, error } = await supabase
          .from("profiles") // Replace 'profiles' with your table name
          .select("domain")
          .eq("id", user.id)
          .single(); // Fetch a single record

        if (error) {
          throw error;
        }

        setDomain(data.domain);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDomain();
  }, [user]);



  return (
    <div className="bg-[#070706] min-h-screen">
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>
      <Navbar />

      <div className="text-white flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Welcome to Your Internship Portal
        </h1>
        <p className="mb-6 text-sm sm:text-base text-white text-center">
          Use the links below to access important documents and pages related to
          your internship:
        </p>
        <ul className="list-none flex flex-col justify-center items-center gap-10">
          <li>
            <Link
              href="/tasks/offerletter"
              className="bg-[#F26C2B] px-6 py-3 rounded-full text-black font-semibold hover:bg-[#d15e25] transition"
            >
              Download Offer Letter
            </Link>
          </li>
          <li>
            <Link
              href={`/tasks/projects/${domain}`}
              className="bg-[#F26C2B] px-6 py-3 rounded-full text-black font-semibold hover:bg-[#d15e25] transition"
            >
              View Tasks
            </Link>
          </li>
          <li>
            {cAllowed ? (
              <Link
                href="/tasks/certificate"
                className="bg-[#F26C2B] px-6 py-3 rounded-full text-black font-semibold hover:bg-[#d15e25] transition"
              >
                Download Completion Certificate
              </Link>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-[#F26C2B] px-6 py-4 rounded-full text-black font-bold hover:bg-[#d15e25] transition">
                    Download Completion Certificate
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Complete All Tasks</AlertDialogTitle>
                    <AlertDialogDescription>
                      You need to upload your offer letter in LinkedIn and
                      complete all assigned tasks.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
