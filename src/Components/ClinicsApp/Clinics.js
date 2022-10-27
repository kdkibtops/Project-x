import styles from '../../CSS_modules/ClinicsPage.module.css'
import { AddCircleButton } from '../Reusable/Buttons/UtilityButtons'

import * as users_routes from '../../Utils/API/users_routes'

import { useState, useEffect, useCallback } from 'react';
import BrowseClinics from './BrowseClinics';
import { Route, Routes } from 'react-router-dom';
import NewClinicPage from './NewClinicPage';

const ClinicsPage = () => {
    const [users, setUsers] = useState([]);
    const [clinics, setClinics] = useState([]);
    const [activeClinic, setActiveClinic] = useState(sessionStorage.activeClinic ? JSON.parse(sessionStorage.activeClinic) : {});
    const [newClinic, setNewClinic] = useState(false);

    const getAllRadiologists = async () => {
        const core_data = {
            req_username: '',
            req_JWT: sessionStorage.getItem('JWT')
        }
        const data = {
            filter: '',
            user: core_data,
            body: {},
            SQL: '',
        }
        const reqBody = {
            data: data
        }
        const result = await users_routes.sendRequest('POST', 'showAllRadiologists', reqBody);
        const processedData = result.response.map(user => {
            return ({ value: user.id, text: user.fullname })
        }
        )
        return processedData
    }
    const _getAllClinics = async (allUsers) => {
        const core_data = {
            req_username: '',
            req_JWT: sessionStorage.getItem('JWT')
        }
        const data = {
            filter: '',
            user: core_data,
            body: {},
            SQL: '',
        }
        const reqBody = {
            data: data
        }
        const result = await users_routes.sendRequest('POST', 'showAllClinics', reqBody);
        const processedData = result.response.map(clinic => {
            return ({
                id: clinic.id,
                // date: clinic.date.split('T')[0],
                date: new Date(clinic.date).toLocaleDateString('sv-SV'),
                radiologist: allUsers?.filter((user) => user.value === clinic.attending_phys)[0].text
            })
        }
        )
        return processedData
    }
    const getAllClinics = useCallback(_getAllClinics, [])

    const updateActiveClinic = (clinic) => {
        setActiveClinic(clinic);
    }

    useEffect(() => {
        const getData = async () => {
            const allRadiologists = await getAllRadiologists();
            const allClinics = await getAllClinics(allRadiologists)
            setUsers(allRadiologists);
            setClinics(allClinics);
        }
        getData();
    }, [getAllClinics, newClinic]);

    useEffect(() => {
        sessionStorage.setItem('activeClinic', JSON.stringify(activeClinic))
    }, [activeClinic])

    return (
        <div className={styles.ClinicsPage}>
            <Routes>

                {/* Main Clinics Page */}
                <Route
                    exact path='/'
                    element={<>
                        <h2 className="centered-text">Clinic Management Dashboard</h2>
                        <div className={styles.iconDiv}>
                            <AddCircleButton
                                url={'newclinic'}
                                action={() =>
                                    console.log('start')}
                                text='Start new clinic'
                                size='2'
                            />
                        </div>
                        <BrowseClinics
                            _clinics={clinics}
                            setActiveClinic={updateActiveClinic}
                            getAllClinics={getAllClinics}
                            setNewClinic={setNewClinic}
                        />
                    </>}
                />
                <Route
                    exact path='/newclinic'
                    element={<>
                        <NewClinicPage />
                    </>}
                />
            </Routes>


        </div>
    );
}

export default ClinicsPage;