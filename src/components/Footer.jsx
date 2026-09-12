export default function Footer() {
    return (
        <footer className="w-full bg-white">
            <div className="px-10 md:px-16 lg:px-28 xl:px-32 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                <div className="lg:col-span-1">
                    <h2 className="font-serif font-light text-[#2b2b2b] text-[34px] leading-[1.15] mb-1">
                        Dr. Maya Reynolds
                    </h2>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#596854] font-medium mb-5 mt-2">
                        Therapy & Counseling
                    </p>
                    <p className="text-[#666] text-[13px] font-light leading-relaxed">
                        I want to make getting started simple. You&apos;re
                        welcome to come into my{" "}
                        <a href="#" className="underline text-[#596854]">
                            office in Santa Monica
                        </a>{" "}
                        or schedule virtual appointments from{" "}
                        <a href="#" className="underline text-[#596854]">
                            anywhere in CA
                        </a>
                        &mdash;whatever works best for you.
                    </p>
                </div>

                <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#2b2b2b] font-normal mb-6">
                        Navigate
                    </p>
                    <ul className="space-y-3">
                        {["Home", "About", "Services", "FAQs", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#596854] text-[13px] font-normal hover:underline"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ),
                        )}
                    </ul>
                </div>

                <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#2b2b2b] font-normal mb-6">
                        My Specialties
                    </p>
                    <ul className="space-y-3">
                        {[
                            "Anxiety & Stress",
                            "Trauma & PTSD",
                            "Burnout Recovery",
                            "Imposter Syndrome",
                            "Life Transitions",
                            "Perfectionism",
                        ].map((name) => (
                            <li key={name}>
                                <a
                                    href="#"
                                    className="text-[#596854] text-[13px] font-normal hover:underline"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#2b2b2b] font-normal mb-6">
                        Contact
                    </p>
                    <div className="text-[#596854] text-[13px] font-normal leading-relaxed space-y-1">
                        <p>123 Ocean Avenue</p>
                        <p>Suite 400</p>
                        <p>Santa Monica, CA 90401</p>
                        <a
                            href="mailto:hello@drmayareynolds.com"
                            className="block text-[#596854] font-normal hover:underline mt-3"
                        >
                            hello@drmayareynolds.com
                        </a>
                        <p className="mt-1">310.555.0198</p>
                        <p className="mt-4 text-[12px] text-[#596854]">
                            Serving Santa Monica, West Los Angeles, Venice,
                            &amp; all of California online.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#596854] py-3 px-10 md:px-16 lg:px-28 xl:px-32">
                <p className="text-white text-[11px] font-light tracking-wide">
                    Terms | Privacy Policy | Disclaimer | Website by Walker
                    Strategy Co.
                </p>
            </div>
        </footer>
    );
}
