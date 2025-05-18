'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (<div className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden py-20">        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">            <div className="absolute inset-0"
            style={{
                background: `url('/pattern.svg') repeat center`,
                backgroundSize: '8px',
                opacity: 0.05
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

                    {/* CTA Button */}
                    <div className="mt-8">                        

                    </div>
                </div>

                {/* Image */}          <div className={`relative h-[400px] md:h-[450px] lg:h-[500px] transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>


                    <div className="relative h-full w-full z-10">
                        <Image
                            src="/img_1.png"
                            alt="TWCA Investment"
                            fill
                            style={{ objectFit: "contain" }}
                            className="object-cover rounded-2xl shadow-2xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10" />
                    </div>
                </div>
            </div>
        </div>
    </div >
    );
};

export default Banner;
