import React from "react";
import { call, mail, whatsapp } from "../../assets/assets";

export default function FloatingActions() {
    const actions = [
        {
            img: call,
            link: "tel:+919999999999",
            alt: "Call",
        },
        {
            img: mail,
            link: "mailto:info@example.com",
            alt: "Mail",
        },
        {
            img: whatsapp,
            link: "/contact",
            alt: "Contact",
        },
    ];

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col gap-3">
                {actions.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md transition-all duration-300 hover:bg-primary hover:scale-110"
                    >
                        <img
                            src={item.img}
                            alt={item.alt}
                            className="w-5 h-5 object-contain"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}