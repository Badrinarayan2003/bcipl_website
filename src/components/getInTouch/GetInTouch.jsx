import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { sendLead } from "../../services/api/sendLead";

export default function GetInTouch() {
    const [contactData, setContactData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState({ type: "", text: "" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
        setResponseMsg({ type: "", text: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Required validation
        if (!contactData.name || !contactData.phone || !contactData.email || !contactData.address) {
            setResponseMsg({ type: "error", text: "All fields are required" });
            return;
        }

        // Phone validation
        if (!phoneRegex.test(contactData.phone)) {
            setResponseMsg({ type: "error", text: "Please enter a valid 10-digit phone number" });
            return;
        }

        // Email validation
        if (!emailRegex.test(contactData.email)) {
            setResponseMsg({ type: "error", text: "Please enter a valid email address" });
            return;
        }

        setLoading(true);
        setResponseMsg({ type: "", text: "" });

        const payload = {
            name: contactData.name,
            mobNumber: contactData.phone,
            email: contactData.email,
            address: contactData.address,
            courseName: "General Enquiry",
            educationLevel: "Not Provided",
            message: "Get In Touch Form",
        };
        console.log(payload, "payload")

        try {
            const res = await sendLead(payload);

            if (res.code === 0) {
                setResponseMsg({ type: "success", text: res.message });
                setContactData({ name: "", phone: "", email: "", address: "" });
            } else {
                setResponseMsg({ type: "error", text: res.message });
            }
        } catch (error) {
            const errMsg =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong";

            setResponseMsg({ type: "error", text: errMsg });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: MAP */}
                    <div className="w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow">
                        <iframe
                            title="BCIPL Location"
                            src="https://www.google.com/maps?q=Kolkata&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* RIGHT: FORM */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Get in Touch
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Have questions? Our team will get back to you.
                        </p>

                        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={contactData.name}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone No"
                                value={contactData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                            />

                            <input
                                type="text"
                                name="email"
                                placeholder="Email ID"
                                value={contactData.email}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={contactData.address}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                            />

                            {responseMsg.text && (
                                <p
                                    className={`text-sm ${responseMsg.type === "success"
                                        ? "text-green-600"
                                        : "text-red-600"
                                        }`}
                                >
                                    {responseMsg.text}
                                </p>
                            )}

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="relative mt-8 w-full bg-secondary text-white py-3 rounded-full cursor-pointer font-semibold transition hover:opacity-90 disabled:opacity-60 flex items-center justify-center"
                            >
                                {/* Center Content */}
                                <span className="flex items-center gap-2">
                                    {loading && (
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    )}
                                    <span>
                                        {loading ? "Submitting..." : "Send Message"}
                                    </span>
                                </span>

                                {/* Right Icon */}
                                <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
                                    <ArrowUpRight size={18} />
                                </span>
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}





































// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// export default function GetInTouch() {
//     return (
//         <section className="w-full py-20 px-4 bg-white">
//             <div className="max-w-7xl mx-auto">

//                 <div className="grid lg:grid-cols-2 gap-12 items-center">

//                     {/* LEFT: MAP */}
//                     <div className="w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow">
//                         <iframe
//                             title="BCIPL Location"
//                             src="https://www.google.com/maps?q=Kolkata&output=embed"
//                             className="w-full h-full border-0"
//                             loading="lazy"
//                         ></iframe>
//                     </div>

//                     {/* RIGHT: FORM */}
//                     <div>
//                         <h2 className="text-3xl md:text-4xl font-bold text-black">
//                             Get in Touch
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             Have questions? Our team will get back to you.
//                         </p>

//                         <form className="mt-10 space-y-6">

//                             {/* Input */}
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Your Name"
//                                     className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
//                                 />
//                             </div>

//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Phone No"
//                                     className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
//                                 />
//                             </div>

//                             <div>
//                                 <input
//                                     type="email"
//                                     placeholder="Email ID"
//                                     className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
//                                 />
//                             </div>

//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Address"
//                                     className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
//                                 />
//                             </div>

//                             {/* Button */}
//                             <button
//                                 type="submit"
//                                 className="relative mt-8 w-full bg-secondary text-white py-3 rounded-full cursor-pointer font-semibold transition hover:opacity-90"
//                             >
//                                 {/* Center Text */}
//                                 <span className="block text-center">
//                                     Send Message
//                                 </span>

//                                 {/* Right Icon */}
//                                 <span
//                                     className="
//       absolute right-2 top-1/2 -translate-y-1/2
//       bg-white text-black w-8 h-8 rounded-full
//       flex items-center justify-center
//     "
//                                 >
//                                     <ArrowUpRight size={18} />
//                                 </span>
//                             </button>


//                         </form>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }
