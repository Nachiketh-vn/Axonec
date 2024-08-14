"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../(components)/Navbar";
import Link from "next/link";
import Footer from "../../../(components)/Footer";
import { createClient } from "@/app/utils/supabase/client";

const tasksData = {
  task1: {
    easy: {
      title: "Basic Calculator",
      description:
        "Create a simple console-based calculator in Java. The calculator should support basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    },
    medium: {
      title: "Simple To-Do List Application",
      description:
        "Develop a console application that allows users to add, view, and remove tasks from a to-do list. Store the tasks in memory during the application's runtime.",
    },
    hard: {
      title: "File Organizer Tool",
      description:
        "Build a Java application that organizes files in a directory based on their extensions. The tool should create folders for different file types and move the files accordingly.",
    },
  },
  task2: {
    easy: {
      title: "Student Grade Calculator",
      description:
        "Create a Java application to calculate and display student grades. The application should allow input of grades for multiple subjects and calculate the average grade.",
    },
    medium: {
      title: "Basic Banking System",
      description:
        "Develop a simple banking application with basic functionalities like creating an account, depositing, withdrawing, and checking the balance. Use object-oriented principles to model the bank accounts.",
    },
    hard: {
      title: "Simple To-Do List with File Storage",
      description:
        "Enhance the to-do list application to store tasks in a file. The application should read tasks from the file on startup and save new tasks to the file.",
    },
  },
  task3: {
    easy: {
      title: "Number Guessing Game",
      description:
        "Develop a console-based number guessing game where the user tries to guess a randomly generated number. Provide feedback on whether the guess is too high or too low.",
    },
    medium: {
      title: "Basic Address Book",
      description:
        "Create a Java application that manages a list of contacts with names, phone numbers, and email addresses. Provide functionality to add, view, and remove contacts.",
    },
    hard: {
      title: "Simple Chat Application",
      description:
        "Build a basic chat application using Java sockets. The application should allow multiple users to connect, send messages to each other, and display messages in real-time.",
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
