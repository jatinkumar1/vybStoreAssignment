"use client"
import React, { useState } from "react";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
export default function Faq() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: `How much does it cost to set up a store?`,
            answer: `ANSWER`
        },
        {
            question: `What kind of digital products can I sell?`,
            answer: `ANSWER` },
        {
            question: `Do I need technical skills to use the platform?`,
            answer: `ANSWER`},
        {
            question: `Is there a limit to the number of products I can list?`,
            answer: `ANSWER` },
        {
            question: `Can I sell internationally on this marketplace?`,
            answer: `ANSWER` },
        {
            question: `What support and resources are available for sellers?`,
            answer: `ANSWER` },
                    {
                        question: `Is there a review process for uploaded products?`,
                        answer: `ANSWER` }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (



        <div className="grid grid-cols-1 lg:grid-cols-2 ">

            <div className="flex flex-col justify-center text-center lg:text-left px-10">
                <h1 className="text-2xl lg:text-5xl text-primary">FREQUENTLY ASKED QUESTIONS</h1>
                <p className="text-lg lg:text-2xl lg:mt-4 text-white">Quick answers to questions you may have Can't find what you'r looking for?</p>
            </div>
            <div className="">
                <div className="max-w-2xl mx-auto p-4">

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-300 bg-white 
                                                rounded-lg p-4">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full text-left
                                       font-semibold text-black
                                       focus:outline-none flex justify-between"
                                >
                                    <span>{faq.question}</span>
                                    <span>{openIndex === index ? (<IoIosRemove className="text-black text-xl" />) : (<IoIosAdd className="text-black text-xl" />)}</span>

                                </button>
                                {openIndex === index && (
                                    <p className="mt-2 text-gray-700">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </div>


    )
}