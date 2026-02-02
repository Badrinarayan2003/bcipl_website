import React from "react";
import { hdfcLogo, yesBankLogo, indian_bank } from "../../assets/assets"; // adjust path if needed

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
                <div className="grid md:grid-cols-2 gap-10 justify-center">


                    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/70 backdrop-blur-xl shadow-xl p-8">
                        <div className="relative flex items-center gap-4 mb-6">
                            <img
                                src={indian_bank}
                                alt="HDFC Bank"
                                className="h-15 w-auto object-contain"
                            />

                        </div>

                        <div className="relative space-y-3 text-slate-700">
                            <p><span className="font-semibold text-primary">Account Name:</span> BIJOY CAPITAL INSTITUTE OF PROFESSIONAL LEARNING</p>
                            <p><span className="font-semibold text-primary">Account Number:</span> 8211654264</p>
                            <p><span className="font-semibold text-primary">IFSC Code:</span> IDIB000B698</p>
                            <p><span className="font-semibold text-primary">Bank Address:</span> Rajarhat-700135</p>
                            <p><span className="font-semibold text-primary">Bank Name:</span> INDIAN BANK BATTALA BRANCH</p>
                            <p><span className="font-semibold text-primary">ACCOUNT TYPE :</span> CURRENT</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}