"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../(components)/Navbar";
import Link from "next/link";
import Footer from "../../../(components)/Footer";
import { createClient } from "@/app/utils/supabase/client";

const tasksData = {
  task1: {
    easy: {
      title: "Basic Temperature Converter",
      description:
        "Create a Python script that converts temperatures between Celsius, Fahrenheit, and Kelvin. The script should take user input and display the converted values.",
    },
    medium: {
      title: "Simple Contact Book",
      description:
        "Develop a Python application that allows users to store, retrieve, and delete contact information. Use a dictionary or a text file to store the contact details.",
    },
    hard: {
      title: "File Organizer Script",
      description:
        "Build a Python script that organizes files in a directory based on their file types. The script should create folders for each file type and move the files into their respective folders.",
    },
  },
  task2: {
    easy: {
      title: "Basic Quiz Application",
      description:
        "Create a Python script that asks the user a series of multiple-choice questions. The script should keep track of the user's score and provide feedback at the end.",
    },
    medium: {
      title: "Simple Markdown to HTML Converter",
      description:
        "Develop a Python script that converts a Markdown file into an HTML file. Use a library like `markdown` to handle the conversion and save the result as an HTML file.",
    },
    hard: {
      title: "Simple Expense Tracker",
      description:
        "Create a Python application that tracks daily expenses. Allow users to add, remove, and view expenses. Store the data in a CSV file or a simple JSON file.",
    },
  },
  task3: {
    easy: {
      title: "Number Guessing Game",
      description:
        "Develop a number guessing game where the user has to guess a randomly generated number within a certain range. Provide feedback on whether the guess is too high or too low.",
    },
    medium: {
      title: "Basic Email Sender",
      description:
        "Create a Python script that sends an email using an SMTP server. Allow users to input the recipient’s email address, subject, and body of the email.",
    },
    hard: {
      title: "Simple Web Scraper for Text Content",
      description:
        "Build a Python script that scrapes and prints text content from a webpage. Use libraries like `requests` and `BeautifulSoup` to fetch and parse the webpage content.",
    },
  },
};

const determineLevel = (score) => {
  if (score >= 80) return "hard";
  if (score >= 50) return "medium";
  return "easy";
};

const TasksPage = () => {

     const [user, setUser] = useState(null);

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

     const [score, setScore] = useState(0);
     useEffect(() => {
       const fetchDomain = async () => {
         const supabase = createClient(); // Create Supabase client instance

         try {
           const { data, error } = await supabase
             .from("profiles") // Replace 'profiles' with your table name
             .select("score")
             .eq("id", user.id)
             .single(); // Fetch a single record

           if (error) {
             throw error;
           }

           setScore(data.score);
         } catch (error) {
           console.log(error);
         }
       };

       fetchDomain();
     }, [user]);
  const [taskLevels, setTaskLevels] = useState({
    task1: {},
    task2: {},
    task3: {},
  });

  useEffect(() => {
    const level = determineLevel(score);
    setTaskLevels({
      task1: tasksData.task1[level],
      task2: tasksData.task2[level],
      task3: tasksData.task3[level],
    });
  }, [score]);

  return (
    <div className="bg-[#070706] min-h-screen relative">
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>
      <Navbar />

      <div className="text-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mt-[8vh] sm:text-4xl font-extrabold mb-6 text-center">
          Your Assigned Tasks
        </h1>
        <p className="mb-6 text-sm sm:text-lg text-white text-center">
          Based on your score, we have assigned the following tasks for you.
          Please create a GitHub repository and add the project code there:
        </p>

        <ul className="list-none text-sm sm:text-lg text-white space-y-8">
          <li className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="font-bold text-xl sm:text-2xl mb-2">
              <span className="text-[#F26C2B]">Task 1:</span>{" "}
              {taskLevels.task1.title}
            </h2>
            <p className="text-base text-white">
              {taskLevels.task1.description}
            </p>
          </li>
          <li className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="font-bold text-xl sm:text-2xl mb-2">
              <span className="text-[#F26C2B]">Task 2:</span>{" "}
              {taskLevels.task2.title}
            </h2>
            <p className="text-base text-white">
              {taskLevels.task2.description}
            </p>
          </li>
          <li className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="font-bold text-xl sm:text-2xl mb-2">
              <span className="text-[#F26C2B]">Task 3:</span>{" "}
              {taskLevels.task3.title}
            </h2>
            <p className="text-base text-white">
              {taskLevels.task3.description}
            </p>
          </li>
        </ul>

        <p className="text-sm sm:text-base text-white text-center sm:text-left mt-8">
          Please complete these tasks to the best of your ability. After
          completion of all tasks, submit them.
        </p>

        <Link
          href={"/tasks/projects/submit"}
          className="bg-[#F26C2B] my-8 px-8 py-3 rounded-full text-black font-semibold hover:bg-[#d15e25] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Submit Tasks
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default TasksPage;
