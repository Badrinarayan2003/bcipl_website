import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    experts1,
    experts2,
    experts3,
    experts4,
    experts5,
    experts6,
} from "../../assets/assets";

const experts = [
    {
        name: "Dr. Sourav Basu",
        role: "Assistant Professor, Faculty of Business",
        org: "Norbuling Rigter College, Royal University of Bhutan",
        img: experts6,
        tags: ["Strategic Management", "Finance", "Marketing"],
        bg: "bg-[#f2f2f2]",
    },
    {
        name: "Mr. Ranjan Nagarkatte",
        role: "CEO Intrasoft Solution",
        org: "14+ years in Banking",
        img: experts2,
        tags: ["Risk Management", "Compliance", "Credit Analysis"],
        bg: "bg-[#ffd2a1]",
    },
    {
        name: "Mr. Arup Dasgupta",
        role: "Principal Consultant",
        org: "Ex MD/CEO OF LIC BANGLADESH FCMA,MBA,LLB,FIII,MSC",
        img: experts3,
        tags: ["Life Insurance", "Underwriting", "Product Marketing"],
        bg: "bg-[#dff7b5]",
    },

    {
        name: "Sarmistha Mazumder",
        role: "Professional Trainer",
        org: "Hexaware Technologies",
        img: experts5,
        tags: ["Consulting", "Soft Skills Trainer", "Freelancing"],
        bg: "bg-[#bfe6ff]",
    },
    {
        name: "Meena Gupta",
        role: "Assistant Professor, Faculty of Business",
        org: "Norbuling Rigter College, Royal University of Bhutan",
        img: experts4,
        tags: ["Strategic Management", "Finance", "Marketing"],
        bg: "bg-[#bfe6ff]",
    },
];

export default function ExpertsSlider() {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    // Responsive visible count
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(4);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = experts.length - visibleCount;

    const next = () => {
        if (index < maxIndex) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const progress = ((index + 1) / (maxIndex + 1)) * 100;

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">
                        Learn from Industry Experts
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Your instructors are seasoned professionals bringing real-world experience directly to your learning
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
                        {experts.map((item, i) => (
                            <div
                                key={i}
                                className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-3"
                            >
                                {/* CARD */}
                                <div className="bg-white rounded-3xl p-4 shadow hover:shadow-lg transition h-[500px] flex flex-col">

                                    {/* Image */}
                                    <div className={`relative overflow-hidden rounded-[24px] ${item.bg}`}>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-[300px] object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="mt-4 flex-1 flex flex-col">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-sm text-secondary font-semibold">{item.role}</p>
                                        <p className="text-xs text-gray-500 mt-1">{item.org}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-3 mt-auto">
                                            {item.tags.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs bg-orange-100 text-primary px-3 py-1 rounded-full"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Controls Row */}
                    <div className="flex items-center justify-between mt-8">

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