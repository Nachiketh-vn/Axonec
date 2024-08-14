"use client";
import React, { useState } from "react";
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
import Image from "next/image";
import { createClient } from "../utils/supabase/client";
import { useRouter } from "next/navigation";


const ContactUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const supabase= createClient();
    const { error } = await supabase
  .from('Business Contact')
  .insert({ company_name:formData.companyName,
    name:formData.contactName,
    email:formData.email,
    phone:formData.phone,
    service:formData.service,
    message:formData.message
   })

    console.log("Form submitted");
    router.push("/"); // Redirect to home page after form submission
  };

  return (
    <div className="bg-[#070706] text-white min-h-screen">
      {/* Background Shapes */}
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      {/* Navbar */}
      <div className="text-white flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-20 py-5">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src="/axonec.png" width={35} height={35} alt="Logo" />
          <h1 className=" text-lg font-bold">Axonec</h1>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="relative z-10">
            Home
          </Link>
          <Link href="/about" className="relative z-10">
            About
          </Link>
          <Link href="/internship" className="relative z-10">
            Internship
          </Link>
          <Link
            className="text-black bg-[#F26C2B] px-4 py-1 rounded-md font-semibold relative z-10"
            href="/login"
          >
            Login
          </Link>
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
          <Link
            href="/internship"
            className="mb-8 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Internship
          </Link>
          <Link
            href="/login"
            className="text-black bg-[#F26C2B] px-6 py-2 rounded-md text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto text-white flex flex-col justify-center items-center shadow-md rounded-lg relative z-10 p-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-center text-white mb-6">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-2 md:p-0 flex flex-col gap-6"
        >
          <div>
            <Label htmlFor="companyName">
              Company Name <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              required
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="contactName">
              Contact Name <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="text"
              id="contactName"
              name="contactName"
              placeholder="Contact Name"
              required
              value={formData.contactName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="email">
              Email <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">
              Phone <span className="text-red-700 text-sm">*</span>
            </Label>
            <Input
              className="bg-black text-white border border-slate-800 rounded-md"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <Select
            required
            value={formData.service}
            onValueChange={(value) => handleSelectChange("service", value)}
          >
            <SelectTrigger className="w-full bg-black text-white">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Service</SelectLabel>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="app">App Development</SelectItem>
                <SelectItem value="ecommerce">
                  E-commerce Development
                </SelectItem>
                <SelectItem value="management">
                  Online Business Management
                </SelectItem>
                <SelectItem value="advertisement">
                  Hoarding Advertisement
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Label htmlFor="message">
              Message <span className="text-red-700 text-sm">*</span>
            </Label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="4"
              className="bg-black text-white border border-slate-800 rounded-md p-2 w-full"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#F26C2B] px-4 py-2 rounded-full text-black font-semibold"
          >
            Submit
          </button>
        </form>
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

export default ContactUs;
