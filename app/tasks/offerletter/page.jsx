"use client";
import { useState, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";
import Footer from "../../(components)/Footer";
import Navbar from "../../(components)/Navbar";
import { createClient } from "@/app/utils/supabase/client";

export default function EditPdfPage() {
  const [user, setUser] = useState(null);
  const [domain, setDomain] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Intern");

  useEffect(() => {
    const getSession = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getSession();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchDomain = async () => {
        const supabase = createClient();

        try {
          const { data, error } = await supabase
            .from("profiles")
            .select("domain, full_name")
            .eq("id", user.id)
            .single();

          if (error) {
            console.error("Error fetching data:", error);
          } else {
            console.log("Fetched data:", data);
            setDomain(data.domain);
            setName(data.full_name);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchDomain();
    }
  }, [user]);

  useEffect(() => {
    if (domain) {
      if (domain === "web") {
        setRole("Web Development Intern");
      } else if (domain === "java") {
        setRole("Java Development Intern");
      } else if (domain === "python") {
        setRole("Python Development Intern");
      } else {
        setRole("Intern");
      }
    }
  }, [domain]);

  const today = new Date();
  const startDate = new Date(today);
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 28); // Add 4 weeks

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const todayFormatted = formatDate(today);
  const startDateFormatted = formatDate(startDate);
  const endDateFormatted = formatDate(endDate);

  const handleEditPdf = async () => {
    const existingPdfBytes = await fetch("/oleter1.pdf").then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    firstPage.drawText(`${todayFormatted}`, {
      x: 108,
      y: 627.5,
      size: 12,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(`${role}`, {
      x: 400,
      y: 627.5,
      size: 12,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(`${name},`, {
      x: 105,
      y: 580,
      size: 12,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(`${startDateFormatted}`, {
      x: 360,
      y: 421.5,
      size: 11.3,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(`${endDateFormatted}`, {
      x: 443,
      y: 421.5,
      size: 11.3,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, `${name}_offerLetter.pdf`, "application/pdf");
  };

  return (
    <div className="bg-[#070706] ">
      <Navbar />

      <div className="min-h-screen flex flex-col gap-4 items-center px-4 sm:px-6 lg:px-8">
        <div>
          <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
          <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
        </div>
        <div className="bg-black mt-[5vh] text-white border-[1px] border-white p-6 sm:p-8 rounded relative z-100 shadow-md max-w-lg w-full">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
            Internship Offer Acceptance
          </h1>
          <p className="mb-4 text-sm sm:text-base text-white">
            We are excited to have you on board as an intern at Axonec! To
            officially accept our offer, please follow the steps below:
          </p>
          <ol className="list-decimal list-inside mb-4 text-sm sm:text-base text-white">
            <li>
              Post your offer letter on LinkedIn ,so that we get to know you
              have accepted our offer.
            </li>
            <li>
              Tag <span className="font-bold text-blue-600">@Axonec</span> in
              your post.
            </li>
            <li>
              Complete all the assigned tasks as per the instructions given.
            </li>
            <li>Ensure all projects have the required functionalities.</li>
          </ol>
          <p className="mb-4 text-sm sm:text-base text-white">
            Please note that the Internship completion certificate will only be
            issued after all tasks have been successfully completed and reviewed
            by the company.
          </p>
          <button
            onClick={handleEditPdf}
            className="w-full bg-[#F26C2B] text-white px-4 py-2 rounded hover:bg-[#c95b24] text-sm sm:text-base"
          >
            Download Offer Letter
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
