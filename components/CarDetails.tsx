'use client'

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
import CloseIcon from "./CloseIcon";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}


  <div className="flex-1 relative w-full h-24 bg-primary-blue rounded-lg">
    <Image
      src='/hero.png'
      alt="car model"
      fill
      priority
      className="object-contain"
    />
  </div>

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="car-details__dialog-panel max-h-[80vh] overflow-hidden">
                  <button
                    type="button"
                    className="car-details__close-btn"
                    onClick={closeModal}
                  >
                    <CloseIcon />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="car-details__main-image">
                      <Image
                        src='/carmodel.png'
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex lg:gap-16 gap-1 ml-1 lg:ml-5">
                      <Image src='/hero1.png'  width={100} height={90} alt='car '/>
                      <Image src='/hero2.png' width={100} height={90}  alt='car '/>
                      <Image src='/hero3.png' width={100} height={90}  alt='car '/>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-1 overflow-y-auto scrollbar-thin">
                    <h2 className="font-semibold text-lg text-primary text-center capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-2 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-primary text-sm capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-primary text-sm font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
