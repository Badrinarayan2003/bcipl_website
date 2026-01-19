import React from "react";
import { GraduationCap, Trophy, BadgeCheck, FileCheck } from "lucide-react";
import { star, stats_bg } from "../../assets/assets";

export default function StatsSection() {
    return (
        <section className="w-full py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative overflow-hidden rounded-[32px] p-8 lg:p-12"
                    style={{
                        background:
                            "linear-gradient(135deg, #0b1d4d 0%, #132f7a 50%, #0b1d4d 100%)",
                    }}
                >
                    {/* Top Right Decorative Shape */}
                    <img
                        src={star}
                        alt="Decoration"
                        className="absolute -top-10 right-30 w-[80px] md:w-[60px] lg:w-[80px] pointer-events-none select-none z-10"
                    />

                    {/* Overlay background image (optional) */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url(${stats_bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    <div className="relative grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div className="text-white">
                            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                                Transforming Careers <br />
                                with Proven Success
                            </h2>

                            <p className="mt-4 max-w-lg text-white/90">
                                These numbers reflect our commitment to guiding students toward
                                strong careers and real industry opportunities.
                            </p>

                            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-semibold flex items-center cursor-pointer gap-2 hover:scale-105 transition">
                                Enroll Now ↗
                            </button>
                        </div>

                        {/* RIGHT STATS GRID */}
                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-3 md:p-6 text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                <GraduationCap size={36} className="shrink-0" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">1125+</h3>
                                    <p className="text-white/80">Students</p>
                                </div>
                            </div>

                            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-3 md:p-6 text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                <Trophy size={36} className="shrink-0" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">91%</h3>
                                    <p className="text-white/80">Placement Success</p>
                                </div>
                            </div>

                            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-3 md:p-6 text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                <BadgeCheck size={36} className="shrink-0" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">75+</h3>
                                    <p className="text-white/80">Corporate Partners</p>
                                </div>
                            </div>

                            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-3 md:p-6 text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                <FileCheck size={36} className="shrink-0" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">1024</h3>
                                    <p className="text-white/80">Placements Secured</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Top Right Decorative Shape */}
                    <img
                        src={star}
                        alt="Decoration"
                        className="absolute -bottom-10 left-30 w-[80px] md:w-[60px] lg:w-[80px] pointer-events-none select-none z-10"
                    />

                </div>
            </div>
        </section>
    );
}