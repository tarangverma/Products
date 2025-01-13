import React from 'react';

const FormHeader = ({ step, onBack, onNext, onCancel }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-semibold">Add Product</h1>
      <div className="space-x-2">
        <button
          onClick={step === 1 ? onCancel : onBack}
          className="px-4 py-2 border rounded"
        >
          {step === 1 ? 'Cancel' : 'Back'}
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {step === 4 ? 'Confirm' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default FormHeader;