import { MouseEventHandler } from "react";




export interface CustomButonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit" | "reset";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: () => void;
  }


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;

}

export interface CarProps {
    city_mpg: number;
    class:string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}


export type CarState = CarProps[];


export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }
  



export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: (filter: string) => void; 
  }


export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (newLimit: number) => void;
}


  