import React from "react";
import {
    integrityImg,
    qualityImg,
    empowermentImg,
} from "../../assets/assets";

export default function CoreValues() {
    return (
        <section className="w-full bg-white py-10 md:py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
                    Our Core Values
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

                    {/* Card 1 */}
                    <div className="bg-[#F7F9FC] rounded-2xl p-8 relative overflow-hidden">

                        {/* Corner Shape with Image */}
                        <div className="absolute -top-16 -left-5 w-36 h-40 bg-primary rounded-br-[80px] flex items-end justify-center pt-4 ps-4 pe-4">
                            <img
                                src={integrityImg}
                                alt="Integrity"
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        <div className="relative z-10 pt-20">
                            <h3 className="text-xl font-bold mb-2">Integrity</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We stay committed to honesty and transparency in everything we teach.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#F7F9FC] rounded-2xl p-8 relative overflow-hidden">

                        {/* Corner Shape with Image */}
                        <div className="absolute -top-16 -left-5 w-36 h-40 bg-secondary rounded-br-[80px] flex items-end justify-center pt-4 ps-4 pe-4">
                            <img
                                src={qualityImg}
                                alt="Quality Training"
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        <div className="relative z-10 pt-20">
                            <h3 className="text-xl font-bold mb-2">Quality Training</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We ensure every student receives practical, real-world learning.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F7F9FC] rounded-2xl p-8 relative overflow-hidden">

                        {/* Corner Shape with Image */}
                        <div className="absolute -top-16 -left-5 w-36 h-40 bg-primary rounded-br-[80px] flex items-end justify-center pt-4 ps-4 pe-4">
                            <img
                                src={empowermentImg}
                                alt="Empowerment"
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        <div className="relative z-10 pt-20">
                            <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We believe the right guidance can transform lives and create leaders.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}