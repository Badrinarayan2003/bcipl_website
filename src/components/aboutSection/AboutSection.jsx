import React from "react";
import { Target, Flag, CheckCircle, BadgeCheck } from "lucide-react";
import { about_img, india } from "../../assets/assets";

export default function AboutSection() {
    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE SIDE */}
                {/* LEFT IMAGE SIDE */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-3xl">
                        <img
                            src={about_img}
                            alt="About"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Cards */}

                    {/* Top Left */}
                    <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg px-5 py-4 text-center">
                        <h3 className="text-2xl font-bold text-secondary">75+</h3>
                        <p className="text-xs font-semibold">
                            CORPORATE<br />PARTNERS
                        </p>
                    </div>

                    {/* Middle Right */}
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-primary text-white rounded-2xl shadow-lg px-5 py-4 text-center">
                        <h3 className="text-2xl font-bold">1125+</h3>
                        <p className="text-xs">
                            SUCCESSFULLY<br />PLACED
                        </p>
                    </div>

                    {/* Bottom Left */}
                    <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl shadow-lg px-5 py-4 text-center">
                        <h3 className="text-2xl font-bold">1178+</h3>
                        <p className="text-xs">
                            STUDENTS<br />MENTORED
                        </p>
                    </div>

                    {/* Bottom Right */}
                    <div className="absolute -bottom-6 right-10 bg-white rounded-2xl shadow-lg px-5 py-4 text-center">
                        <h3 className="text-2xl font-bold text-secondary">85%</h3>
                        <p className="text-xs">PLACEMENT</p>
                    </div>
                </div>


                {/* RIGHT CONTENT */}
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black">
                        Who We Are?
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        BCIPL empowers individuals from humble beginnings to Upgrade their
                        dreams, Upskill with confidence, and Uplift their lives. We bridge
                        opportunity gaps through career-focused training, nurturing ambition,
                        and guiding youth toward success. With industry-aligned programs,
                        BCIPL transforms aspirations into achievements lighting up every
                        corner of India with opportunity.
                    </p>

                    {/* Mission */}
                    <div className="mt-8 flex gap-4">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                                <Target />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Mission</h4>
                            <p className="text-gray-600 mt-1">
                                BCIPL exists to nurture ambition, bridge opportunity gaps, and
                                guide the youth of humble backgrounds toward sustainable success
                                and a better life.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="mt-6 flex gap-4">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                                <Flag />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Vision</h4>
                            <p className="text-gray-600 mt-1">
                                To light up every corner of India with opportunity enabling
                                individuals from humble beginnings to Upgrade their dreams,
                                Upskill with confidence, and Uplift their families and
                                communities.
                            </p>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-10 bg-orange-50 rounded-2xl p-5 flex items-center gap-4">
                        <div className="relative w-14 h-14 shrink-0">
                            <img
                                src={india}
                                alt="India"
                                className="w-14 h-14 rounded-full object-cover border border-white shadow"
                            />
                            <div className="absolute top-0 -right-1 bg-white rounded-full p-0 shadow">
                                <BadgeCheck size={19} className="text-secondary" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-1 text-primary text-lg">★★★★★</div>
                            <h4 className="font-bold">Trusted by India's Top Institutions</h4>
                            <p className="text-sm text-gray-600">
                                Join our growing community of finance professionals
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
