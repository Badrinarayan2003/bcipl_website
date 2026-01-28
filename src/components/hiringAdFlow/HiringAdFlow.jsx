import React from "react";

export default function HiringAdFlow() {
    return (
        <section className="pt-4 pb-20 bg-[#f7fbff]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">

                    {/* Header */}
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                        Advertisement: BCIPL Hiring Partners — Supported by Mangalayatan University
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-5xl mb-10">
                        BCIPL runs targeted employer advertising featuring the university's hiring partners to boost
                        student placement visibility. Employers can sponsor banner ads, run recruitment drives, or
                        post openings that reach our trained graduates.
                    </p>

                    {/* Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        <div className="text-center">
                            <div className="text-lg font-bold text-black mb-2">1. Sponsor</div>
                            <p className="text-gray-600 text-sm">
                                Book an advertising slot to showcase company & roles.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-lg font-bold text-black mb-2">2. Reach</div>
                            <p className="text-gray-600 text-sm">
                                Targeted campaigns to students and alumni.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-lg font-bold text-black mb-2">3. Drive</div>
                            <p className="text-gray-600 text-sm">
                                Drive applications & interviews through our portal.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-lg font-bold text-black mb-2">4. Hire</div>
                            <p className="text-gray-600 text-sm">
                                Convert pre-screened candidates into hires.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
