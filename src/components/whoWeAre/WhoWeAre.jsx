import React from "react";
import {
    studentImg,
    visionImg,
    missionImg,
    partnerImg,
    securedImg,
    placementImg
} from "../../assets/assets";


export default function WhoWeAre() {
    return (
        <section className="w-full bg-white py-10 md:py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Who We Are?
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-10 text-base md:text-sm">
                            BCIPL empowers individuals from humble beginnings to Upgrade their dreams, Upskill with confidence, and Uplift their lives. We bridge opportunity gaps through career-focused training, nurturing ambition, and guiding youth toward success. With industry-aligned programs, BCIPL transforms aspirations into achievements lighting up every corner of India with opportunity.
                        </p>

                        {/* Mission */}
                        <div className="flex gap-5 items-start mb-8">
                            <div className="w-14 h-14 flex items-center justify-center shrink-0">
                                <img src={visionImg} alt="Mission" className="w-12 h-12 object-contain" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-1">Our Mission</h4>
                                <p className="text-gray-600 text-sm">
                                    BCIPL exists to nurture ambition, bridge opportunity gaps, and guide the youth of humble backgrounds toward sustainable success and a better life.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex gap-5 items-start">
                            <div className="w-14 h-14 flex items-center justify-center shrink-0">
                                <img src={missionImg} alt="Vision" className="w-12 h-12 object-contain" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-1">Our Vision</h4>
                                <p className="text-gray-600 text-sm">
                                    To light up every corner of India with opportunity enabling individuals from humble beginnings to Upgrade their dreams, Upskill with confidence, and Uplift their families and communities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STATS GRID */}
                    <div className="relative">

                        <div className="grid grid-cols-1 sm:grid-cols-2">

                            {/* Box 1 */}
                            <div className="p-8 flex gap-7 justify-start md:justify-evenly items-center border-b sm:border-b sm:border-r border-orange-200">
                                <img src={studentImg} className="w-15 h-15 object-contain" />
                                <div>
                                    <div className="text-3xl font-bold text-[#092471]">1125+</div>
                                    <div className="font-medium">Students</div>
                                </div>
                            </div>

                            {/* Box 2 */}
                            <div className="p-8 flex gap-7 justify-start md:justify-evenly items-center border-b border-orange-200">
                                <img src={placementImg} className="w-15 h-15 object-contain" />
                                <div>
                                    <div className="text-3xl font-bold text-[#092471]">91%</div>
                                    <div className="font-medium">Placement Success</div>
                                </div>
                            </div>

                            {/* Box 3 */}
                            <div className="p-8 flex gap-7 justify-start md:justify-evenly items-center border-b sm:border-b-0 sm:border-r border-orange-200">
                                <img src={securedImg} className="w-15 h-15 object-contain" />
                                <div>
                                    <div className="text-3xl font-bold text-[#092471]">75+</div>
                                    <div className="font-medium">Corporate Partners</div>
                                </div>
                            </div>

                            {/* Box 4 */}
                            <div className="p-8 flex gap-7 justify-start md:justify-evenly items-center">
                                <img src={partnerImg} className="w-15 h-15 object-contain" />
                                <div>
                                    <div className="text-3xl font-bold text-[#092471]">1024</div>
                                    <div className="font-medium">Placements Secured</div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
