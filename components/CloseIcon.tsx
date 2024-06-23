// components/CloseIcon.tsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CloseIcon = () => {
  const { theme } = useTheme();
  const fillColor = theme === 'dark' ? '#FFF' : '#000'; // Use white for dark theme and black for light theme

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill={fillColor}
            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z">
      </path>
    </svg>
  );
};

export default CloseIcon;
