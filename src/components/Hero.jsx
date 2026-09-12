import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[92vh] flex flex-col lg:flex-row items-stretch overflow-hidden bg-[#F8F5F2]">
            {/* Left Image */}
            <div className="relative w-full lg:w-[32%] h-[40vh] lg:h-auto shrink-0 z-0 lg:py-12">
                <Image
                    src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1200&auto=format&fit=crop"
                    alt="Peaceful ocean view"
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Thin Image on Right Edge (Desktop Only) */}
            <div className="hidden lg:block absolute right-0 top-[15%] w-[8%] h-[70%] z-0">
                <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop"
                    alt="Beach sand"
                    fill
                    sizes="8vw"
                    className="object-cover object-left"
                />
            </div>

            {/* Right Side / Text Container */}
            <div className="relative z-10 w-full lg:w-[68%] flex flex-col items-start justify-center pl-10 md:pl-16 lg:pl-16 xl:pl-20 pr-10 md:pr-16 lg:pr-32 xl:pr-40 py-16 lg:py-0">
                <div className="relative z-10 w-full max-w-200">
                    <p className="text-[10px] tracking-[0.25em] text-[#555] uppercase mb-8 lg:mb-10 font-normal leading-loose">
                        Online & In-Person Counseling In Santa Monica & Across CA
                    </p>

                    <h1 className="text-3xl md:text-4xl lg:text-[3.2vw] xl:text-[46px] font-serif font-light text-[#2b2b2b] leading-[1.3] mb-8 lg:mb-10 tracking-tight">
                        Find calm in the chaos, heal from your past, and reclaim your <span className="italic text-[#596854]">joy.</span>
                    </h1>

                    <p className="text-[#444] text-[14px] lg:text-[15px] font-light tracking-wide mb-10 lg:mb-14 max-w-lg leading-relaxed">
                        Specialized therapy for anxiety, trauma, and burnout.
                        Creating a safe space for you to pause, process, and
                        move forward.
                    </p>

                    <a
                        href="#book"
                        className="inline-block text-[11px] tracking-[0.2em] text-[#2b2b2b] uppercase border-b border-[#2b2b2b] pb-2 font-normal hover:text-[#596854] hover:border-[#596854] transition duration-300"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
