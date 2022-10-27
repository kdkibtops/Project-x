import styles from '../../CSS_modules/LandingPage.module.css'
const AboutSection = ({ aboutText }) => {
    return (
        <div className={styles.aboutSection}>
            <h1>About:</h1>
            <p>{aboutText}</p>
        </div>
    );
}

export default AboutSection;