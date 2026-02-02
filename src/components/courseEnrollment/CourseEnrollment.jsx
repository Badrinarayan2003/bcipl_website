import React, { useState } from "react";
import { b, ef } from "../../assets/assets";
import { ArrowUpRight } from "lucide-react";
import { sendLead } from "../../services/api/sendLead";

export default function CourseEnrollment({ course }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        education: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState({ type: "", text: "" });

    const educationOptions = [
        "10th Pass",
        "12th Pass",
        "Graduate",
        "Post Graduate",
        "Other",
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setResponseMsg({ type: "", text: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Required validation
        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.address ||
            !formData.education
        ) {
            setResponseMsg({ type: "error", text: "All fields are required" });
            return;
        }

        // Phone validation
        if (!phoneRegex.test(formData.phone)) {
            setResponseMsg({ type: "error", text: "Please enter a valid 10-digit phone number" });
            return;
        }

        // Email validation
        if (!emailRegex.test(formData.email)) {
            setResponseMsg({ type: "error", text: "Please enter a valid email address" });
            return;
        }

        setLoading(true);
        setResponseMsg({ type: "", text: "" });

        const payload = {
            name: formData.name,
            mobNumber: formData.phone,
            email: formData.email,
            address: formData.address,
            courseName: course.hero.title,
            educationLevel: formData.education,
            message: "Course Form",
        };
        console.log(payload, 'payload')

        try {
            const res = await sendLead(payload);

            if (res.code === 0) {
                setResponseMsg({ type: "success", text: res.message });
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    address: "",
                    education: "",
                });
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
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">

                {/* LEFT IMAGE */}
                <div className="rounded-3xl overflow-hidden h-[530px]">
                    <img src={ef} alt="image" className="w-full h-full object-contain" />
                </div>

                {/* RIGHT FORM */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Enrollment Form</h2>

                    <div className="flex items-center gap-2 text-orange-600 font-semibold mb-8">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src={b} alt="Mission" className="w-12 h-12 object-contain" />
                        </div>
                        <span className="text-lg">Course: {course.hero.title}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:outline-none py-2"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone No"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:outline-none py-2"
                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="Email ID"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:outline-none py-2"
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:outline-none py-2"
                        />

                        <select
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent"
                        >
                            <option value="">Select Education Level</option>
                            {educationOptions.map((opt, i) => (
                                <option key={i} value={opt}>{opt}</option>
                            ))}
                        </select>

                        {responseMsg.text && (
                            <p className={`text-sm ${responseMsg.type === "success" ? "text-green-600" : "text-red-600"}`}>
                                {responseMsg.text}
                            </p>
                        )}


                        <button
                            type="submit"
                            disabled={loading}
                            className="relative w-full mt-6 bg-[#0A1F66] text-white py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer disabled:opacity-60 flex items-center justify-center"
                        >
                            {/* Center Content */}
                            <span className="flex items-center gap-2">
                                {loading && (
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                )}
                                <span>
                                    {loading ? "Submitting..." : "Submit Enrollment Request"}
                                </span>
                            </span>

                            {/* Right Icon */}
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#0A1F66] w-9 h-9 flex items-center justify-center rounded-full">
                                <ArrowUpRight size={20} />
                            </span>
                        </button>


                    </form>
                </div>

            </div>
        </section>
    );
}










































// import React, { useState } from "react";
// import { b, ef } from "../../assets/assets";
// import { ArrowUpRight, MoveUpRight } from "lucide-react";

// export default function CourseEnrollment({ course }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         address: "",
//         education: "",
//     });

//     const educationOptions = [
//         "10th Pass",
//         "12th Pass",
//         "Graduate",
//         "Post Graduate",
//         "Other",
//     ];

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const payload = {
//             ...formData,
//             course: course.hero.title,
//         };

//         console.log("FORM SUBMIT DATA:", payload);
//     };

//     return (
//         <section className="py-24 px-6 bg-white">
//             <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">

//                 {/* LEFT MAP */}
//                 <div className="rounded-3xl overflow-hidden h-[530px]">
//                     <img
//                         src={ef}
//                         alt="image"
//                         className="w-full h-full object-contain"
//                     />
//                 </div>

//                 {/* RIGHT FORM */}
//                 <div>

//                     <h2 className="text-3xl font-bold mb-6">Enrollment Form</h2>

//                     {/* COURSE TITLE */}
//                     <div className="flex items-center gap-2 text-orange-600 font-semibold mb-8">
//                         <div className="w-10 h-10 flex items-center justify-center shrink-0">
//                             <img src={b} alt="Mission" className="w-12 h-12 object-contain" />
//                         </div>
//                         <span className="text-lg">Course: {course.hero.title}</span>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-6">

//                         {/* Name */}
//                         <div>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full border-b border-gray-400 focus:outline-none py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Phone */}
//                         <div>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="Phone No"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="w-full border-b border-gray-400 focus:outline-none py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Email */}
//                         <div>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email ID"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full border-b border-gray-400 focus:outline-none py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Address */}
//                         <div>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 placeholder="Address"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                                 className="w-full border-b border-gray-400 focus:outline-none py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Education */}
//                         <div>
//                             <select
//                                 name="education"
//                                 value={formData.education}
//                                 onChange={handleChange}
//                                 className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent"
//                                 required
//                             >
//                                 <option value="">Select Education Level</option>
//                                 {educationOptions.map((opt, i) => (
//                                     <option key={i} value={opt}>
//                                         {opt}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* SUBMIT BUTTON */}
//                         <button
//                             type="submit"
//                             className="relative w-full mt-6 bg-[#0A1F66] text-white py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
//                         >
//                             {/* CENTER TEXT */}
//                             <span className="block text-center">
//                                 Submit Enrollment Request
//                             </span>

//                             {/* RIGHT ICON */}
//                             <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#0A1F66] w-9 h-9 flex items-center justify-center rounded-full">
//                                 <ArrowUpRight size={20} />
//                             </span>
//                         </button>


//                     </form>
//                 </div>

//             </div>
//         </section>
//     );
// }
