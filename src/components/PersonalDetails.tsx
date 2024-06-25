import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import { PersonalDetails } from '../types/FormTypes';
import './PersonalDetailsForm.css';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    address: yup.string().required('Address is required'),
});

const PersonalDetailsForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<PersonalDetails>({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const { setFormData } = useFormData();

    const onSubmit = (data: PersonalDetails) => {
        localStorage.setItem('personalDetails', JSON.stringify(data));
        setFormData(data);
        navigate('/service-details');
    };

    return (
        <div className="container">
            <h1>Personal Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={errors.name?errors.name.message:null} />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal" 
                            helperText={errors.email ? errors.email.message : null} />
                    )}
                />
                <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field}
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            margin="normal" 
                            helperText={errors.phoneNumber ? errors.phoneNumber.message : null} />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                        <TextField {...field}
                            label="Address"
                            variant="outlined"
                            fullWidth
                            margin="normal" 
                            helperText={errors.address ? errors.address.message : null} />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Next
                </Button>
            </form>
        </div>
    );
};

export default PersonalDetailsForm;
