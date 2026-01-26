import React, { useState } from "react";
import { b, ef } from "../../assets/assets";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

export default function CourseEnrollment({ course }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        education: "",
    });

    const educationOptions = [
        "10th Pass",
        "12th Pass",
        "Graduate",
        "Post Graduate",
        "Other",
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            course: course.hero.title,
        };

        console.log("FORM SUBMIT DATA:", payload);
    };

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">

                {/* LEFT MAP */}
                <div className="rounded-3xl overflow-hidden h-[530px]">
                    <img
                        src={ef}
                        alt="image"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* RIGHT FORM */}
                <div>

                    <h2 className="text-3xl font-bold mb-6">Enrollment Form</h2>

                    {/* COURSE TITLE */}
                    <div className="flex items-center gap-2 text-orange-600 font-semibold mb-8">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src={b} alt="Mission" className="w-12 h-12 object-contain" />
                        </div>
                        <span className="text-lg">Course: {course.hero.title}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone No"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                                required
                            />
                        </div>

                        {/* Education */}
                        <div>
                            <select
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent"
                                required
                            >
                                <option value="">Select Education Level</option>
                                {educationOptions.map((opt, i) => (
                                    <option key={i} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="relative w-full mt-6 bg-[#0A1F66] text-white py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
                        >
                            {/* CENTER TEXT */}
                            <span className="block text-center">
                                Submit Enrollment Request
                            </span>

                            {/* RIGHT ICON */}
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
