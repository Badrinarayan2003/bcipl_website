import React from "react";
import { hdfcLogo, yesBankLogo } from "../../assets/assets"; // adjust path if needed

export default function BCIPLPaymentDetails() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        BCIPL Payment Details
                    </h2>
                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Secure and transparent payment options for smooth admission and enrollment.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* HDFC BANK */}
                    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/70 backdrop-blur-xl shadow-xl p-8">

                        {/* Glow */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div> */}

                        {/* Header */}
                        <div className="relative flex items-center gap-4 mb-6">
                            <img
                                src={hdfcLogo}
                                alt="HDFC Bank"
                                className="h-15 w-auto object-contain"
                            />
                            {/* <h3 className="text-2xl font-bold text-slate-900">
                                HDFC Bank
                            </h3> */}
                        </div>

                        <div className="relative space-y-3 text-slate-700">
                            <p><span className="font-semibold text-primary">Account Name:</span> Mangalayatan University</p>
                            <p><span className="font-semibold text-primary">Account Number:</span> 50100343182627</p>
                            <p><span className="font-semibold text-primary">Swift Code:</span> HDFCINBB</p>
                            <p><span className="font-semibold text-primary">IFSC Code:</span> HDFC0003691</p>
                            <p><span className="font-semibold text-primary">Bank Address:</span> Aligarh – 202001 (Uttar Pradesh)</p>
                        </div>
                    </div>

                    {/* YES BANK */}
                    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/70 backdrop-blur-xl shadow-xl p-8">

                        {/* Glow */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div> */}

                        {/* Header */}
                        <div className="relative flex items-center gap-4 mb-6">
                            <img
                                src={yesBankLogo}
                                alt="Yes Bank"
                                className="h-13 w-auto object-contain"
                            />
                            {/* <h3 className="text-2xl font-bold text-slate-900">
                                Yes Bank
                            </h3> */}
                        </div>

                        <div className="relative space-y-3 text-slate-700">
                            <p><span className="font-semibold text-primary">Account Name:</span> Mangalayatan University</p>
                            <p><span className="font-semibold text-primary">Account Number:</span> 008894600001955</p>
                            <p><span className="font-semibold text-primary">IFSC Code:</span> YESB0000088</p>
                            <p><span className="font-semibold text-primary">Bank Address:</span> Mangalayatan University, Beswan (Aligarh) UP – 202145</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}