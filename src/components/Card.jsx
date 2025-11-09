import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4 dark:text-white">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;