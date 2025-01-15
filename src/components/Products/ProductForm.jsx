import React from 'react';
import FormHeader from './FormHeader';
import StepIndicator from './StepIndicator';
import Description from './Description';
import Variants from './Variants';
import Combinations from './Combinations';
import PriceInfo from './PriceInfo';
import useProductForm from './hooks/useProductForm';

const ProductForm = ({ onCancel, onSubmit, categories }) => {
  const {
    step,
    setStep,
    formData,
    setFormData,
    errors,
    validateStep,
    completedSteps
  } = useProductForm(categories);

  const handleNext = () => {
    if (step === 4) {
      if (validateStep(step)) {
        onSubmit(formData);
      }
    } else if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    // Data is retained when going back
    setStep(step - 1);
  };

  const renderStep = () => {
    const commonProps = {
      formData,
      setFormData,
      errors
    };

    switch (step) {
      case 1:
        return (
          <Description 
            {...commonProps}
            categories={categories}
          />
        );
      case 2:
        return (
          <Variants 
            {...commonProps}
          />
        );
      case 3:
        return (
          <Combinations 
            {...commonProps}
          />
        );
      case 4:
        return (
          <PriceInfo 
            {...commonProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <FormHeader 
        step={step}
        onBack={handleBack}
        onNext={handleNext}
        onCancel={onCancel}
      />

      <StepIndicator 
        currentStep={step} 
        completedSteps={completedSteps}
      />

      <div className="bg-white rounded-lg p-6 border">
        {renderStep()}
      </div>
    </div>
  );
};

export default ProductForm;