import { useState } from 'react';

export const useMultistepForm = (length: number) => {
  const [index, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (newIndex: number) => {
    setCurrentStepIndex(newIndex);
  };

  return {
    index,
    length,
    next,
    back,
    goTo,
  };
};
