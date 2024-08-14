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
        score: score
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
      questionText:
        "Which of the following is a correct syntax for defining a class in Java?",
      answerOptions: [
        { answerText: "public class MyClass {}", isCorrect: true },
        { answerText: "class MyClass public {}", isCorrect: false },
        { answerText: "MyClass public class {}", isCorrect: false },
        { answerText: "class public MyClass {}", isCorrect: false },
      ],
    },
    {
      questionText: "What is the purpose of the `final` keyword in Java?",
      answerOptions: [
        { answerText: "To create constant variables", isCorrect: true },
        { answerText: "To allow method overriding", isCorrect: false },
        { answerText: "To allow inheritance", isCorrect: false },
        { answerText: "To initialize variables", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is a valid constructor for the class `Employee`?",
      answerOptions: [
        { answerText: "public void Employee() {}", isCorrect: false },
        { answerText: "Employee() {}", isCorrect: true },
        { answerText: "void Employee() {}", isCorrect: false },
        { answerText: "public static Employee() {}", isCorrect: false },
      ],
    },
    {
      questionText: "Which method is used to start a thread execution in Java?",
      answerOptions: [
        { answerText: "run()", isCorrect: false },
        { answerText: "start()", isCorrect: true },
        { answerText: "execute()", isCorrect: false },
        { answerText: "begin()", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is NOT a feature of OOP in Java?",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: false },
        { answerText: "Inheritance", isCorrect: false },
        { answerText: "Polymorphism", isCorrect: false },
        { answerText: "Compilation", isCorrect: true },
      ],
    },
    {
      questionText:
        "What is the purpose of the `synchronized` keyword in Java?",
      answerOptions: [
        {
          answerText:
            "To control the access of multiple threads to any shared resource",
          isCorrect: true,
        },
        { answerText: "To make methods execute faster", isCorrect: false },
        { answerText: "To stop the execution of a thread", isCorrect: false },
        { answerText: "To pause the execution of a thread", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is an unchecked exception in Java?",
      answerOptions: [
        { answerText: "IOException", isCorrect: false },
        { answerText: "SQLException", isCorrect: false },
        { answerText: "NullPointerException", isCorrect: true },
        { answerText: "FileNotFoundException", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following statements is true regarding a static method?",
      answerOptions: [
        { answerText: "It can access instance variables", isCorrect: false },
        { answerText: "It can only be called by an object", isCorrect: false },
        {
          answerText: "It can access static variables directly",
          isCorrect: true,
        },
        { answerText: "It can override instance methods", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which method is used to pause the execution of a thread for a specific period?",
      answerOptions: [
        { answerText: "wait()", isCorrect: false },
        { answerText: "sleep()", isCorrect: true },
        { answerText: "pause()", isCorrect: false },
        { answerText: "yield()", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is not part of the JDK?",
      answerOptions: [
        { answerText: "javac", isCorrect: false },
        { answerText: "jre", isCorrect: false },
        { answerText: "javadoc", isCorrect: false },
        { answerText: "jvm", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which access modifier makes a class member accessible only within its own package?",
      answerOptions: [
        { answerText: "private", isCorrect: false },
        { answerText: "protected", isCorrect: false },
        { answerText: "public", isCorrect: false },
        { answerText: "default (no modifier)", isCorrect: true },
      ],
    },
    {
      questionText:
        "In Java, which of the following is true for `super` keyword?",
      answerOptions: [
        {
          answerText: "It is used to call the parent class constructor",
          isCorrect: true,
        },
        {
          answerText: "It is used to call the child class constructor",
          isCorrect: false,
        },
        {
          answerText: "It is used to create an instance of a class",
          isCorrect: false,
        },
        { answerText: "It is used to call static methods", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is used to restrict a class from being inherited?",
      answerOptions: [
        { answerText: "final", isCorrect: true },
        { answerText: "static", isCorrect: false },
        { answerText: "abstract", isCorrect: false },
        { answerText: "synchronized", isCorrect: false },
      ],
    },
    {
      questionText: "What is the default value of a boolean variable in Java?",
      answerOptions: [
        { answerText: "true", isCorrect: false },
        { answerText: "false", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "null", isCorrect: false },
      ],
    },
    {
      questionText:
        "What will happen if a thread calls the `wait()` method on an object?",
      answerOptions: [
        { answerText: "The thread will continue execution", isCorrect: false },
        { answerText: "The thread will sleep indefinitely", isCorrect: false },
        {
          answerText:
            "The thread will release the lock on the object and enter the waiting state",
          isCorrect: true,
        },
        {
          answerText: "The thread will enter a blocked state",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which method in the `Thread` class is used to set the priority of a thread?",
      answerOptions: [
        { answerText: "setPriority()", isCorrect: true },
        { answerText: "setThreadPriority()", isCorrect: false },
        { answerText: "setThreadLevel()", isCorrect: false },
        { answerText: "setLevel()", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is an example of checked exceptions in Java?",
      answerOptions: [
        { answerText: "ArithmeticException", isCorrect: false },
        { answerText: "ArrayIndexOutOfBoundsException", isCorrect: false },
        { answerText: "ClassNotFoundException", isCorrect: true },
        { answerText: "IllegalArgumentException", isCorrect: false },
      ],
    },
    {
      questionText: "Which keyword is used to inherit a class in Java?",
      answerOptions: [
        { answerText: "implements", isCorrect: false },
        { answerText: "extends", isCorrect: true },
        { answerText: "inherits", isCorrect: false },
        { answerText: "super", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is a method of `Object` class?",
      answerOptions: [
        { answerText: "toString()", isCorrect: true },
        { answerText: "length()", isCorrect: false },
        { answerText: "equalsIgnoreCase()", isCorrect: false },
        { answerText: "split()", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is true about the `JVM`?",
      answerOptions: [
        {
          answerText: "It converts Java bytecode into machine language",
          isCorrect: true,
        },
        { answerText: "It is a hardware component", isCorrect: false },
        {
          answerText: "It is a part of the Java source code",
          isCorrect: false,
        },
        { answerText: "It is used to compile Java code", isCorrect: false },
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
                Submit & Go Back to Home
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
