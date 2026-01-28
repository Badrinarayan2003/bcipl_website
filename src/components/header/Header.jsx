import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(null);


    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    // COURSE ROUTES
    const courses = [
        { label: "Banking Next Career Program", slug: "banking-next-career-program" },
        { label: "Mutual Fund Career Program", slug: "mutual-fund-career-program" },
        { label: "Insurance Xpert Career Program", slug: "insurance-xpert-career-program" },
        { label: "G.S.T & TAX Career Program", slug: "gst-tax-career-program" },
        { label: "Trade Xpert Career Program", slug: "trade-xpert-career-program" },
    ];

    // ABOUT SUBMENU
    const aboutMenu = [
        { label: "About Us", slug: "/about" },
        { label: "Accreditation", slug: "/about/accreditation" },
        { label: "Recruitments", slug: "/about/recruitments" },
        { label: "Workshop", slug: "/about/workshop" },
    ];

    // RESOURCES SUBMENU
    const resourcesMenu = [
        { label: "Announcements", slug: "/resources/announcements" },
        { label: "Scholarship", slug: "/resources/scholarship" },
        { label: "Admission", slug: "/resources/admission" },
        { label: "Payments Details", slug: "/resources/payments-details" },
    ];

    const Dropdown = ({ title, items }) => {
        return (
            <div className="relative group">
                <button className="flex items-center gap-1 cursor-pointer font-medium hover:text-primary transition">
                    {title}
                    <ChevronDown size={16} className="mt-0.5" />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-3">
                        {items.map((item, i) => (
                            <Link
                                key={i}
                                to={item.slug}
                                className="block px-4 py-2 font-semibold rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <header
            className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"
                }`}
        >

            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="h-20" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-7 bg-slate-100 px-8 py-3 rounded-full">
                    <Link to="/" className="text-primary cursor-pointer font-semibold">
                        Home
                    </Link>

                    <Dropdown title="About" items={aboutMenu} />
                    <Dropdown title="Courses" items={courses.map(c => ({
                        ...c,
                        slug: `/courses/${c.slug}`
                    }))} />
                    <Dropdown title="Recourses" items={resourcesMenu} />

                    <Link to="/contact" className="font-medium cursor-pointer hover:text-primary transition">
                        Contact Us
                    </Link>
                </div>

                {/* Right Button */}
                <div className="hidden lg:block">
                    <Link
                        to="https://nrichlearning.com/"
                        className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition"
                        target="_blank"
                    >
                        Student Login <ArrowUpRight size={18} />
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setMobileOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black/40 z-50 transition ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div
                    className={`absolute top-0 right-0 h-full w-[100%] bg-white p-6 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center mb-6">
                        <img src={logo} className="h-18" />
                        <button onClick={() => { setMobileOpen(false); setOpenMobileMenu(null); }}>
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-primary font-semibold">Home</Link>
                        <div>
                            <button
                                onClick={() =>
                                    setOpenMobileMenu(openMobileMenu === "about" ? null : "about")
                                }
                                className="w-full flex justify-between items-center font-medium"
                            >
                                About
                                <ChevronDown
                                    className={`transition-transform ${openMobileMenu === "about" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openMobileMenu === "about" ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                {aboutMenu.map((i, idx) => (
                                    <Link key={idx} to={i.slug} className="block">
                                        {i.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() =>
                                    setOpenMobileMenu(openMobileMenu === "courses" ? null : "courses")
                                }
                                className="w-full flex justify-between items-center font-medium"
                            >
                                Courses
                                <ChevronDown
                                    className={`transition-transform ${openMobileMenu === "courses" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openMobileMenu === "courses" ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                {courses.map((i, idx) => (
                                    <Link key={idx} to={`/courses/${i.slug}`} className="block">
                                        {i.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() =>
                                    setOpenMobileMenu(openMobileMenu === "resources" ? null : "resources")
                                }
                                className="w-full flex justify-between items-center font-medium"
                            >
                                Resources
                                <ChevronDown
                                    className={`transition-transform ${openMobileMenu === "resources" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openMobileMenu === "resources" ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                {resourcesMenu.map((i, idx) => (
                                    <Link key={idx} to={i.slug} className="block">
                                        {i.label}
                                    </Link>
                                ))}
                            </div>
                        </div>



                        <Link to="/contact">Contact Us</Link>

                        <Link
                            to="https://nrichlearning.com/"
                            className="mt-6 bg-primary text-white py-3 rounded-full text-center font-semibold"
                            target="_blank"
                        >
                            Student Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}