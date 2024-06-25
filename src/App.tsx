import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetailsForm from './components/PersonalDetails';
import ServiceDetailsForm from './components/ServiceDetails';
import BoardingDetailsForm from './components/BoardingDetails';
import Confirmation from './components/Confirmation';
import { FormProvider } from './context/FormContext';
import "./App.css"

const App: React.FC = () => {
    return (
        <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<PersonalDetailsForm />} />
                    <Route path="/service-details" element={<ServiceDetailsForm />} />
                    <Route path="/boarding-details" element={<BoardingDetailsForm />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </Router>
        </FormProvider>
    );
};

export default App;
