import React from 'react';
import { useFormData } from '../context/FormContext';

const Confirmation: React.FC = () => {
    const { formData } = useFormData();

    const appointmentDate = formData.appointmentDate ? new Date(formData.appointmentDate).toLocaleDateString() : 'N/A';
    const appointmentTime = formData.appointmentTime || 'N/A';

    return (
        <>
            <div className="container">
                <h1>Confirmation Page</h1>
                <h1>Hi {formData.name || 'User'},</h1>
                <p>
                    Your Booking is Scheduled at {appointmentTime} on {appointmentDate}.
                </p>
            </div>
        </>
    );
};

export default Confirmation;
