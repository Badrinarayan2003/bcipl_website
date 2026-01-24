import React from "react";
import { aboutBanner } from "../../assets/assets";

export default function AboutBanner() {
    return (
        <section className="w-full bg-white md:py-10 py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            About BCIPL
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-sm">
                            Bijoy Capital Institute of Professional Learning (BCIPL) was founded to empower individuals to understand, manage, and master finance in the digital era. Established by Mr. Bijoy Mondal, a veteran financial professional and multiple-time MDRT, COT, and TOT achiever, BCIPL is built on deep industry expertise.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-sm">
                            BCIPL is a premier training institution developing skilled professionals in the Financial & Tax Sector. We bridge the academic-industry gap through practical, career-focused programs. We are Eastern India's only institute pioneering "Real-Time Live Telecasting" with Smart Boards. Additionally, we provide one FREE SCHOLARSHIP per batch for a deserving student from a humble background.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md md:max-w-lg rounded-[28px] overflow-hidden">
                            <img
                                src={aboutBanner}
                                alt="About BCIPL"
                                className="w-full h-auto object-cover rounded-[22px]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
