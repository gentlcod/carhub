// components/ShowMore.tsx

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit);
        // const newPathName = updateSearchParams("limit", String(newLimit)); // or `${newLimit} as a String`

        // Use router.replace to update the URL without reloading the page
        // router.replace(newPathName, undefined, { scroll: false });
        // setLimit(newLimit); // Use the setLimit function passed as a prop
    };

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    title='Show More'
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;
