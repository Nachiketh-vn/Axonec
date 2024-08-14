"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { createClient } from '../utils/supabase/client';

function heroButton() {
    const [user, setuser] = useState(null);

    const getSession = async () => {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("id is :", user);
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
  return (
    <div className="text-white flex justify-center mt-[7vh]">
      {!intern ? (
        <Link
          href="/internship"
          className="text-base md:text-lg lg:text-xl px-4 py-2 bg-[#F26C2B] hover:bg-[#cc5c24] text-black font-medium rounded-lg"
        >
          Join our Internship Journey
        </Link>
      ) : (
        <Link
          href="/tasks"
          className="text-base md:text-lg lg:text-xl px-4 py-2 bg-[#F26C2B]  text-black font-semibold rounded-lg"
        >
          View My Tasks
        </Link>
      )}
    </div>
  );
}

export default heroButton