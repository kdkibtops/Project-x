import { useState } from "react";
import styles from '../../../CSS_modules/TimeKeeping.module.css'

const DateComponent = () => {
    const _currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const [dateString, setDateString] = useState(_currentDate);
    setInterval(() => {
        const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        setDateString(currentDate)
    }, 60000);


    return (
        <div id="dateDiv" className={styles.date}>
            {dateString}
        </div>
    );
}

export default DateComponent;