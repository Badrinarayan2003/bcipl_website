import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section
            className="
        min-h-screen w-full
        flex items-center justify-center
        px-6
        bg-gradient-to-br from-orange-100 via-blue-50 to-cyan-100
        relative overflow-hidden
      "
        >
            {/* Decorative blur */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl">

                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none text-primary">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                    Page Not Found
                </h2>

                {/* Subtitle */}
                <p className="text-gray-700 mt-4 max-w-xl mx-auto text-lg">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

                    <button
                        onClick={() => navigate(-1)}
                        className="
              flex items-center justify-center gap-2
              px-8 py-4 rounded-full
              border-2 border-primary text-primary
              font-semibold hover:bg-white/40 transition cursor-pointer
            "
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="
              flex items-center justify-center gap-2
              px-8 py-4 rounded-full
              bg-primary text-white
              font-semibold hover:opacity-90 transition cursor-pointer
            "
                    >
                        <Home size={20} />
                        Go To Home
                    </button>

                </div>

            </div>
        </section>
    );
}