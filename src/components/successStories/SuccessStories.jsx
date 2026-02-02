import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    SuccessStories1,
    SuccessStories2,
    SuccessStories3,
    SuccessStories4,
} from "../../assets/assets";

const stories = [
    {
        name: "Ronny",
        img: SuccessStories1,
        rating: 5,
        text: "BCIPL offers hands-on, industry-focused training with very supportive faculty. The concepts are explained in a simple and practical way, which really helped build my confidence. The learning is...",
    },
    {
        name: "Vivek Singh",
        img: SuccessStories2,
        rating: 5,
        text: "As a struggling job seeker, I was completely confused and unsure about my career path. BCIPL gave me the right direction, practical skills, and the confidence I was missing. The training is...",
    },
    {
        name: "Amit Roy",
        img: SuccessStories3,
        rating: 4,
        text: "After struggling for a long time as a job seeker, BCIPL truly changed my life. The practical training and constant support helped me develop real, usable skills and regain my confidence. Today, I’m...",
    },
    {
        name: "Amit Kumar",
        img: SuccessStories4,
        rating: 5,
        text: "The mentors at BCIPL are extremely supportive and the course structure is very practical. I finally feel job-ready and confident in interviews.",
    },
];

export default function SuccessStories() {
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

    const maxIndex = stories.length - visibleCount;

    const next = () => {
        if (index < maxIndex) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const progress = ((index + 1) / (maxIndex + 1)) * 100;

    return (
        <section className="w-full py-20 bg-[#f7f9fc]">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black">Success Stories</h2>
                    <p className="text-gray-500 mt-2">
                        What our learners say about the BCIPL experience
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
                        {stories.map((item, i) => (
                            <div
                                key={i}
                                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                            >
                                {/* CARD */}
                                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition h-[260px] flex flex-col">

                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="flex text-yellow-400 text-sm">
                                                {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)}
                                            </div>
                                            <h4 className="font-bold">{item.name}</h4>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                                        {item.text}
                                    </p>

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
