import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';
import { ServiceDetails } from '../types/FormTypes';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ServiceDetailsForm: React.FC = () => {
    const models = [
        { value: "Model 1", label: "Model 1" },
        { value: "Model 2", label: "Model 2" },
        { value: "Model 3", label: "Model 3" },
        { value: "Model 4", label: "Model 4" },
    ];

    const brands = [
        { value: "Hyundai", label: "Hyundai" },
        { value: "Mahindra", label: "Mahindra" },
        { value: "Honda", label: "Honda" },
    ];

    const schema = yup.object().shape({
        vehicleCategory: yup.string().required('Vehicle Category is required'),
        vehicleModel: yup.string().required('Vehicle Model is required'),

    });
    const { control, handleSubmit, formState: { errors } } = useForm<ServiceDetails>({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const { setFormData } = useFormData();

    const onSubmit = (data: ServiceDetails) => {
        localStorage.setItem('serviceDetails', JSON.stringify(data));
        setFormData(data);
        navigate('/boarding-details');
    };

    return (
        <>
            <div className="container">
                <h1>Service Details</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="vehicleCategory"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Vehicle Category"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                helperText={errors.vehicleCategory ? errors.vehicleCategory.message : null}
                            >
                                {brands.map((brand) => (
                                    <MenuItem key={brand.value} value={brand.value}>
                                        {brand.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                    <Controller
                        name="vehicleModel"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Vehicle Model"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                helperText={errors.vehicleModel ? errors.vehicleModel.message : null}
                            >
                                {models.map((model) => (
                                    <MenuItem key={model.value} value={model.value}>
                                        {model.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                    <Button type="submit" variant="contained" color="primary" >
                        Next
                    </Button>
                </form>
            </div>
        </>
    );
};

export default ServiceDetailsForm;
