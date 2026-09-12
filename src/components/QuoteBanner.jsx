export default function QuoteBanner() {
    return (
        <section
            className="relative w-full h-105 overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2000&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center px-10">
                <div className="max-w-200 text-center">
                    <p className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-light leading-[1.6] tracking-wide">
                        You deserve a space where you can finally exhale without
                        judgment.
                        <span className="italic block mt-4 text-[#F4F0EB]">
                            There is no struggle too heavy for us to unpack
                            together.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
