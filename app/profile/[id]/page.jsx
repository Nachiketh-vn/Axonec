"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/app/(components)/Navbar";
import { createClient } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";


function Page() {
  const [user, setuser] = useState(null);
  const router = useRouter();

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    gender: "",
    domain: "",
    college: "",
    contactNumber: "",
    whatsappNumber: "",
    qualification: "",
    resumeLink: "",
    referral: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supabase = await createClient();

    const { error } = await supabase
      .from("profiles") // Replace 'users' with your table name
      .update(
        {
          full_name: formData.name,
          gender: formData.gender,
          domain: formData.domain,
          college: formData.college,
          phone: formData.contactNumber,
          wphone: formData.whatsappNumber,
          haq: formData.qualification,
          resume: formData.resumeLink,
          ref: formData.referral,
        },
      ).eq('id',user.id);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:");
      router.push(`/profile/${user.id}/instruction`)
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
        <h1 className="text-2xl mb-6">Enter Your Details</h1>
        <form className="w-full max-w-lg p-2 md:p-0 flex flex-col gap-6">
          <div>
            <Label htmlFor="email">
              Email <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="name">
              Name <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="text"
              id="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <Select
            required
            value={formData.gender}
            onValueChange={(value) => handleSelectChange("gender", value)}
          >
            <SelectTrigger className="w-full bg-black text-white">
              <SelectValue placeholder="Select a Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Gender</SelectLabel>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            required
            value={formData.domain}
            onValueChange={(value) => handleSelectChange("domain", value)}
          >
            <SelectTrigger className="w-full bg-black text-white">
              <SelectValue placeholder="Preferred Internship Domain" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Domains</SelectLabel>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="python">Python Programming</SelectItem>
                <SelectItem value="java">Java Programming</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Label htmlFor="college">
              College <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="text"
              id="college"
              placeholder="College"
              required
              value={formData.college}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="contactNumber">
              Contact Number <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="tel"
              id="contactNumber"
              placeholder="Contact Number"
              required
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="tel"
              id="whatsappNumber"
              placeholder="WhatsApp Number"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="qualification">
              Highest Academic Qualification{" "}
              <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="text"
              id="qualification"
              placeholder="Highest Academic Qualification"
              required
              value={formData.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="resumeLink">
              Resume Drive Link <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="url"
              id="resumeLink"
              placeholder="Resume Drive Link"
              required
              value={formData.resumeLink}
              onChange={handleInputChange}
            />
          </div>
          <Select
            required
            value={formData.referral}
            onValueChange={(value) => handleSelectChange("referral", value)}
          >
            <SelectTrigger className="w-full bg-black text-white">
              <SelectValue placeholder="Where did you learn about Axonec?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select One</SelectLabel>
                <SelectItem value="Friends">Friends</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="College Placement Cell">
                  College Placement Cell
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <button
            onClick={handleSubmit}
            className="bg-[#F26C2B] px-4 py-2 rounded-full text-black font-semibold"
          >
            Take Test
          </button>
        </form>
        <h1 className="text-xs mt-6">Preferred to start Test on Laptop/PC</h1>
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
