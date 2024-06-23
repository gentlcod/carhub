'use client';

import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === 'dark' ? (
        <div
          className="flex text-primary items-center text-sm cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <BsSunFill className="text-primary text-2xl mr-2" />
          Light Mode
        </div>
      ) : (
        <div
          className="flex text-primary items-center text-sm cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <MdDarkMode className="text-primary text-2xl mr-3" />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
