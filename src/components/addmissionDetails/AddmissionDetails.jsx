import React from "react";

export default function AddmissionDetails({ data }) {
    if (!data) return null;

    return (
        <section className="pt-6 pb-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-5 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* TITLE */}
                        <h2 className="text-4xl sm:text-5xl font-bold text-black">
                            {data.title}
                        </h2>

                        {/* SUBTITLE */}
                        <p className="text-gray-600 mt-2 mb-3">
                            {data.subtitle}
                        </p>

                        {/* LIST */}
                        <div className="space-y-4">

                            {data.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex gap-4 items-start">

                                        {/* ICON */}
                                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                                            <img src={item.icon} alt="icon" className="w-12 h-12 object-contain" />
                                        </div>

                                        {/* TEXT */}
                                        <div>
                                            <h4 className="font-semibold text-lg text-black mb-1">
                                                {item.title}
                                            </h4>

                                            {/* RENDER LOGIC */}
                                            {item.type === "steps" && (
                                                <ul className="space-y-2 mt-2">
                                                    {item.list.map((point, i) => (
                                                        <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                                                            <span className="text-orange-500 font-bold">✓</span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {item.type === "pills" && (
                                                <div className="flex flex-wrap gap-3 mt-3">
                                                    {item.list.map((point, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold"
                                                        >
                                                            {point}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {item.type === "text" && (
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <div className="rounded-[32px] overflow-hidden">
                            <img
                                src={data.image}
                                alt="Admission"
                                className="w-full h-[600px] lg:h-[720px] object-contain"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}