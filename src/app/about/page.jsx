import Image from 'next/image';
import { Metadata } from 'next';

export const metadata = {
    title: 'About Us | Trust Wealthy Capital Advisors',
    description: 'Learn more about Trust Wealthy Capital Advisors (TWCA), our mission, and our approach to empowering your financial journey.'
};

const About = () => (
    <div className="container mx-auto px-6 md:px-16 py-16 min-h-[80vh] flex flex-col items-start justify-center">

        <div className="flex flex-col md:flex-row-reverse items-center gap-16 max-w-5xl mx-auto justify-center w-full">
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 flex items-center justify-center">
                <Image
                    src="/profle.svg"
                    alt="Profile"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-full shadow-lg bg-white"
                    sizes="(max-width: 768px) 100vw, 320px"
                />
            </div>
            <div className="text-lg md:text-xl text-primary-600 dark:text-primary-400 leading-relaxed flex flex-col justify-center items-start w-full md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-8 text-left self-start">About Us</h1>
                <p className="mb-4">
                    At TWCA, we’re committed to helping you master the why behind every trade. Our focus is on developing a deep understanding of setups, sharpening your decision-making, and building the discipline to trade with consistency across all market conditions.
                </p>
                <p className="mb-4">
                    Through structured guidance, hands-on learning, and real-time support, we make your stock market journey clear, simple, and stress-free.
                </p>
                <p>
                    This isn’t just about placing trades — it’s about growing your confidence, developing independence, and achieving long-term success in the markets with TWCA by your side.
                </p>
            </div>
        </div>
    </div>
);

export default About;
