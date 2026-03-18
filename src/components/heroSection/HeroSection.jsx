import React, { useState, useEffect } from "react";
import { hero_banner, hero_banner2, hero_banner1 } from "../../assets/assets";

const slides = [
    {
        title: "Learn Today to Lead Tomorrow",
        highlight: "Upgrade",
        description:
            "The goal of BCIPL, a professional training facility, is to cultivate talented individuals with expertise in banking, finance, insurance, taxation, and the stock market. Under the direction of Mr. Bijoy Mondal, a global award winner, we provide industry-focused training, practical instruction, and robust placement assistance to equip students for high-growth careers.",
        points: [
            "Structured learning pathways with industry-aligned curriculum.",
            "Real-world project exposure with 100% placement assistance.",
            "Mentorship from seasoned finance leaders.",
        ],
        bg: hero_banner,
        people: "/students-1.png",
    },
    {
        title: "Learn Today to Lead Tomorrow",
        highlight: "Upskill",
        description:
            "The goal of BCIPL, a professional training facility, is to cultivate talented individuals with expertise in banking, finance, insurance, taxation, and the stock market. Under the direction of Mr. Bijoy Mondal, a global award winner, we provide industry-focused training, practical instruction, and robust placement assistance to equip students for high-growth careers.",
        points: [
            "Structured learning pathways with industry-aligned curriculum.",
            "Real-world project exposure with 100% placement assistance.",
            "Mentorship from seasoned finance leaders.",
        ],
        bg: hero_banner1,
        people: "/students-1.png",
    },
    {
        title: "Learn Today to Lead Tomorrow",
        highlight: "Uplift",
        description:
            "The goal of BCIPL, a professional training facility, is to cultivate talented individuals with expertise in banking, finance, insurance, taxation, and the stock market. Under the direction of Mr. Bijoy Mondal, a global award winner, we provide industry-focused training, practical instruction, and robust placement assistance to equip students for high-growth careers.",
        points: [
            "Structured learning pathways with industry-aligned curriculum.",
            "Real-world project exposure with 100% placement assistance.",
            "Mentorship from seasoned finance leaders.",
        ],
        bg: hero_banner2,
        people: "/students-1.png",
    },
];

import { useNavigate } from "react-router-dom";

