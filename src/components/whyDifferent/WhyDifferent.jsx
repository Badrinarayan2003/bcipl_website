import React from "react";
import {
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
} from "../../assets/assets";



const features = [
    {
        title: "Industry-Focused Curriculum",
        desc: "Course built for today’s market with practical skills, real projects, job readiness.",
        img: f1,
    },
    {
        title: "Practical, Hands-On Training",
        desc: "Learn through guided practice, live demos, and real-world exercises to master every concept.",
        img: f2,
    },
    {
        title: "Assured Placement Support",
        desc: "Focused placement assistance with resume help, interview prep, and job connections.",
        img: f3,
    },
    {
        title: "Personalized Guidance",
        desc: "Personalized guidance to help you learn faster with tailored support and feedback.",
        img: f4,
    },
    {
        title: "Skilled, Job-Ready Workforce",
        desc: "Creating a skilled, job-ready workforce equipped for today’s industry demands.",
        img: f5,
    },
    {
        title: "Real-Time Live Telecasting",
        desc: "Delivering real-time live telecasts with smooth, secure, and high-quality streaming.",
        img: f6,
    },
];

export default function WhyDifferent() {
    return (
        <section className="w-full py-16 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">
                        What Makes Us Different
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Premium learning experiences combining academic rigor with real-world industry applications
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="
    group bg-white rounded-2xl p-5 transition-all duration-300
    border border-gray-100
    hover:border-primary hover:shadow-md hover:border hover:-translate-y-1
  "
                        >
                            {/* Content */}
                            <h3 className="mb-3 text-lg font-bold transition-colors text-black group-hover:text-primary">

                                {item.title}
                            </h3>

                            {/* Image */}
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-44 object-cover"
                                />
                            </div>

                            <p className="mt-2 text-sm text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
