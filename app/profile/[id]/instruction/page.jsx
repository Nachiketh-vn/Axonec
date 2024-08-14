"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/client";
import Image from "next/image";


const InstructionsPage = () => {
  const [user, setuser] = useState(null);
  const [domain, setDomain] = useState(null);

    const getSession = async () => {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("id is :", user.id);
      setuser(user);
    };

    useEffect(() => {
      getSession();
    }, []);

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
    <div className="bg-black text-white font-sans min-h-screen flex flex-col justify-center items-center px-4">
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>
      <div className="absolute top-5 left-10 bg-black text-white">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src="/axonec.png" width={35} height={35} alt="Logo" />
          <h1 className=" text-lg font-bold">Axonec</h1>
        </Link>
      </div>
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 md:p-12 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Test Instructions
        </h1>

        <ul className="list-decimal list-inside space-y-4">
          <li className="text-lg">
            You will have{" "}
            <span className="font-bold text-orange-500">30 seconds</span> to
            answer each question.
          </li>
          <li className="text-lg">You cannot change your answer once marked</li>
          <li className="text-lg">
            There are{" "}
            <span className="font-bold text-orange-500">20 questions</span> in
            total, and only{" "}
            <span className="font-bold text-orange-500">one option</span> is
            correct for each question.
          </li>
          <li className="text-lg">
            Your final score will be determined based on the number of correct
            answers and time taken to answer Each Question.
          </li>
          <li className="text-lg">
            Based on your score, you will be assigned projects with varying
            levels of complexity.
          </li>
          <li className="text-lg">
            Candidates with the Good scores will be{" "}
            <span className="font-bold text-orange-500">selected</span>.
          </li>
          <li className="text-lg">
            You will be notified of the results{" "}
            <span className="font-bold text-orange-500">via email</span> as soon
            as possible.
          </li>
          <li className="text-lg">
            Ensure that you have a stable internet connection throughout the
            test.
          </li>
          <li className="text-lg">
            Do not refresh or close the browser during the test to avoid losing
            your progress.
          </li>
        </ul>

        <div className="mt-8 text-center">
          <Link
            href={`/profile/${user?.id}/${domain}`} // Adjust this path to match your routing setup
            className="bg-orange-500 text-black px-6 py-2 rounded-full font-semibold text-lg hover:bg-orange-600"
          >
            Start Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
