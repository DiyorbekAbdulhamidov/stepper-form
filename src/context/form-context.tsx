import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: string;
  cardDate: string;
  pin: string;
  agreeToPrivacy: boolean;
}

interface FormContextType {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const FormContext = createContext<FormContextType>({
  formValues: {
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    cardDate: '',
    pin: '',
    agreeToPrivacy: false,
  },
  setFormValues: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formValues, setFormValues] = useState<FormValues>({
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
