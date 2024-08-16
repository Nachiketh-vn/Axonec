"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../../../(components)/Navbar";
import Link from "next/link";
import Footer from "../../../(components)/Footer";
import { createClient } from "@/app/utils/supabase/client";

const tasksData = {
  task1: {
    easy: {
      title: "Simple Scrolling Effects with Locomotive Scroll",
      description: "Create a single-page website with basic scrolling effects using HTML, CSS, and Locomotive Scroll. Implement smooth scrolling and simple animations that trigger as the user scrolls down the page.",
    },
    medium: {
      title: "Animated Portfolio with CSS and JavaScript",
      description: "Build a personal portfolio website using HTML, CSS, and basic JavaScript. Add hover effects, transitions, and a smooth scroll effect to make the portfolio more engaging.",
    },
    hard: {
      title: "Product Showcase with Advanced CSS Animations",
      description: "Develop a product showcase page using HTML, CSS, and JavaScript. Focus on creating advanced CSS animations like keyframe animations, hover transitions, and scroll-triggered effects to highlight the products.",
    },
  },
  task2: {
    easy: {
      title: "Responsive Image Gallery with CSS Grid",
      description: "Create a responsive image gallery using HTML and CSS Grid. Arrange images in a grid layout that adjusts based on screen size, and add simple hover effects to make the gallery interactive.",
    },
    medium: {
      title: "Todo List Application with React",
      description: "Build a fully functional to-do list application using React.js. The app should allow users to add, edit, and delete tasks. Implement local storage to persist tasks between sessions, and ensure the UI is responsive.",
    },
    hard: {
      title: "Dynamic FAQ Section with Accordion Effect",
      description: "Build a dynamic FAQ section using HTML, CSS, and JavaScript. Implement an accordion effect where users can click to expand and collapse different sections. Add subtle animations to make the interaction smooth and responsive.",
    },
  },
  task3: {
    easy: {
      title: "Personal Blog with Simple Layout",
      description: "Create a personal blog using HTML and CSS. The blog should have a clean, simple layout with sections for blog posts, an about page, and a contact form. Focus on making the design responsive and easy to navigate.",
    },
    medium: {
      title: "Interactive Resume with JavaScript",
      description: "Develop an interactive resume using HTML, CSS, and JavaScript. Add features like collapsible sections, smooth scrolling, and hover effects to make the resume more engaging.",
    },
    hard: {
      title: "E-commerce Product Page with React",
      description: "Develop an e-commerce product page using React.js. The page should display a list of products fetched from an API or JSON file, allow users to filter products by category, and include a detailed product view with an image carousel.",
    }
  },
};



const determineLevel = (score) => {
  if (score >= 16) return "hard";
  if (score >= 11) return "medium";
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
