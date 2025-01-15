import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

const StepIndicator = ({ currentStep, completedSteps }) => {
  const steps = ['Description', 'Variants', 'Combinations', 'Price info'];

  return (
    <div className="flex items-center mb-6 border-b">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = completedSteps[stepNumber];
        const isCurrent = stepNumber === currentStep;

        return (
          <div
            key={label}
            className={`flex items-center ${
              isCurrent ? 'text-blue-500 border-b-2 border-blue-500' : 
              isCompleted ? 'text-green-500' : 'text-gray-500'
            }`}
          >
            <div className="px-4 py-2 flex items-center gap-2">
              {isCompleted && <Check size={16} />}
              {label}
            </div>
            {index < steps.length - 1 && <ChevronRight size={16} />}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;