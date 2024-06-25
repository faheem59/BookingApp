import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { BoardingDetails } from '../types/FormTypes';

const BoardingDetailsForm: React.FC = () => {
    const schema = yup.object().shape({
        appointmentDate: yup.string().required('Appointment Date is required'),
        appointmentTime: yup.string().required('Appointment Time is required'),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const { setFormData } = useFormData();

    const onSubmit = (data : BoardingDetails) => {
        localStorage.setItem('boardingDetails', JSON.stringify(data));
        setFormData(data);
        navigate('/confirmation');
    };

    return (
        <div className="container">
            <h1>Boarding Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="appointmentDate"
                            control={control}
                            render={({ field }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        {...field}
                                        label="Appointment Date"
                                        
                                    />
                                    {errors.appointmentDate && (
                                        <div style={{ color: 'red', marginTop: '0.5rem' }}>
                                            {errors.appointmentDate.message}
                                        </div>
                                    )}
                                </LocalizationProvider>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="appointmentTime"
                            control={control}
                            render={({ field }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                        {...field}
                                        label="Appointment Date"
                                    />
                                    {errors.appointmentTime && (
                                        <div style={{ color: 'red', marginTop: '0.5rem' }}>
                                            {errors.appointmentTime.message}
                                        </div>
                                    )}
                                </LocalizationProvider>
                            )}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>
                    Book
                </Button>
            </form>
        </div>
    );
};

export default BoardingDetailsForm;
