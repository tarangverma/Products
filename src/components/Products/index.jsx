import React, { useState } from 'react';
import FormHeader from './FormHeader';
import StepIndicator from './StepIndicator';
import Description from './Description';
import Variants from './Variants';
import Combinations from './Combinations';
import PriceInfo from './PriceInfo';

const ProductForm = ({ onCancel, onSubmit, categories }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    category: categories[0] || '',
    brand: '',
    image: null,
    variants: {
      size: ['M', 'L'],
      color: ['Black', 'Red']
    },
    combinations: [
      { sku: 'ABC12', inStock: true, quantity: 9, variant: 'M/Black' },
      { sku: 'SDF3', inStock: true, quantity: 9, variant: 'M/Red' },
      { sku: 'HWE2', inStock: false, quantity: 0, variant: 'L/Black' },
      { sku: 'ABC12', inStock: true, quantity: 9, variant: 'L/Red' }
    ],
    price: '',
    discount: {
      value: 0,
      type: '%'
    }
  });

  const [errors, setErrors] = useState({});

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "Product name is required";
      if (!formData.brand) newErrors.brand = "Brand is required";
    } else if (currentStep === 2) {
      if (!formData.variants.size.length) newErrors.size = "At least one size is required";
      if (!formData.variants.color.length) newErrors.color = "At least one color is required";
    } else if (currentStep === 4) {
      if (!formData.price) newErrors.price = "Price is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    setStep(step - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <FormHeader 
        step={step}
        onBack={handleBack}
        onNext={handleNext}
        onCancel={onCancel}
      />

      <StepIndicator currentStep={step} />

      <div className="bg-white rounded-lg p-6 border">
        {step === 1 && (
          <Description 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            categories={categories}
          />
        )}
        {step === 2 && (
          <Variants 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {step === 3 && (
          <Combinations 
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 4 && (
          <PriceInfo 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};

export default ProductForm;