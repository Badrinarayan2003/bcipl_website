import React from "react";

export default function CourseHero({ hero }) {
    if (!hero) return null;

    return (
        <section className="pt-4 pb-10 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">

                {/* TITLE */}
                <h1 className="text-3xl sm:text-5xl font-bold text-black">
                    {hero.title}
                </h1>

                {/* SUBTITLE */}
                <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                    {hero.subtitle}
                </p>

                {/* DURATION PILLS */}
                <div className="flex justify-center flex-wrap gap-3 mt-6">
                    {hero.durations.map((d, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 rounded-full text-xs font-semibold
                         bg-orange-100 text-orange-600"
                        >
                            {d}
                        </span>
                    ))}
                </div>

                {/* IMAGE */}
                <div className="mt-5">
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={hero.image}
                            alt={hero.title}
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
