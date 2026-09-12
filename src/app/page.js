import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import Specialties from "@/components/Specialties";
import OurOffice from "@/components/OurOffice";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <WhoWeHelp />
            <QuoteBanner />
            <Expertise />
            <HowWeWork />
            <Specialties />
            <OurOffice />
            <BookCTA />
            <Footer />
        </main>
    );
}
