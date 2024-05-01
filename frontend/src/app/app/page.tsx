"use client";
import Chatbot from "@/components/chatbot";
import Questionary from "@/components/questionary";
import { useState } from "react";

export default function App() {
    const [questionData, setQuestionData] = useState();

    return (
        <div className="flex items-center justify-center w-full pt-20">
            {!questionData ?
                <Questionary setData={setQuestionData} />
                : <Chatbot />
            }
        </div>
    )
}