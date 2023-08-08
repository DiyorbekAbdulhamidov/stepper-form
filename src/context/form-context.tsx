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

interface FormContextValue {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('Not form context');
  }
  return context;
}

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
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
