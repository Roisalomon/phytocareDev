import React from "react";

interface UIPageHeaderProps {
    title: string;
    breadcrumb: {
        parent: string;
        current: string;
    };
    image: string;
}

const UIPageHeader: React.FC<UIPageHeaderProps> = ({
    title,
    breadcrumb,
    image,
}) => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-[#f7f9f7] to-[#e9f3ee] px-[5%] ">
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                {/* LEFT CONTENT */}
                <div className="relative z-10">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
                        {title}
                        <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-yellow-300/70 -z-10 rounded-full"></span>
                    </h1>

                    {/* Breadcrumb */}
                    <div className="mt-6">
                        <span className="inline-flex items-center gap-2 bg-emerald-800 text-white px-6 py-3 rounded-lg text-sm font-medium shadow">
                            {breadcrumb.parent}
                            <span className="opacity-70">→</span>
                            {breadcrumb.current}
                        </span>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    {/* Decorative circle */}
                    <div className="absolute -right-10 -bottom-5 w-72 h-72">
                        <img
                            src="/assets/hero/hero-1-5.png"
                            alt="back"
                            className="relative z-10 w-full md:w-full md:h-full animate-spinSlower"
                        />
                    </div>

                    <img
                        src={image}
                        alt={title}
                        className="relative z-10 w-full max-w-xl rounded-2xl shadow-xl object-cover"
                    />
                </div>

            </div>

            {/* Decorative dots */}
            <div className="absolute top-10 left-10 grid grid-cols-4 gap-3 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                ))}
            </div>
        </section>
    );
};

export default UIPageHeader;
