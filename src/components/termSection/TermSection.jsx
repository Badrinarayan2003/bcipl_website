import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

// LEFT COLUMN TERMS
const leftTerms = [
    {
        q: "Acceptance of These Terms",
        a: "By clicking “SIGN UP” or using the website (www.bcipl.com), you agree to these Terms & Conditions. If you do not agree, you must stop using BCIPL’s website, platform, or learning materials.",
    },
    {
        q: "User ID and Password",
        a: "You are responsible for maintaining the confidentiality of your login credentials. Any activity performed using your account will be considered your responsibility.",
    },
    {
        q: "Use of Website and Services",
        a: "You agree to use BCIPL’s website and services only for lawful purposes and not to misuse, copy, or distribute any content without authorization.",
    },
    {
        q: "Use of Personal Information",
        a: "BCIPL collects and uses your personal information in accordance with its Privacy Policy for providing services and improving user experience.",
    },
    {
        q: "Indemnity",
        a: "You agree to indemnify and hold BCIPL harmless from any claims, losses, or damages arising out of your misuse of the platform or violation of these terms.",
    },
    {
        q: "Waiver",
        a: "Failure by BCIPL to enforce any right or provision of these terms shall not be considered a waiver of those rights.",
    },
    {
        q: "Severability",
        a: "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
    },
    {
        q: "Governing Law & Jurisdiction",
        a: "These terms shall be governed and interpreted in accordance with the laws of India, and disputes shall be subject to the jurisdiction of Indian courts.",
    },
];


// RIGHT COLUMN TERMS
const rightTerms = [
    {
        q: "Acceptance of These Terms",
        a: "Your continued use of the BCIPL website and services confirms that you accept and agree to abide by these Terms & Conditions.",
    },
    {
        q: "Content and Course Material",
        a: "All course content, videos, PDFs, and study materials are for personal use only and must not be copied, shared, or resold.",
    },
    {
        q: "Intellectual Property Rights",
        a: "All content, logos, designs, and materials on the BCIPL platform are the intellectual property of BCIPL and are protected by applicable laws.",
    },
    {
        q: "Limitation of Liability",
        a: "BCIPL shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website or services.",
    },
    {
        q: "Use of Personal Information",
        a: "Your personal data will be used only for academic, administrative, and communication purposes as per BCIPL policies.",
    },
    {
        q: "Payment & Refund Policy",
        a: "All fees once paid are non-refundable unless explicitly stated in the refund policy of a specific course or program.",
    },
    {
        q: "Amendments and Assignment",
        a: "BCIPL reserves the right to modify these terms at any time. Continued use of the platform means you accept the updated terms.",
    },
    {
        q: "Entire Agreement",
        a: "These Terms & Conditions constitute the entire agreement between you and BCIPL regarding the use of the platform and services.",
    },
];


export default function TermSection() {
    const [openLeft, setOpenLeft] = useState(0);   // first open by default
    const [openRight, setOpenRight] = useState(-1);

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
                    BCIPL – Terms & Conditions
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        {leftTerms.map((item, index) => {
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
                        {rightTerms.map((item, index) => {
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
                    <p className="text-primary text-center font-semibold text-sm">By continuing to use the website or enrolling in any BCIPL program, you acknowledge that you have <br /> read, understood, and agreed to all Terms & Conditions stated above.</p>
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
