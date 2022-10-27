import styles from '../../CSS_modules/ClinicsPage.module.css'
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';

const BrowseClinicsMain = ({ _clinics, setActiveClinic, getAllClinics, setNewClinic }) => {
    const [clinics, setClinics] = useState();

    useEffect(() => { getAllClinics() }, [_clinics, getAllClinics])
    console.log('fetched clinics');

    useEffect(() => {
        setClinics(_clinics);
    }, [getAllClinics, _clinics]);

    const sortByDate = (order) => {
        if (order === true) {
            // sort Ascending
            _clinics.sort((a, b) => {
                const x = new Date(a.date);
                const y = new Date(b.date);
                return (
                    x.getTime() - y.getTime()
                )
            })
            setClinics(_clinics);
            // setSortByDate(!sortingByDate)
            console.log("Ascending")
        } else {
            // sort Descending
            _clinics.sort((a, b) => {
                const x = new Date(a.date);
                const y = new Date(b.date);
                return (
                    y.getTime() - x.getTime()
                )
            })
            setClinics(_clinics);
            // setSortByDate(!sortingByDate)

            console.log("Descending")

        }
        console.log(clinics);


    }
    const sortByClinicIDs = (order) => {
        if (order === true) {
            // sort Ascending
            _clinics.sort((a, b) => {
                return a.id - b.id
            })
            setClinics(_clinics);
            console.log("Ascending")
        } else {
            // sort Descending
            _clinics.sort((a, b) => {
                return b.id - a.id
            })
            setClinics(_clinics);

            console.log("Descending")

        }
        console.log(clinics);

    }


    return (
        <>
            <BrowseClinics
                clinics={clinics}
                setActiveClinic={setActiveClinic}
                getAllClinics={getAllClinics}
                setNewClinic={setNewClinic}
                sortByDate={sortByDate}
                sortByClinicIDs={sortByClinicIDs}
            />
        </>
    )

}

const BrowseClinics = ({
    clinics,
    setActiveClinic,
    getAllClinics,
    setNewClinic,
    sortByDate,
    sortByClinicIDs,
}) => {
    let navigate = useNavigate();
    const [sortingByDate, setSortByDate] = useState();
    const [sortingByClinicID, setSortByClinicID] = useState();

    const selectClinic = (clinic) => {
        setActiveClinic(clinic);
        setNewClinic(false);
        navigate('../activeclinic');
    }

    // useEffect(() => { getAllClinics() }, [getAllClinics])

    const sortDates = () => {
        sortByDate(sortingByDate);
        setSortByDate(!sortingByDate);
    }
    const sortClinicIDs = () => {
        sortByClinicIDs(sortingByClinicID);
        setSortByClinicID(!sortingByClinicID);
    }

    return (
        <>
            <table className={styles.mainTable}>
                <thead className={styles.tableHeaders}>
                    <tr>
                        <td
                            className='selectable'
                            onClick={sortClinicIDs}>Clinic ID</td>
                        <td
                            className='selectable'
                            onClick={sortDates}>Date</td>
                        <td>Radiologist</td>
                    </tr>
                </thead>
                <tbody>
                    {clinics && clinics.map(clinic => {
                        return (
                            <tr
                                key={clinic.id}
                                className='selectable'
                                onDoubleClick={() => selectClinic(clinic)}>
                                <td
                                >{clinic.id}</td>
                                <td >{clinic.date}</td>
                                <td>{clinic.radiologist}</td>
                            </tr>)
                    })}

                </tbody>

            </table>
        </>
    )
}
export default BrowseClinicsMain;