import React from 'react'
import { h1, h2, h3, h4 } from '../../assets/assets'

export default function Placement() {
    return (
        <>
            <section className="pt-5 pb-15 px-6 bg-background dark:bg-slate-900">
                <div className="max-w-7xl mx-auto space-y-10">

                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
                            Our Placement Partners
                        </h2>
                        <p className="text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
                            BCIPL collaborates with leading financial institutions, banks, and NBFCs to provide
                            strong placement opportunities and career growth pathways for our students.
                        </p>
                    </div>

                    {/* Logos Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            { name: "BARE", logo: h1 },
                            { name: "Fullerton India", logo: h2 },
                            { name: "Indiabulls", logo: h3 },
                            { name: "IIFL", logo: h4 },
                            // { name: "TATA Capital", logo: h1 },
                            // { name: "Aditya Birla Capital", logo: h2 },
                            // { name: "ICICI Bank", logo: h3 },
                            // { name: "HDFC Bank", logo: h4 },
                        ].map((p, i) => (
                            <div
                                key={i}
                                className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-primary/20 dark:border-slate-700 rounded-xl shadow-lg p-4 flex items-center justify-center hover:scale-[1.03] transition cursor-pointer"
                            >
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className="w-40 h-20 object-contain mx-auto"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
