import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

// LEFT COLUMN FAQS
const leftFaqs = [
    {
        q: "What is BCIPL?",
        a: "BCIPL (Bijoy Capital Institute of Professional Learning) is a professional training institute offering industry-oriented programs in Banking, Finance, Stock Market, Insurance, GST, Taxation, and Corporate Skills with job-ready practical training and placement support.",
    },
    {
        q: "Does BCIPL offer offline or online classes?",
        a: "Yes, BCIPL offers both offline classroom training and online learning modes.",
    },
    {
        q: "Does BCIPL provide certificates?",
        a: "Yes, BCIPL provides certificates upon successful completion of the courses.",
    },
    {
        q: "Who can join BCIPL courses?",
        a: "Students, freshers, and working professionals who want to build or upgrade their career in finance and business domains can join.",
    },
];

// RIGHT COLUMN FAQS
const rightFaqs = [
    {
        q: "What makes BCIPL different from other institutes?",
        a: "BCIPL focuses on practical, industry-aligned training with real-world exposure, smart classes, and strong placement support.",
    },
    {
        q: "What is the fee structure of BCIPL courses?",
        a: "The fee structure depends on the selected course. You can contact BCIPL directly for detailed course-wise fees.",
    },
    {
        q: "Which courses does BCIPL offer?",
        a: "BCIPL offers courses in Banking, Finance, Stock Market, Insurance, GST, Taxation, and Corporate Skills.",
    },
    {
        q: "Does BCIPL provide placement support?",
        a: "Yes, BCIPL provides placement assistance and career guidance to students.",
    },
];

export default function FAQSection() {
    const [openLeft, setOpenLeft] = useState(0);   // first open by default
    const [openRight, setOpenRight] = useState(-1);

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        {leftFaqs.map((item, index) => {
                            const isOpen = openLeft === index;

                            return (
                                <FAQItem
                                    key={index}
                                    item={item}
                                    isOpen={isOpen}
                                    onClick={() => {
                                        setOpenLeft(isOpen ? -1 : index);
                                        setOpenRight(-1); // close right side
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-6">
                        {rightFaqs.map((item, index) => {
                            const isOpen = openRight === index;

                            return (
                                <FAQItem
                                    key={index}
                                    item={item}
                                    isOpen={isOpen}
                                    onClick={() => {
                                        setOpenRight(isOpen ? -1 : index);
                                        setOpenLeft(-1); // close left side
                                    }}
                                />
                            );
                        })}
                    </div>

                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-10">
                    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 cursor-pointer rounded-full text-sm font-medium transition">
                        View All <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
}

// REUSABLE FAQ ITEM
function FAQItem({ item, isOpen, onClick }) {
    return (
        <div
            className={`border rounded-xl transition-all duration-300 border border-gray-300 overflow-hidden ${isOpen ? "bg-gradient-to-b from-white to-[#FF5722] text-[#FF5722]" : "bg-white"
                }`}
        >
            {/* Question */}
            <button
                onClick={onClick}
                className="w-full cursor-pointer flex items-center justify-between text-left p-5"
            >
                <span className="font-semibold text-sm md:text-base">
                    {item.q}
                </span>

                <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full border transition ${isOpen
                        ? "bg-orange-500 text-white border-orange-500"
                        : "border-gray-300 text-black"
                        }`}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>

            {/* Answer */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                        {item.a}
                    </div>
                </div>
            </div>
        </div>
    );
}
