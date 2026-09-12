import Image from "next/image";

import { helpCards as cards } from "../data/whoWeHelpData";

export default function WhoWeHelp() {
    return (
        <section className="w-full bg-[#EAEFE9] py-24 px-8 md:px-16 lg:px-28 xl:px-32">
            <div className="mb-16">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#777] font-normal mb-4">
                    Who I Help
                </p>
                <h2 className="text-3xl md:text-[38px] font-serif font-light text-[#2b2b2b] leading-[1.3] tracking-tight max-w-lg">
                    Support for your unique journey.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                {cards.map((card) => (
                    <div key={card.title} className="flex flex-col">
                        <div className="relative w-full h-80 mb-8 overflow-hidden">
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover object-center"
                            />
                        </div>

                        <h3 className="text-[13px] tracking-[0.2em] uppercase font-normal text-[#2b2b2b] mb-4">
                            {card.title}
                        </h3>
                        <p className="text-[#555] text-[15px] font-light leading-relaxed mb-6">
                            {card.description}
                        </p>

                        <a
                            href="#"
                            className="text-[11px] tracking-[0.2em] uppercase text-[#2b2b2b] border-b border-[#2b2b2b] pb-1 w-fit font-normal hover:text-[#596854] hover:border-[#596854] transition duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
