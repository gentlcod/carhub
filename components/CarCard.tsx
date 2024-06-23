'use client'

import React, { useState } from 'react';
import { calculateCarRent } from '@/utils'; // Adjust import path as per your project structure
import { CarProps } from '@/types';
import Image from 'next/image';
import { CustomButton } from '.';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car } : CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  // Ensure city_mpg and year are treated as numbers
  const cityMpgNumber = typeof city_mpg === 'string' ? parseInt(city_mpg) : city_mpg;
  const yearNumber = typeof year === 'string' ? parseInt(year) : year;

  // Calculate car rent based on city_mpg and year
  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] text-primary font-extrabold">
        <span className="self-start text-[14px] text-primary font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] text-primary font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src='/carmodel.png'
          layout="fill"
          sizes="(max-width: 600px) 100vw, 600px"
          priority
          className="object-contain"
          alt="Car Logo"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] text-primary">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="tire"
            />
            <p className="text-[14px] text-primary">
              {drive ? drive.toUpperCase() : 'N/A'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="gas"
            />
            <p className="text-[14px] text-primary">
              {cityMpgNumber} MPG
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] font-bold leading-[17px]"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            btnType="submit"
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
        car={car}
      />
    </div>
  );
};

export default CarCard;
