"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { createClient } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";


const QuizPage = () => {
  
  const [user, setuser] = useState(null);

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

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supabase = await createClient();

    const { error } = await supabase
      .from("profiles") // Replace 'users' with your table name
      .update({
        score: score,
      })
      .eq("id", user.id);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Score inserted successfully:");
      router.push("/");
    }
  };

  const questions = [
    {
      questionText: "Which HTML tag is used to define an internal style sheet?",
      answerOptions: [
        { answerText: "<css>", isCorrect: false },
        { answerText: "<style>", isCorrect: true },
        { answerText: "<script>", isCorrect: false },
        { answerText: "<link>", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which property is used in CSS to change the background color of an element?",
      answerOptions: [
        { answerText: "color", isCorrect: false },
        { answerText: "bgcolor", isCorrect: false },
        { answerText: "background-color", isCorrect: true },
        { answerText: "backgroundImage", isCorrect: false },
      ],
    },
    {
      questionText: "In JavaScript, how do you declare a variable?",
      answerOptions: [
        { answerText: "let myVar;", isCorrect: true },
        { answerText: "var myVar", isCorrect: false },
        { answerText: "int myVar;", isCorrect: false },
        { answerText: "myVar let;", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is not a JavaScript data type?",
      answerOptions: [
        { answerText: "Number", isCorrect: false },
        { answerText: "String", isCorrect: false },
        { answerText: "Boolean", isCorrect: false },
        { answerText: "Float", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which method is used to attach a click event to an element in JavaScript?",
      answerOptions: [
        { answerText: "addEventListener()", isCorrect: true },
        { answerText: "addListener()", isCorrect: false },
        { answerText: "attachEvent()", isCorrect: false },
        { answerText: "clickEvent()", isCorrect: false },
      ],
    },
    {
      questionText: "What is the purpose of the 'useState' hook in React?",
      answerOptions: [
        { answerText: "To fetch data from an API", isCorrect: false },
        {
          answerText: "To manage state in a functional component",
          isCorrect: true,
        },
        {
          answerText: "To manage side effects in a component",
          isCorrect: false,
        },
        { answerText: "To handle form submission", isCorrect: false },
      ],
    },
    {
      questionText:
        "How do you pass data from a parent component to a child component in React?",
      answerOptions: [
        { answerText: "Using state", isCorrect: false },
        { answerText: "Using props", isCorrect: true },
        { answerText: "Using context", isCorrect: false },
        { answerText: "Using hooks", isCorrect: false },
      ],
    },
    {
      questionText: "Which command is used to create a new React application?",
      answerOptions: [
        { answerText: "npm init react-app my-app", isCorrect: false },
        { answerText: "npm install create-react-app", isCorrect: false },
        { answerText: "npx create-react-app my-app", isCorrect: true },
        { answerText: "react-create-app my-app", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the use of 'componentDidMount()' in React class components?",
      answerOptions: [
        { answerText: "To initialize state", isCorrect: false },
        {
          answerText: "To perform side effects after the component mounts",
          isCorrect: true,
        },
        { answerText: "To update the DOM", isCorrect: false },
        { answerText: "To clean up resources", isCorrect: false },
      ],
    },
    {
      questionText:
        "In Node.js, which module is used to work with the file system?",
      answerOptions: [
        { answerText: "http", isCorrect: false },
        { answerText: "fs", isCorrect: true },
        { answerText: "url", isCorrect: false },
        { answerText: "path", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is true about Express.js?",
      answerOptions: [
        { answerText: "It is a front-end framework", isCorrect: false },
        { answerText: "It is used for building RESTful APIs", isCorrect: true },
        { answerText: "It is a database management system", isCorrect: false },
        { answerText: "It is a templating engine", isCorrect: false },
      ],
    },
    {
      questionText: "How do you define a route in Express.js?",
      answerOptions: [
        { answerText: "app.get('/route', function)", isCorrect: true },
        { answerText: "app.route('/route').get(function)", isCorrect: false },
        { answerText: "app.route.get('/route', function)", isCorrect: false },
        { answerText: "get.app('/route', function)", isCorrect: false },
      ],
    },
    {
      questionText: "What does the 'res.send()' method do in Express.js?",
      answerOptions: [
        { answerText: "Sends a JSON response", isCorrect: false },
        { answerText: "Sends an HTML file", isCorrect: false },
        { answerText: "Sends a plain text response", isCorrect: true },
        { answerText: "Sends a redirect response", isCorrect: false },
      ],
    },
    {
      questionText: "Which HTTP method is commonly used to update a resource?",
      answerOptions: [
        { answerText: "GET", isCorrect: false },
        { answerText: "POST", isCorrect: false },
        { answerText: "PUT", isCorrect: true },
        { answerText: "DELETE", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'event.preventDefault()' do in JavaScript?",
      answerOptions: [
        { answerText: "Stops the event from propagating", isCorrect: false },
        {
          answerText: "Prevents the default action of the event",
          isCorrect: true,
        },
        {
          answerText: "Stops the execution of the event handler",
          isCorrect: false,
        },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is not a valid CSS unit?",
      answerOptions: [
        { answerText: "em", isCorrect: false },
        { answerText: "px", isCorrect: false },
        { answerText: "cm", isCorrect: false },
        { answerText: "hr", isCorrect: true },
      ],
    },
    {
      questionText: "How do you include a JavaScript file in an HTML document?",
      answerOptions: [
        { answerText: "<script href='file.js'></script>", isCorrect: false },
        { answerText: "<script src='file.js'></script>", isCorrect: true },
        { answerText: "<link rel='script' src='file.js'>", isCorrect: false },
        { answerText: "<script link='file.js'></script>", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the correct syntax for a self-closing tag in HTML?",
      answerOptions: [
        { answerText: "<img />", isCorrect: true },
        { answerText: "<img></img>", isCorrect: false },
        { answerText: "<img /", isCorrect: false },
        { answerText: "<img>", isCorrect: false },
      ],
    },
    {
      questionText: "In React, what does JSX stand for?",
      answerOptions: [
        { answerText: "JavaScript XML", isCorrect: true },
        { answerText: "JavaScript Xtra", isCorrect: false },
        { answerText: "JSON XML", isCorrect: false },
        { answerText: "JavaScript Syntax", isCorrect: false },
      ],
    },
    {
      questionText: "What is the default port for an Express.js application?",
      answerOptions: [
        { answerText: "3000", isCorrect: true },
        { answerText: "8080", isCorrect: false },
        { answerText: "80", isCorrect: false },
        { answerText: "5000", isCorrect: false },
      ],
    },
  ];

  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerOptionClick(false);
    }

    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1 + timeLeft);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30); // Reset timer for next question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-[#070706] text-white min-h-screen relative">
      {/* Background Shapes */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div className="w-[8vw] h-[5vw] bg-[#F26C2B] rounded-full absolute z-10 left-[40%] transform -translate-x-1/2 -translate-y-1/2 blur-[8.5vw]"></div>
        <div className="w-[15vw] h-[12vw] bg-[#F26C2B] rounded-full absolute z-10 left-[65%] transform -translate-x-1/2 -translate-y-1/2  blur-[11vw] md:blur-[15vw]"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-5 left-10 bg-black text-white">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src="/axonec.png" width={35} height={35} alt="Logo" />
          <h1 className=" text-lg font-bold">Axonec</h1>
        </Link>
      </div>

      {/* Quiz Content */}
      <div className="flex flex-col items-center justify-center h-screen px-4 py-6 ">
        <div className="w-full max-w-xl bg-[#000000] rounded-2xl border-[1px] border-white  p-6 relative z-10">
          {showScore ? (
            <div className="text-center flex flex-col justify-center items-center gap-4">
              <h1 className="text-2xl font-semibold text-[#F26C2B]">
                Thank You for Attending the Test
              </h1>
              <p className="text-xl text-white">
                We will reach out to you based on your performance
              </p>
              <Link
                href={"/"}
                onClick={handleSubmit}
                className="bg-[#F26C2B] text-black rounded-full px-4 py-2 font-semibold"
              >
                Go Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6 p-2 md:p-0">
                <h1 className="text-2xl font-bold mb-4 text-[#ed763a]">
                  Question {currentQuestion + 1}/{questions.length}
                </h1>
                <p className="text-lg text-white">
                  {questions[currentQuestion].questionText}
                </p>
              </div>
              <div className="mb-4 text-right text-red-600 font-bold">
                Time Left: {timeLeft} seconds
              </div>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
