import { useState } from 'react';

const useProductForm = (categories) => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });

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
    const isValid = Object.keys(newErrors).length === 0;

    if (isValid) {
      setCompletedSteps(prev => ({
        ...prev,
        [currentStep]: true
      }));
    }

    return isValid;
  };

  return {
    step,
    setStep,
    formData,
    setFormData,
    errors,
    setErrors,
    validateStep,
    completedSteps
  };
};

export default useProductForm; 