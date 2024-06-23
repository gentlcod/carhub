"use client"; 

import Image from "next/image";
import React from 'react';
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'auto' });
        }
    }

    return (
        <div className="hero">
            <div className="flex-1 pt-[115px] px-6">
                <h1 className="hero__title lg:ml-[40px] sm:ml-[65px]">
                    Find, book, <br /> or rent cars -<br /> Quickly and easily!
                </h1>

                <p className="hero__subtitle text-primary lg:ml-[40px] sm:ml-[65px]">
                    Streamline your car rental experience <br />
                    with our effortless booking process.
                </p>

                <div className="flex space-x-4 lg:ml-[40px] sm:ml-[65px] mt-10">
                    <button onClick={() => handleScroll('discover')}>
                        <CustomButton
                            title="Explore Cars"
                            containerStyles="bg-primary-blue text-white rounded-full"
                            btnType="button"
                        />
                    </button>

                    <button onClick={() => handleScroll('footer')}>
                        <CustomButton
                            title="Contact"
                            containerStyles="border border-[#2B59FF] text-primary rounded-full"
                            btnType="button"
                        />
                    </button>
                </div>
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image 
                        src="/hero.png" 
                        alt="hero" 
                        layout="fill"
                        className="object-contain mt-12"
                    />
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    )
}

export default Hero;
