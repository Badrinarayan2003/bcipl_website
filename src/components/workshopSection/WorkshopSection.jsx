import React from 'react'

import {
    f1, f2, f3, f4, f5, f6
} from '../../assets/assets'


const blogs = [
    {
        title: "Stock Market Fundamentals Workshop",
        desc: "A practical introduction to equity markets, trading basics, and real-time analysis for beginners.",
        img: f1,
    },
    {
        title: "Banking Operations Masterclass",
        desc: "Students learned essential banking workflows, KYC procedures, and real-world documentation handling.",
        img: f2,
    },
    {
        title: "Mutual Funds & Wealth Planning",
        desc: "An interactive session on SIPs, financial planning strategies, and long-term wealth building.",
        img: f3,
    },
    {
        title: "Soft Skills & Interview Readiness",
        desc: "Resume polishing, mock interviews, communication skills, and personality enhancement activities.",
        img: f4,
    },
    {
        title: "Insurance Awareness Drive",
        desc: "Students explored types of insurance, claim processes, and customer handling techniques.",
        img: f5,
    },
    {
        title: "Finance Career Guidance Seminar",
        desc: "Experts shared insights on career paths, certifications, and opportunities in the BFSI sector.",
        img: f6,
    },
]


export default function WorkshopSection() {
    return (
        < section className="py-20 px-6 bg-background dark:bg-slate-900" >
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Section Heading */}
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
                        Latest Workshops & Events
                    </h2>
                    <p className="text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
                        Explore the latest hands-on sessions, expert talks, and student activities conducted at BCIPL.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((b, i) => (
                        <div
                            key={i}
                            className="rounded-2xl overflow-hidden border border-primary/20 dark:border-slate-700 shadow-lg bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl hover:scale-[1.03] transition"
                        >
                            <img
                                src={b.img}
                                alt={b.title}
                                className="w-full h-50 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-lg font-semibold dark:text-white">
                                    {b.title}
                                </h3>
                                <p className="text-muted-foreground dark:text-slate-300 text-sm leading-relaxed">
                                    {b.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    )
}
