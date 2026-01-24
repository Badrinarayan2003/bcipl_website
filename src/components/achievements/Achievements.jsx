import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    ach1,
    ach2,
} from "../../assets/assets";

const experts = [
    {
        name: "Dr. Sourav Basu",
        img: ach1,
    },
    {
        name: "Mr. Ranjan Nagarkatte",
        img: ach2,
    },
    {
        name: "Mr. Arup Dasgupta",
        img: ach1,
    },
    {
        name: "Meena Gupta",
        img: ach2,
    },
    {
        name: "Meena Gupta",
        img: ach1,
    },
    {
        name: "Meena Gupta",
        img: ach2,
    },
    {
        name: "Meena Gupta",
        img: ach1,
    },
    {
        name: "Meena Gupta",
        img: ach2,
    },
    {
        name: "Meena Gupta",
        img: ach1,
    },
    {
        name: "Meena Gupta",
        img: ach2,
    },
];

export default function Achievements() {
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
                        Achievements
                    </h2>
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
                                className="px-3 flex-shrink-0"
                            >

                                {/* CARD */}
                                <div className="bg-white rounded-3xl shadow hover:shadow-lg transition h-[450px] flex items-center justify-center">

                                    <div className="relative overflow-hidden rounded-[24px] h-full flex items-center justify-center">
                                        <img
                                            src={item.img}
                                            alt="Achievement"
                                            className="h-full w-auto max-w-none object-contain"
                                        />
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