import React from "react";
import { visionImg } from "../../assets/assets";
import { icons } from "lucide-react";

export default function LatestAnnouncements({ data }) {
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
                        <p className="text-gray-600 mt-2 mb-10">
                            {data.subtitle}
                        </p>

                        {/* LIST */}
                        <div className="space-y-6">

                            {data.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex gap-4 items-start">

                                        {/* ICON */}
                                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                                            <img src={item.icon} alt="Mission" className="w-12 h-12 object-contain" />
                                        </div>

                                        {/* TEXT */}
                                        <div>
                                            <h4 className="font-semibold text-lg text-black mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
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
                                alt="Announcements"
                                className="w-full h-[520px] lg:h-[600px] object-contain"
                            />
                        </div>


                    </div>

                </div>

            </div>
        </section>
    );
}
