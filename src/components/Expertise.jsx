const leftItems = [
    "Generalized Anxiety",
    "Panic Attacks",
    "PTSD & Trauma",
    "Burnout Recovery",
    "Imposter Syndrome",
    "Life Transitions",
];

const rightItems = [
    "Perfectionism",
    "Chronic Stress",
    "Depression",
    "Self-Esteem",
    "Boundary Setting",
    "And More",
];

export default function Expertise() {
    return (
        <section className="w-full bg-white py-24 px-8 md:px-16 lg:px-28 xl:px-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-[30%] shrink-0 flex items-start pt-1">
                    <h2 className="text-3xl md:text-[36px] font-serif font-light text-[#2b2b2b] leading-[1.3] tracking-tight">
                        My areas of{" "}
                        <span className="italic text-[#596854]">focus</span>
                    </h2>
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-0">
                    <div className="flex-1">
                        {leftItems.map((item, i) => (
                            <div key={i}>
                                <p className="text-[11px] tracking-[0.2em] uppercase text-[#2b2b2b] font-normal py-4 hover:text-[#596854] transition-colors duration-200 cursor-pointer">
                                    {item}
                                </p>
                                <div className="border-b border-[#e0ddd8]" />
                            </div>
                        ))}
                    </div>

                    <div className="w-12 lg:w-20 shrink-0" />

                    <div className="flex-1">
                        {rightItems.map((item, i) => (
                            <div key={i}>
                                <p className="text-[11px] tracking-[0.2em] uppercase text-[#2b2b2b] font-normal py-4 hover:text-[#596854] transition-colors duration-200 cursor-pointer">
                                    {item}
                                </p>
                                <div className="border-b border-[#e0ddd8]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
