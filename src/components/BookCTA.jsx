import Image from "next/image";

export default function BookCTA() {
    return (
        <section className="w-full bg-[#EAEFE9] flex flex-col lg:flex-row items-center overflow-hidden min-h-125">
            <div className="hidden lg:flex w-[14%] shrink-0 self-stretch py-25 relative">
                <div className="relative w-full h-full">
                    <Image
                        src="/linen.jpg"
                        alt="Linen texture"
                        fill
                        sizes="14vw"
                        className="object-cover object-right"
                    />
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 md:px-16 lg:px-20 xl:px-28 py-20">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#2B2B2B] font-normal mb-10">
                    Schedule a Consultation
                </p>

                <h2 className="text-3xl md:text-[42px] font-serif font-light text-[#2b2b2b] leading-tight tracking-tight mb-10 max-w-120">
                    Find a space where you can finally{" "}
                    <span className="italic text-[#596854]">heal.</span>
                </h2>

                <p className="text-[#2B2B2B] text-[14px] font-normal leading-relaxed max-w-115 mb-4">
                    Coming to therapy is a courageous decision, and connecting
                    with the right kind of therapist makes all the difference. I
                    understand that your journey is personal, and I&apos;m here
                    to support you with care and understanding every step of the
                    way. I bring dedicated expertise in anxiety and trauma
                    recovery to support you in your struggles. I want you to
                    feel prioritized, understood, and empowered.
                </p>

                <p className="text-[#2B2B2B] text-[14px] font-normal leading-relaxed max-w-115 mb-12">
                    Click the button below to schedule your first appointment.
                </p>

                <div>
                    <a
                        href="#book"
                        className="inline-block px-8 py-3 rounded-full border border-[#2b2b2b] text-[11px] tracking-[0.2em] uppercase text-[#2b2b2b] font-normal hover:bg-[#596854] hover:text-white hover:border-[#596854] transition duration-300"
                    >
                        Book Now
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-[36%] shrink-0 self-stretch py-20 relative">
                <div className="relative w-full h-full min-h-87.5">
                    <Image
                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
                        alt="Minimalist therapy space"
                        fill
                        sizes="(max-width: 1024px) 100vw, 36vw"
                        className="object-cover object-left"
                    />
                </div>
            </div>
        </section>
    );
}
