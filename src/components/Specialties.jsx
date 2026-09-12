import { specialties } from "../data/specialtiesData";

export default function Specialties() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col lg:flex-row items-center pt-16 lg:pt-24">
                <div
                    className="w-full lg:w-[52%] min-h-95 lg:min-h-110"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1400&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <div className="w-full lg:w-[48%] flex items-center justify-center px-10 lg:px-16 xl:px-24 py-16 lg:py-0">
                    <p className="text-[#2B2B2B] text-[30px] md:text-[35px] font-serif font-light leading-[1.6] tracking-tight max-w-105">
                        Honoring where you&apos;ve been{" "}
                        <span className="italic text-[#596854]">&amp;</span>{" "}
                        helping shape where you&apos;re headed.
                    </p>
                </div>
            </div>

            <div className="px-10 md:px-16 lg:px-28 xl:px-32 py-20 lg:py-28">
                <h2 className="text-3xl md:text-[38px] font-serif font-light text-[#2B2B2B] leading-[1.3] tracking-tight mb-16 lg:mb-20">
                    My{" "}
                    <span className="italic text-[#596854]">specialties</span>{" "}
                    include...
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-14">
                    {specialties.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <h3 className="text-[15px] font-normal text-[#596854] mb-4 tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-[#2B2B2B] text-[15px] font-normal leading-[1.75] mb-6">
                                {item.description}
                            </p>
                            <a
                                href="#"
                                className="text-[10px] tracking-[0.2em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-1 w-fit font-normal hover:text-[#596854] hover:border-[#070b0b] transition duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
