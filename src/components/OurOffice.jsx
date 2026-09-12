import Image from "next/image";

export default function OurOffice() {
    return (
        <section className="w-full bg-[#F8F5F2] py-20 lg:py-32 px-10 md:px-16 lg:px-28 xl:px-32 flex flex-col items-center text-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#596854] font-normal mb-8">
                Our Office
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-light text-[#2b2b2b] leading-tight tracking-tight mb-8">
                A Calm Space for Healing
            </h2>
            
            <p className="text-[#555] text-[15px] font-light leading-relaxed max-w-3xl mb-16">
                Located at <span className="font-medium">123th Street 45 W, Santa Monica, CA 90401</span>, 
                my physical practice is designed to be your sanctuary. Whether you prefer the grounding comfort of 
                <strong> in-person sessions</strong> or the flexibility of <strong>secure telehealth (hybrid)</strong>, 
                your safety, comfort, and absolute privacy are always my highest priorities from the moment we begin.
            </p>

            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
                {/* Image 1 */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] lg:h-[500px]">
                    <Image
                        src="/office1.jpeg"
                        alt="Therapy office interior"
                        fill
                        className="object-cover rounded-sm"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                
                {/* Image 2 */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] lg:h-[500px] mt-8 md:mt-16">
                    <Image
                        src="/office2.jpeg"
                        alt="Comfortable seating area"
                        fill
                        className="object-cover rounded-sm"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    );
}
