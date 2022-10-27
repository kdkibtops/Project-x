import styles from '../../CSS_modules/LandingPage.module.css'
import AboutSection from './About';
import { useNavigate } from 'react-router-dom';
import Features from '../Reusable/Features/Feature';
import ServicesSection from '../Services/SerivcesSection';


const LandingPage = ({ authentication }) => {
    let navigate = useNavigate();

    const aboutText = `This is a trial for my project, I will assume it is an e Clinic`

    // Navigation
    const navigateToSignIn = () => navigate('/signin')
    const navigateToRegister = () => navigate('/register')
    const navigateToClinics = () => navigate('/clinics')
    const navigateToPatients = () => navigate('/patients')
    const navigateToUsers = () => navigate('/users')
    const navigateToStatistics = () => navigate('/stats')

    const iconSize = `fa-2x`
    const features = [
        {
            title: `Sign in`,
            icon: `fa-solid fa-right-to-bracket ${iconSize}`,
            text: `Click here if you are already registered`,
            action: navigateToSignIn
        },
        {
            title: `Register`,
            icon: `fa-solid fa-user-plus  ${iconSize}`,
            text: `Click here to register as a new user`,
            action: navigateToRegister
        }
    ]

    const services = [
        {
            title: `Clinics`,
            icon: `fa-solid fa-stethoscope ${iconSize}`,
            text: `Click here if you are already registered`,
            action: navigateToClinics
        },
        {
            title: `Patients`,
            icon: `fa-solid fa-people-group  ${iconSize}`,
            text: `Click here to register as a new user`,
            action: navigateToPatients
        },
        {
            title: `Users`,
            icon: `fa-solid fa-users  ${iconSize}`,
            text: `Click here to register as a new user`,
            action: navigateToUsers
        },
        {
            title: `Statistics`,
            icon: `fa-solid fa-chart-simple  ${iconSize}`,
            text: `Click here to register as a new user`,
            action: navigateToStatistics
        }
    ]
    return (
        <>
            <div className={styles.landing}>
                <div className={styles.introText}>
                    <h1>My Project X</h1>
                    <p>Welcome to project X</p>
                </div>
                <AboutSection aboutText={aboutText} />
            </div>
            <div className={styles.features}>
                {authentication === true &&
                    <Features features={services} />
                }
                {authentication === false &&
                    <Features features={features} />
                }
                <ServicesSection />
            </div>
        </>
    );
}

export default LandingPage
