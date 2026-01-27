import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

// LEFT COLUMN PRIVACY POLICY
const leftPolicy = [
    {
        q: "Introduction",
        a: "This Privacy Policy explains how BCIPL collects, uses, stores, and protects your personal information when you use our website, services, or enroll in any program.",
    },
    {
        q: "Information We Collect",
        a: "We may collect personal details such as your name, phone number, email address, address, educational details, and payment-related information when you register or contact us.",
    },
    {
        q: "How We Use Your Information",
        a: "Your information is used to provide services, process enrollments, communicate important updates, improve our courses, and offer student support.",
    },
    {
        q: "Data Protection & Security",
        a: "BCIPL takes reasonable technical and administrative measures to protect your personal information from unauthorized access, misuse, or disclosure.",
    },
    {
        q: "Sharing of Information",
        a: "We do not sell or rent your personal data. Your information may only be shared with trusted partners for academic, administrative, or legal purposes.",
    },
    {
        q: "Cookies & Tracking",
        a: "Our website may use cookies and similar technologies to improve user experience, analyze traffic, and optimize website performance.",
    },
    {
        q: "User Responsibilities",
        a: "You are responsible for keeping your login credentials confidential and ensuring the accuracy of the information you provide to BCIPL.",
    },
    {
        q: "Third-Party Links",
        a: "Our website may contain links to third-party websites. BCIPL is not responsible for the privacy practices or content of those websites.",
    },
];



// RIGHT COLUMN PRIVACY POLICY
const rightPolicy = [
    {
        q: "Consent",
        a: "By using the BCIPL website and services, you consent to the collection and use of your information as described in this Privacy Policy.",
    },
    {
        q: "Use of Personal Information",
        a: "Your personal data will be used strictly for academic, administrative, communication, certification, and support purposes only.",
    },
    {
        q: "Data Retention",
        a: "We retain your personal information only for as long as necessary to fulfill academic, legal, and administrative requirements.",
    },
    {
        q: "Payment Information",
        a: "Payment transactions are processed through secure third-party gateways. BCIPL does not store your full card or banking details.",
    },
    {
        q: "Student Communication",
        a: "We may contact you via phone, email, SMS, or WhatsApp for course updates, academic information, support, or important notifications.",
    },
    {
        q: "Policy Updates",
        a: "BCIPL may update this Privacy Policy from time to time. Any changes will be posted on this page and will be effective immediately.",
    },
    {
        q: "Legal Compliance",
        a: "We may disclose your personal information if required to do so by law or in response to valid legal requests by authorities.",
    },
    {
        q: "Contact Information",
        a: "If you have any questions or concerns about this Privacy Policy or your data, you can contact BCIPL through the official website or support channels.",
    },
];


export default function PolicySection() {
    const [openLeft, setOpenLeft] = useState(0);   // first open by default
    const [openRight, setOpenRight] = useState(-1);

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
                    BCIPL – Privacy Policy
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
                        read, understood, and agreed to this Privacy Policy and how your information will be used.
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
