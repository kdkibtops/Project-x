import { useState } from "react";
import styles from '../../../CSS_modules/TimeKeeping.module.css'

const TimeComponent = () => {
    const openingTime = new Date().toLocaleTimeString();
    const [timeString, setTimeString] = useState(openingTime);

    setInterval(() => {
        setTimeString(
            new Date().toLocaleTimeString()
        )
    }, 1000)

    return (
        <div id="time" className={styles.date}>
            {timeString}
        </div>
    );
}

export default TimeComponent;