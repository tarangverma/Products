import React from 'react';
import { ChevronRight } from 'lucide-react';

const StepIndicator = ({ currentStep }) => {
  const steps = ['Description', 'Variants', 'Combinations', 'Price info'];

  return (
    <div className="flex items-center mb-6 border-b">
      {steps.map((label, index) => (
        <div
          key={label}
          className={`flex items-center ${index + 1 === currentStep ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
        >
          <div className="px-4 py-2">
            {label}
          </div>
          {index < steps.length - 1 && <ChevronRight size={16} />}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;