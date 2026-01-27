import React from "react";

export default function SuccessStoriesContact({ data }) {
    if (!data) return null;

    return (
        <section className="py-24 px-6 bg-[#F7F9FC]">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {data.subtitle}
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            {/* TOP */}
                            <div className="flex items-center gap-4 mb-4">

                                {/* AVATAR */}
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                {/* NAME + STARS */}
                                <div>

                                    {/* STARS */}
                                    <div className="flex gap-1 text-yellow-400 text-md">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>

                                    <div className="font-semibold text-black">
                                        {item.name}
                                    </div>

                                </div>
                            </div>

                            {/* TEXT */}
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                {item.text}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
