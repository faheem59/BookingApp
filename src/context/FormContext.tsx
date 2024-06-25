import { createContext, useContext, useState, ReactNode } from 'react';
import { FormData } from '../types/FormTypes';

interface FormContextProps {
    formData: Partial<FormData>;
    setFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<Partial<FormData>>({});

    const updateFormData = (data: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    return (
        <FormContext.Provider value={{ formData, setFormData: updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormData = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useFormData must be used within a FormProvider');
    }
    return context;
};
