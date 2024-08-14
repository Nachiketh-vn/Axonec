"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/app/(components)/Navbar";
import { createClient } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

function Page() {
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

  const [formData, setFormData] = useState({
    linkedin: "",
    github: "",
    learn: "",
    suggestion: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supabase = createClient();

    const { error } = await supabase
      .from("profiles")
      .update({
        linkedin: formData.linkedin,
        github: formData.github,
        learn: formData.learn,
        suggestions: formData.suggestion,
      })
      .eq("id", user.id);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:");
      router.push(`/tasks`);
    }
  };

  return (
    <div className="bg-[#070706] text-white min-h-screen relative">
      {/* Background Shapes */}
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center px-4 py-6">
        <h1 className="text-2xl mb-6">Submit Your Task Here:</h1>
        <form
          className="w-full max-w-lg p-2 md:p-0 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <Label htmlFor="linkedin">
              LinkedIn Profile Link{" "}
              <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="url"
              id="linkedin"
              placeholder="LinkedIn Profile Link"
              required
              value={formData.linkedin}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="github">
              GitHub Directory Link (upload all tasks code in one directory){" "}
              <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="url"
              id="github"
              placeholder="GitHub Directory Link"
              required
              value={formData.github}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="learn">
              What Did You Learn from This Internship{" "}
              <span className="text-red-700 text-sm">*</span>
            </Label>
            <Textarea
              className="bg-black"
              id="learn"
              required
              placeholder="Type your message here."
              value={formData.learn}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="suggestion">
              Any Suggestions for Us to Improve Our Service{" "}
              <span className="text-red-700 text-sm">*</span>
            </Label>
            <Textarea
              className="bg-black"
              id="suggestion"
              required
              placeholder="Type your message here."
              value={formData.suggestion}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="bg-[#F26C2B] px-4 py-2 rounded-full text-black font-semibold"
          >
            Submit
          </button>
        </form>
        <h1 className="text-xs mt-6">
          We will reach out to you in a few days as soon as our developers
          examine your submissions.
        </h1>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4">
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

          <div className="text-center text-sm">
            <p>&copy; 2024 Axonec. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
