"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CustomButonProps } from '@/types';

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
  handleClick
}: CustomButonProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button 
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
