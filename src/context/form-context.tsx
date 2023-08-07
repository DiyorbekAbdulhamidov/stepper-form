import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext<{ formValues: any; setFormValues: React.Dispatch<React.SetStateAction<any>> }>(null!);

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    cardDate: '',
    pin: '',
    agreeToPrivacy: false,
  });

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
