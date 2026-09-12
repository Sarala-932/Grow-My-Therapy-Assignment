import Image from "next/image";

export default function HowWeWork() {
    return (
        <section
            className="w-full flex flex-col lg:flex-row items-stretch overflow-hidden"
            style={{ backgroundColor: "#C8BBAE" }}
        >
            <div className="relative w-full lg:w-[65%] xl:w-[70%] flex flex-col justify-center pl-10 md:pl-16 lg:pl-28 xl:pl-32 pr-10 lg:pr-20 py-16 lg:py-24">
                <p className="absolute top-16 lg:top-32 text-[10px] tracking-[0.25em] uppercase text-[#000000] font-normal">
                    How I Work
                </p>

                <h2 className="mt-20 text-[28px] md:text-[34px] max-w-125 font-serif font-normal text-[#2B2B2B] leading-[1.3] tracking-tight mb-12">
                    I&apos;m here to help you find balance again.
                </h2>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 text-[#2B2B2B] text-[13px] font-light leading-[1.75]">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <p className="text-[12px] tracking-widest uppercase font-normal text-[#000000] leading-loose mb-5">
                            The clients I work with are balancing so many things
                            at once. It&apos;s often hard for them to put
                            themselves first.
                        </p>
                        <p className="text-[12px] font-normal text-[#000000]">
                            Here, your needs are always top priority. I take the
                            time to deeply listen in order to truly understand
                            your story and your struggles. I recognize that no
                            two people are the same and that personalized
                            therapy means an intentional, tailored approach. You
                            won&apos;t find anything
                            &ldquo;one-size-fits-all&rdquo; here. If you&apos;re
                            ready to do the work, I&apos;m ready to help.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2">
                        <p className="text-[12px] font-normal text-[#000000] leading-loose">
                            Sometimes I may gently challenge you to look at
                            things differently and other times we may explore
                            your emotions, all while encouraging you to practice
                            what you&apos;ve learned in your daily life. I take
                            what I do seriously because I know how important it
                            is for you to heal from what&apos;s hurting you,
                            discover a fulfilling life, and build meaningful
                            relationships. My goal is to walk alongside you in
                            this journey, offering support and guidance as you
                            uncover your strengths and embrace what the future
                            can hold for you.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <a
                        href="#"
                        className="text-[10px] tracking-[0.2em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-1 font-normal hover:text-[#596854] hover:border-[#596854] transition duration-300"
                    >
                        Learn More About My Approach
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-[35%] xl:w-[30%] flex items-stretch py-20 lg:py-30">
                <div className="relative w-[95%] lg:w-[90%] ml-auto h-87.5 sm:h-112.5 lg:h-150">
                    <Image
                        src="/how-we-work.jpg"
                        alt="Minimalist botanical branches representing growth"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/8 mix-blend-darken pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
