import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import {
    banking,
    course2,
    course3,
    gst,
    Insurance,
    mutual,
} from "../../assets/assets";

const courses = [
    {
        title: "Mutual Fund Career Program",
        desc: "Learn fund types, SIP strategies, risk profiling, and AMFI-ready advisory skills.",
        img: course2,
        tags: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
        slug: "/courses/mutual-fund-career-program",
        download: mutual
    },
    {
        title: "Banking Next Career Program",
        desc: "Master modern banking operations, compliance, KYC, and customer service essentials.",
        img: course2,
        tags: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
        slug: "/courses/banking-next-career-program",
        download: banking
    },
    {
        title: "Insurance Xpert Career Program",
        desc: "Build expertise in life, health, motor, and corporate insurance advisory.",
        img: course3,
        tags: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
        slug: "/courses/insurance-xpert-career-program",
        download: Insurance
    },
    {
        title: "GST & Tax Career Program",
        desc: "Learn GST filing, taxation compliance, returns, and professional practice.",
        img: course2,
        tags: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
        slug: "/courses/gst-tax-career-program",
        download: gst
    },
    {
        title: "Trade Xpert Career Program",
        desc: "Master stock market trading, technical analysis, and risk management.",
        img: course3,
        tags: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
        slug: "/courses/trade-xpert-career-program",
        download: ""
    },
];

import { useNavigate } from "react-router-dom";

export default function CourseOfferingsSlider() {

    const navigate = useNavigate()


    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    // Responsive visible count
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = courses.length - visibleCount;

    const next = () => {
        if (index < maxIndex) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const progress = ((index + 1) / (maxIndex + 1)) * 100;

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black">Our Course Offerings</h2>
                    <p className="text-gray-500 mt-2">
                        Specialized BFSI programs designed for strong career growth
                    </p>
                </div>

                {/* Slider */}
                <div className="relative overflow-hidden">

                    {/* Track */}
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${index * (100 / visibleCount)}%)`,
                        }}
                    >
                        {courses.map((item, i) => (
                            <div
                                key={i}
                                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                            >
                                {/* CARD */}
                                <div className="bg-white rounded-3xl shadow hover:shadow-lg transition h-[520px] flex flex-col overflow-hidden border border-gray-200">

                                    {/* Image */}
                                    <div className="relative h-[230px] cursor-pointer overflow-hidden group rounded-t-3xl">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* ORANGE TINT OVERLAY */}
                                        <div className="absolute inset-0 bg-[#ff6a2a]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <div className="flex items-center gap-2 text-white text-sm font-medium tracking-wide">
                                                Learn More
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>



                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="font-bold text-lg">{item.title}</h3>

                                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                            {item.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.tags.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs bg-orange-100 text-primary px-3 py-1 rounded-full"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buttons */}
                                        <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-200">
                                            {/* <button className="flex items-center gap-1 text-sm font-semibold hover:underline cursor-pointer">
                                                Brochure <ArrowUpRight size={14} />
                                            </button> */}
                                            <a
                                                href={item.download}
                                                download
                                                className="flex items-center gap-1 text-sm font-semibold hover:underline cursor-pointer"
                                            >
                                                Brochure <ArrowUpRight size={14} />
                                            </a>


                                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 hover:opacity-90 cursor-pointer"
                                                onClick={() => navigate(item.slug)}
                                            >
                                                View Course <ArrowUpRight size={14} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex items-center justify-between mt-10">

                        {/* Progress Line */}
                        <div className="flex-1 h-[2px] bg-gray-200 mr-6 relative overflow-hidden rounded">
                            <div
                                className="h-full bg-black transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={prev}
                                disabled={index === 0}
                                className={`w-10 h-10 rounded-full border border-1 flex items-center justify-center transition ${index === 0
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-gray-100 cursor-pointer"
                                    }`}
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={next}
                                disabled={index === maxIndex}
                                className={`w-10 h-10 rounded-full border border-1 flex items-center justify-center transition ${index === maxIndex
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-gray-100 cursor-pointer"
                                    }`}
                            >
                                <ChevronRight />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
