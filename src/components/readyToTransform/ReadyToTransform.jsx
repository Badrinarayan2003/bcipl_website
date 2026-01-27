import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { cta_girl, cta_curves, star } from "../../assets/assets";

export default function ReadyToTransform() {
    return (
        <section className="w-full pb-10 pt-2 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Main Card */}
                <div className="relative overflow-hidden bg-primary rounded-[32px] md:rounded-[48px] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">


                    {/* Top Right Decorative Shape */}
                    <img
                        src={star}
                        alt="Decoration"
                        className="absolute -top-10 right-30 w-[80px] md:w-[60px] lg:w-[80px] pointer-events-none select-none z-10"
                    />

                    {/* Decorative white curve lines */}
                    <img
                        src={cta_curves}
                        alt="Decoration"
                        className="absolute right-0 top-0 h-full w-[60%] object-cover pointer-events-none opacity-90"
                    />
                    {/* Left Content */}
                    <div className="relative z-10 text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Ready to Transform <br /> Your Career?
                        </h2>

                        <p className="mt-4 max-w-md text-white/90 text-sm md:text-base">
                            Join thousands of professionals who have successfully transitioned
                            to high-paying careers in banking and financial services. Your
                            success story starts here.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="bg-secondary text-white px-6 py-3 rounded-full font-semibold flex cursor-pointer items-center gap-2 hover:opacity-90 transition">
                                Enroll Today <ArrowUpRight size={18} />
                            </button>

                            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center cursor-pointer gap-2 hover:bg-gray-100 transition">
                                Download Curriculum <Download size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative z-10 flex justify-center md:justify-end items-end h-full">
                        <img
                            src={cta_girl}
                            alt="Student"
                            className="max-h-[520px] md:max-h-[650px] lg:max-h-[720px] object-contain translate-y-13 "
                        />
                    </div>

                    {/* Top Right Decorative Shape */}
                    <img
                        src={star}
                        alt="Decoration"
                        className="absolute -bottom-10 left-20 w-[80px] md:w-[60px] lg:w-[80px] pointer-events-none select-none z-10"
                    />

                </div>
            </div>
        </section>
    );
}