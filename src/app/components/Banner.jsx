'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const feedbackImages = [
    '/feedback-1.png',
    '/feedback-2.png',
    '/feedback-3.png',
];

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (<div className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden py-20">        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">            <div className="absolute inset-0"
            style={{
                background: `url('/pattern.svg') repeat center`,
                backgroundSize: '8px',
                opacity: 0.01
            }}
        />

        </div>

        {/* Content */}
        <div className="container mx-auto px-[10%] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                        Welcome to TWCA
                    </h1>

                    <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
                        <p className="text-lg md:text-xl leading-relaxed">
                            We focus on helping you truly understand the importance of a setup — the logic behind every trade — and how to execute it consistently across various market conditions.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed">
                            With structured guidance, practical learning, and real-time support, we ensure your stock market journey becomes easy, simple, and stress-free.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed">
                            This is not just about trades — it's about building confidence, discipline, and independence in your trading approach. Let TWCA be your partner in long-term market success. 💼
                        </p>
                    </div>

                </div>

                {/* Image */}          <div className={`relative h-[400px] md:h-[450px] lg:h-[500px] transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>

                    <div className="relative h-full w-full z-10">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: -1 }}>
                            <defs>
                                <clipPath id="bannerClip">
                                    <path d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
        c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
        c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
        c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"/>
    <path d="M373.8,89.9c2.7-4.9,14.3-24.5,37.4-30.2c5.6-1.4,18.5-4.6,30.9,2.2c18.8,10.2,20,33.9,20.2,38.1c0.1,3.2,0.6,21.6-8.6,25.9
        c-6.9,3.3-13-4.5-24.5-1.4c-7.4,1.9-7.1,5.7-13.7,7.9c-12.5,4.2-32-3.2-39.6-18.7C371.2,103.7,372.8,94,373.8,89.9z"/>
    <path d="M432.1,133.8c-4.2,1.6-9.3,6-8.6,10.8c0.7,5.5,8.7,9.2,15.1,7.9c6.7-1.4,12.4-8.5,10.8-13.7
        C447.7,133.4,438.5,131.3,432.1,133.8z"/>
                                </clipPath>
                            </defs>

                            <rect width="600" height="500" fill="#e0e7ef" clipPath="url(#bannerClip)" />
                        </svg>
                        <div>
                            <Image
                                src="/img_1.png"
                                alt="TWCA Investment"
                                fill
                                style={{ objectFit: "contain" }}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Feedback Section */}
            <div className="mt-20">
                <div className="relative flex flex-col items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 text-center">What Our Customers Say</h2>
                    <span className="block w-[20vw] h-20 mt-[-20px]">
                        <img src="/border-bottom-2.png" alt="Section underline" className="w-full h-full object-fit select-none pointer-events-none" draggable="false" />
                    </span>
                </div>
                <div className="relative max-w-xl mx-auto">
                    <div className="overflow-hidden rounded-2xl bg-transparent">
                        <div className="flex items-center justify-center h-40 md:h-40 transition-all duration-700">
                            <Image
                                src={feedbackImages[current]}
                                alt={`Customer Feedback ${current + 1}`}
                                width={400}
                                height={320}
                                className="object-contain h-full w-auto"
                                priority
                            />
                        </div>
                        {/* Slide Controls */}
                        <div className="flex justify-center gap-3 py-4">
                            {feedbackImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`h-3 w-3 rounded-full border-2 border-primary-600 dark:border-primary-400 transition-all duration-300 ${current === idx ? 'bg-primary-600 dark:bg-primary-400 scale-130' : 'bg-transparent'}`}
                                    onClick={() => setCurrent(idx)}
                                    aria-label={`Go to feedback ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    );
};



export default Banner;
