import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  X,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  Linkedin
} from "lucide-react";
import { star } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";



export default function Footer() {
  const navigate = useNavigate();




  return (
    <footer
      className="relative bg-[#263277] overflow-hidden"
    >

      {/* Top Right Decorative Shape */}
      <img
        src={star}
        alt="Decoration"
        className="absolute -top-10 right-30 w-[80px] md:w-[60px] lg:w-[80px] pointer-events-none select-none z-10"
      />

      {/* Overlay */}
      <div className="bg-white/90 border-none">

        {/* TOP CTA */}
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black max-w-xl leading-tight">
              Transforming careers in <br />
              Professional Skills since 2015
            </h2>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-primary hover:text-white transition"
                onClick={() => navigate("/contact")}
              >
                <GraduationCap size={18} />
                Enroll Now
              </button>

              <button className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-primary hover:text-white transition"
                onClick={() => navigate("/courses/banking-next-career-program")}
              >
                <BookOpen size={18} />
                Courses
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-black">Follow Us:</span>
            <div className="flex gap-4 text-xl text-black">
              <a
                href="https://www.facebook.com/profile.php?id=61584585207658"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary cursor-pointer"
              >
                <Facebook />
              </a>

              <a
                href="https://www.instagram.com/bcipl_learning/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary cursor-pointer"
              >
                <Instagram />
              </a>

              <a
                href="https://www.youtube.com/@bijoymondal5265"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary cursor-pointer"
              >
                <Youtube />
              </a>

              <a
                href="https://www.linkedin.com/company/bci-professional-learning/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary cursor-pointer"
              >
                <Linkedin />
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-black/10" />
        </div>

        {/* LINKS GRID */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link
                  to="/courses/banking-next-career-program"
                  className="hover:text-primary cursor-pointer transition"
                >
                  Banking Next Career Program
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/mutual-fund-career-program"
                  className="hover:text-primary cursor-pointer transition"
                >
                  Mutual Fund Career Program
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/insurance-xpert-career-program"
                  className="hover:text-primary cursor-pointer transition"
                >
                  Insurance Xpert Career Program
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/gst-tax-career-program"
                  className="hover:text-primary cursor-pointer transition"
                >
                  G.S.T & TAX Career Program
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/trade-xpert-career-program"
                  className="hover:text-primary cursor-pointer transition"
                >
                  Trade Xpert Career Program
                </Link>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/about" className="hover:text-primary cursor-pointer transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary cursor-pointer transition">Career with us</Link></li>
              <li><Link to="/contact" className="hover:text-primary cursor-pointer transition">Contact</Link></li>
              <li><Link to="/faqs" className="hover:text-primary cursor-pointer transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h4 className="font-bold mb-4">Legals</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-primary cursor-pointer transition">Refund & Cancellation Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary cursor-pointer transition">Website disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary cursor-pointer transition">Student Enrollment Agreement</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary cursor-pointer transition">Website Code of Conduct</Link></li>
            </ul>
          </div>

          {/* Terms */}
          <div> <h4 className="font-bold mb-4">Terms and Policies</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-primary cursor-pointer transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary cursor-pointer transition">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Information</h4>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex gap-3">
                <Phone className="text-primary" size={18} />
                <div>
                  <p className="font-semibold">Admissions Helpline</p>
                  <p>+91 9038468383</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-primary" size={18} />
                <div>
                  <p className="font-semibold">Email Support</p>
                  <p>info@bcipl.org</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-primary" size={18} />
                <div>
                  <p className="font-semibold">Experience Centre</p>
                  <p>
                    Amp Vaisaakkhi Mall, 4th Floor, 402, AG Block-112, Sector-II, Bidhannagar, Salt Lake City, Kolkata-700091
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} MR2K Solutions. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