export default function HeroSection() {

    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = slides[index].highlight;

        let timer;

        if (!isDeleting) {
            // Typing
            timer = setTimeout(() => {
                setTypedText(currentWord.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentWord.length) {
                    // Pause after full word typed
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            }, 120);
        } else {
            // Deleting
            timer = setTimeout(() => {
                setTypedText(currentWord.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % slides.length); // move to next slide
                }
            }, 80);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index]);


    const slide = slides[index];

    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 pt-0 pb-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black">
                            {slide.title.split(" ").slice(0, 3).join(" ")} <br />
                            {slide.title.split(" ").slice(3).join(" ")} <br />
                            <span className="text-primary relative inline-block min-w-[120px]">
                                {typedText}
                                <span className="inline-block rounded-full w-2 h-2 bg-primary ml-1 animate-pulse"></span>

                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"></span>
                            </span>

                        </h1>

                        <p className="mt-6 text-gray-600 max-w-xl">
                            {slide.description}
                        </p>

                        <ul className="mt-4 space-y-2">
                            {slide.points.map((p, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="text-primary text-xl">✔</span>
                                    <span className="text-gray-700">{p}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 flex gap-4 flex-wrap">
                            <button className="bg-primary cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                                onClick={() => navigate("/contact")}
                            >
                                Enroll Now ↗
                            </button>
                            {/* <button className="bg-secondary cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                                onClick={() => navigate("/courses/banking-next-career-program")}
                            >
                                Courses ↗
                            </button> */}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-full h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
                        {/* Background */}
                        <img
                            src={slide.bg}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                    </div>
                </div>

                {/* DOTS */}
                <div className="flex gap-2 mt-6 justify-center">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-primary" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}





































// import React, { useState, useEffect } from "react";
// import { hero_banner } from "../../assets/assets";

// const slides = [
//     {
//         title: "Learn Today to Lead Tomorrow",
//         highlight: "Upgrade",
//         description:
//             "The goal of BCIPL, a professional training facility, is to cultivate talented individuals with expertise in banking, finance, insurance, taxation, and the stock market. Under the direction of Mr. Bijoy Mondal, a global award winner, we provide industry-focused training, practical instruction, and robust placement assistance to equip students for high-growth careers.",
//         points: [
//             "Structured learning pathways with industry-aligned curriculum.",
//             "Real-world project exposure with 100% placement guarantee.",
//             "Mentorship from seasoned finance leaders.",
//         ],
//         bg: hero_banner,
//         people: "/students-1.png",
//     },
//     {
//         title: "Learn Today to Lead Tomorrow",
//         highlight: "Upskill",
//         description:
//             "The goal of BCIPL, a professional training facility, is to cultivate talented individuals with expertise in banking, finance, insurance, taxation, and the stock market. Under the direction of Mr. Bijoy Mondal, a global award winner, we provide industry-focused training, practical instruction, and robust placement assistance to equip students for high-growth careers.",
//         points: [
//             "Structured learning pathways with industry-aligned curriculum.",
//             "Real-world project exposure with 100% placement guarantee.",
//             "Mentorship from seasoned finance leaders.",
//         ],
//         bg: hero_banner,
//         people: "/students-1.png",
//     },
//     {
//         title: "Learn Today to Lead Tomorrow",
//         highlight: "Uplift",
//         description:
//             "The goal of BCIPL, a professional training facility, is to cultivate talented individuals with expertise in banking, finance, insurance, taxation, and the stock market. Under the direction of Mr. Bijoy Mondal, a global award winner, we provide industry-focused training, practical instruction, and robust placement assistance to equip students for high-growth careers.",
//         points: [
//             "Structured learning pathways with industry-aligned curriculum.",
//             "Real-world project exposure with 100% placement guarantee.",
//             "Mentorship from seasoned finance leaders.",
//         ],
//         bg: hero_banner,
//         people: "/students-1.png",
//     },
// ];

// export default function HeroSection() {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     const slide = slides[index];

//     return (
//         <section className="w-full bg-white overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6 py-10">
//                 <div className="grid lg:grid-cols-2 gap-10 items-center">

//                     {/* LEFT CONTENT */}
//                     <div>
//                         <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black">
//                             {slide.title.split(" ").slice(0, 3).join(" ")} <br />
//                             {slide.title.split(" ").slice(3).join(" ")} <br />
//                             <span className="text-primary relative inline-block">
//                                 {slide.highlight}
//                                 <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"></span>
//                             </span>
//                         </h1>

//                         <p className="mt-6 text-gray-600 max-w-xl">
//                             {slide.description}
//                         </p>

//                         <ul className="mt-6 space-y-3">
//                             {slide.points.map((p, i) => (
//                                 <li key={i} className="flex gap-3 items-start">
//                                     <span className="text-primary text-xl">✔</span>
//                                     <span className="text-gray-700">{p}</span>
//                                 </li>
//                             ))}
//                         </ul>

//                         <div className="mt-8 flex gap-4 flex-wrap">
//                             <button className="bg-primary cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
//                                 Enroll Now ↗
//                             </button>
//                             <button className="bg-secondary cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
//                                 Courses ↗
//                             </button>
//                         </div>
//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <div className="relative w-full h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
//                         {/* Background */}
//                         <img
//                             src={slide.bg}
//                             alt=""
//                             className="absolute inset-0 w-full h-full object-cover"
//                         />

//                     </div>
//                 </div>

//                 {/* DOTS */}
//                 <div className="flex gap-2 mt-6 justify-center">
//                     {slides.map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setIndex(i)}
//                             className={`w-3 h-3 rounded-full transition ${i === index ? "bg-primary" : "bg-gray-300"
//                                 }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
