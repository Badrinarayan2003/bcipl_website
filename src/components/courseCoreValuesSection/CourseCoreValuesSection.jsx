import React from "react";

export default function CourseCoreValuesSection({ data }) {
    if (!data) return null;

    return (
        <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">

                {/* SECTION TITLE */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-14">
                    {data.title}
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {data.cards.map((card, index) => (
                        
                            <div
                                key={index}
                                className="bg-[#f0f2ff] rounded-2xl p-8 relative overflow-hidden"
                            >
                                {/* CORNER SHAPE WITH IMAGE */}
                                <div
                                    className={`
                  absolute top-0 -left-5 w-30 h-25
                  ${index % 2 === 0 ? "bg-primary" : "bg-blue-900"}
                  rounded-br-[70px]
                  flex items-center justify-center pt-4 ps-4 pe-4
                `}
                                >
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-12 h-12 object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="relative z-10 pt-20">
                                    <h3 className="text-xl font-bold mb-2 text-black">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>


                    ))}

                </div>

            </div>
        </section>
    );
}
