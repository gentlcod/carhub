'use client'


import React, { useState, useEffect } from 'react';
import { fetchCars } from '@/utils'; // Adjust import path as per your project structure
import { CarProps } from '@/types';
import CarCard from './CarCard';

const ParentComponent = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true); // Optionally manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example filters, replace with your actual filters
        const filters = {
          manufacturer: 'Toyota',
          year: 2022,
          model: 'Camry',
          limit: 10,
          fuel: 'Gasoline',
        };

        const result = await fetchCars(filters); // Fetch cars based on filters
        setCars(result); // Set fetched cars to state
        setLoading(false); // Update loading state if needed
      } catch (error) {
        console.error('Error fetching cars:', error);
        setLoading(false); // Update loading state if needed
      }
    };

    fetchData(); // Invoke fetchData on component mount
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Optional loading indicator
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
