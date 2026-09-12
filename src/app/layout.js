import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata = {
    title: "Clone - Grow My Therapy",
    description: "Internship Assignment",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
