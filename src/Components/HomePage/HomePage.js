import styles from '../../CSS_modules/HomePage.module.css'
import Features from '../Reusable/Features/Feature';

import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ClinicsPage from '../ClinicsApp/Clinics';

const HomePage = () => {
    const [username] = useState(sessionStorage.getItem('eclinicUserFullname'));
    let navigate = useNavigate();

    // Navigation
    const navigateToClinics = () => navigate('clinics')
    const navigateToPatients = () => navigate('patients')
    const navigateToNewClinic = () => navigate('clinics/newclinic')
    const navigateToNewPatient = () => navigate('patients/registerpatient')
    const navigateToUsers = () => navigate('users')
    const navigateToStatistics = () => navigate('stats')

    // Services and features
    const iconSize = '3'
    const services = [
        {
            title: `Browse Clinics`,
            icon: `fa-solid fa-stethoscope fa-${iconSize}x`,
            text: `Click here if you are already registered`,
            action: navigateToClinics
        },
        {
            title: `Browse Patients`,
            icon: `fa-solid fa-people-group  fa-${iconSize}x`,
            text: `Click here to register as a new user`,
            action: navigateToPatients
        },

        {
            title: `Create Clinic`,
            icon: `fa-solid fa-square-plus  fa-${iconSize}x`,
            text: `Click here to register as a new user`,
            action: navigateToNewClinic
        },
        {
            title: `Add new patient`,
            icon: `fa-solid fa-user-plus  fa-${iconSize}x`,
            text: `Click here to register as a new user`,
            action: navigateToNewPatient
        },
        {
            title: `Browse Users`,
            icon: `fa-solid fa-users  fa-${iconSize}x`,
            text: `Click here to register as a new user`,
            action: navigateToUsers
        },
        {
            title: `Statistics`,
            icon: `fa-solid fa-chart-simple  fa-${iconSize}x`,
            text: `Click here to register as a new user`,
            action: navigateToStatistics
        }
    ]
    return (
        <div className={styles.HomePage}>
            <h1 className="centered-text">Welcome <span className="important"> {username} </span></h1>
            <h1 className="centered-text"> <em>e</em><strong className="colored-text">Clinic</strong></h1>

            <Routes>
                <Route
                    exact path=''
                    element={
                        <div className={styles.features}>
                            <Features features={services} />
                        </div>
                    } />

                <Route
                    exact path='/clinics/*'
                    element={
                        <ClinicsPage />
                    }
                />
                <Route
                    exact path='/patients/*'
                    element={
                        <div>patients</div>
                    }
                />
                {/* <Route
                    exact path='clinics/newclinic'
                    element={
                        <div>newclinic</div>
                    }
                /> */}
                {/* <Route
                    exact path='patients/registerpatient'
                    element={
                        <div>registerpatient</div>
                    }
                /> */}
                <Route
                    exact path='/users'
                    element={
                        <div>users</div>
                    }
                />
                <Route
                    exact path='/stats'
                    element={
                        <div>stats</div>
                    }
                />
            </Routes>
        </div>
    );
}

export default HomePage;