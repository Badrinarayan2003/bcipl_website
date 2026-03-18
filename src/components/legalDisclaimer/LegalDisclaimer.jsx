import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const leftPolicy = [
    {
        q: "Educational Purpose",
        a: "The programs offered by BCIPL – Bijoy Capital Institute of Professional Learning are intended solely for educational and training purposes. The institute provides structured learning in financial markets, banking, mutual funds, insurance, taxation, and capital market concepts to enhance professional knowledge and employability.",
    },
    {
        q: "No Investment Advice",
        a: "BCIPL does not provide investment advice, stock recommendations, trading signals, portfolio management, or research services. All discussions related to financial markets are strictly for academic learning and illustration purposes only.",
    },
    {
        q: "No SEBI-Regulated Services",
        a: "BCIPL operates as a professional learning institute and is not registered with SEBI as an Investment Adviser, Research Analyst, or Portfolio Manager. Users should consult a registered financial advisor before making investment decisions.",
    },
    {
        q: "Risk Disclosure",
        a: "Trading and investing in financial markets involve substantial risk. Market prices can fluctuate, capital loss is possible, and past performance does not guarantee future results.",
    },
    {
        q: "Illustrative Examples",
        a: "All charts, case studies, and trading illustrations are provided only for educational demonstration and should not be considered as real-time recommendations or predictions.",
    },
    {
        q: "Independent Decision Responsibility",
        a: "All investment or trading decisions made by participants are solely their responsibility. BCIPL shall not be liable for any financial losses or damages arising from such decisions.",
    },
];



const rightPolicy = [
    {
        q: "Certification Disclaimer",
        a: "Certificates issued by BCIPL represent course completion only and do not constitute professional licensing, regulatory certification, or authorization to provide financial advice.",
    },
    {
        q: "Marketing & Advertising Notice",
        a: "Statements made in advertisements, social media, or promotional materials describe the educational scope of the program and should not be interpreted as financial advice or profit guarantees.",
    },
    {
        q: "Ad Disclaimer (Short Version)",
        a: "This program is for educational purposes only. BCIPL does not provide investment advice, stock recommendations, or trading signals.",
    },
    {
        q: "Risk Disclaimer (Ads)",
        a: "Trading in financial markets involves risk. Examples used in training are for educational purposes only and do not guarantee future results.",
    },
    {
        q: "Safe Advertising Language",
        a: "BCIPL promotes learning financial market concepts, understanding trading mechanisms, and building industry skills. It does not promote guaranteed income, stock tips, or profit assurance.",
    },
    {
        q: "Where Disclaimers Apply",
        a: "Disclaimers are applicable across the website, course pages, webinars, advertisements, social media platforms, and all training materials.",
    },
];


export default function LegalDisclaimer() {
    const [openLeft, setOpenLeft] = useState(0);   // first open by default
    const [openRight, setOpenRight] = useState(-1);

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
                    BCIPL – Legal Disclaimer
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        {leftPolicy.map((item, index) => {
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
                        {rightPolicy.map((item, index) => {
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
                    <p className="text-primary text-center font-semibold text-sm">
                        By using the BCIPL website and services, you acknowledge that you have <br />
                        read, understood, and agreed to this Legal Disclaimer & Regulatory Notice.
                    </p>
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
