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
      questionText: "What is the output of `print(type([]))` in Python?",
      answerOptions: [
        { answerText: "<class 'list'>", isCorrect: true },
        { answerText: "<class 'dict'>", isCorrect: false },
        { answerText: "<class 'tuple'>", isCorrect: false },
        { answerText: "<class 'set'>", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is the correct syntax to create a function in Python?",
      answerOptions: [
        { answerText: "function myFunction():", isCorrect: false },
        { answerText: "def myFunction():", isCorrect: true },
        { answerText: "create myFunction():", isCorrect: false },
        { answerText: "function: myFunction()", isCorrect: false },
      ],
    },
    {
      questionText: "What is the correct way to create a dictionary in Python?",
      answerOptions: [
        {
          answerText: "my_dict = {'name': 'John', 'age': 25}",
          isCorrect: true,
        },
        {
          answerText: "my_dict = ['name', 'John', 'age', 25]",
          isCorrect: false,
        },
        {
          answerText: "my_dict = ('name': 'John', 'age': 25)",
          isCorrect: false,
        },
        {
          answerText: "my_dict = {'name', 'John', 'age', 25}",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which of the following is used to handle exceptions in Python?",
      answerOptions: [
        { answerText: "try-except", isCorrect: true },
        { answerText: "try-catch", isCorrect: false },
        { answerText: "catch-except", isCorrect: false },
        { answerText: "do-except", isCorrect: false },
      ],
    },
    {
      questionText: "How do you write a comment in Python?",
      answerOptions: [
        { answerText: "// This is a comment", isCorrect: false },
        { answerText: "# This is a comment", isCorrect: true },
        { answerText: "/* This is a comment */", isCorrect: false },
        { answerText: "-- This is a comment", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is not a valid Python data type?",
      answerOptions: [
        { answerText: "list", isCorrect: false },
        { answerText: "tuple", isCorrect: false },
        { answerText: "set", isCorrect: false },
        { answerText: "array", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following methods can be used to remove an item from a list?",
      answerOptions: [
        { answerText: "remove()", isCorrect: true },
        { answerText: "delete()", isCorrect: false },
        { answerText: "discard()", isCorrect: false },
        { answerText: "erase()", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of `print(2 ** 3)`?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "8", isCorrect: true },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is the correct syntax for a class in Python?",
      answerOptions: [
        { answerText: "class MyClass:", isCorrect: true },
        { answerText: "MyClass class:", isCorrect: false },
        { answerText: "class: MyClass", isCorrect: false },
        { answerText: "class = MyClass:", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which keyword is used to create an instance of a class in Python?",
      answerOptions: [
        { answerText: "init", isCorrect: false },
        { answerText: "new", isCorrect: false },
        { answerText: "self", isCorrect: false },
        {
          answerText: "None of the above (no keyword needed)",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Which of the following can be used to find the length of a string in Python?",
      answerOptions: [
        { answerText: "size()", isCorrect: false },
        { answerText: "length()", isCorrect: false },
        { answerText: "len()", isCorrect: true },
        { answerText: "count()", isCorrect: false },
      ],
    },
    {
      questionText: "What is the output of `print('Hello' + 'World')`?",
      answerOptions: [
        { answerText: "Hello", isCorrect: false },
        { answerText: "World", isCorrect: false },
        { answerText: "HelloWorld", isCorrect: true },
        { answerText: "Hello World", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is true about Python functions?",
      answerOptions: [
        {
          answerText: "A function can return multiple values",
          isCorrect: true,
        },
        {
          answerText: "A function cannot be called recursively",
          isCorrect: false,
        },
        {
          answerText: "Functions in Python do not support default arguments",
          isCorrect: false,
        },
        {
          answerText: "Python does not support anonymous functions",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which of the following keywords is used to define a generator in Python?",
      answerOptions: [
        { answerText: "yield", isCorrect: true },
        { answerText: "return", isCorrect: false },
        { answerText: "generate", isCorrect: false },
        { answerText: "yield return", isCorrect: false },
      ],
    },
    {
      questionText: "How do you create a tuple in Python?",
      answerOptions: [
        { answerText: "tuple = (1, 2, 3)", isCorrect: true },
        { answerText: "tuple = [1, 2, 3]", isCorrect: false },
        { answerText: "tuple = {1, 2, 3}", isCorrect: false },
        { answerText: "tuple = <1, 2, 3>", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is used to check if a key exists in a dictionary?",
      answerOptions: [
        { answerText: "key in dict", isCorrect: true },
        { answerText: "dict.key", isCorrect: false },
        { answerText: "dict.exists(key)", isCorrect: false },
        { answerText: "if key in dict.keys()", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of `print(10 // 3)`?",
      answerOptions: [
        { answerText: "3.33", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "3.0", isCorrect: false },
        { answerText: "4", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is not a built-in data type in Python?",
      answerOptions: [
        { answerText: "list", isCorrect: false },
        { answerText: "dictionary", isCorrect: false },
        { answerText: "set", isCorrect: false },
        { answerText: "vector", isCorrect: true },
      ],
    },
    {
      questionText: "What is the output of `bool([])` in Python?",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
        { answerText: "None", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following modules in Python provides support for regular expressions?",
      answerOptions: [
        { answerText: "re", isCorrect: true },
        { answerText: "regex", isCorrect: false },
        { answerText: "expressions", isCorrect: false },
        { answerText: "pattern", isCorrect: false },
      ],
    },
  ];



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

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
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(20); // Reset timer for next question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-[#070706] text-white min-h-screen relative">
      {/* Background Shapes */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div className="w-[8vw] h-[5vw] bg-[#F26C2B] rounded-full absolute z-10 left-[40%] transform -translate-x-1/2 -translate-y-1/2 blur-[8.5vw]"></div>
        <div className="w-[15vw] h-[12vw] bg-[#F26C2B] rounded-full absolute z-10 left-[65%] transform -translate-x-1/2 -translate-y-1/2 blur-[11vw]"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-5 left-10 bg-black text-white">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src="/axonec.png" width={35} height={35} alt="Logo" />
          <h1 className=" text-lg font-bold">Axonec</h1>
        </Link>
      </div>

      {/* Quiz Content */}
      <div className="flex flex-col items-center justify-center h-screen px-4 py-6">
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
