import Image from "next/image";

export default function About() {
   return (
      <section className="w-full flex flex-col lg:flex-row items-center overflow-hidden py-16 lg:py-24">
         <div className="w-full lg:w-[65%] xl:w-[68%] flex flex-col justify-center pl-10 md:pl-16 lg:pl-28 xl:pl-32 pr-10 lg:pr-24 z-10 py-10">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-light text-[#2B2B2B] leading-[1.3] mb-12 lg:mb-20 tracking-tight">
               You&apos;re holding onto hope that life can be{" "}
               <br className="hidden md:block" />
               better than it is right now.
            </h2>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-10 text-[#2B2B2B] text-[15px] leading-relaxed font-normal">
               <div className="w-full md:w-[50%] flex flex-col items-start">
                  <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#596854] leading-loose mb-4">
                     At Dr. Maya Reynolds Therapy, I Want to Make That Hope a
                     Reality.
                  </p>
                  <p className="text-[13.5px]">
                     Whether you’re seeking personal growth, looking to work
                     through your trauma, or trying to navigate chronic burnout,
                     I provide a compassionate and safe space to help you find
                     your balance again and navigate life’s challenges.
                  </p>
               </div>

               <div className="w-full md:w-[48%] flex flex-col">
                  <p className="mb-6 text-[13.5px]">
                     First and foremost, I believe what you’re going through is
                     real, valid, and worthy of support. I offer clients in the
                     Santa Monica area and across CA an environment to discover
                     peace and a deeper sense of self in the midst of their
                     struggles. <br></br>
                     As we tap into the power of connection and understanding,
                     you can find your footing again and take a transformative
                     path forward.
                  </p>
               </div>
            </div>
         </div>

         <div className="w-full h-[400px] md:h-[500px] lg:h-[550px] lg:w-[35%] xl:w-[32%] relative z-0 mt-8 lg:mt-0">
            <Image
               src="/maya.png"
               alt="Dr. Maya Reynolds, PsyD"
               fill
               sizes="(max-width: 1024px) 100vw, 35vw"
               className="object-cover object-[center_15%] lg:rounded-l-lg"
            />
         </div>
      </section>
   );
}
