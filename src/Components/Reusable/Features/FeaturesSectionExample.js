// Example for how to implent and use features section

import { useNavigate } from 'react-router-dom';
import styles from '../../../CSS_modules/FeaturesSection.module.css'
import Feature from './Feature';

const FeaturesSection = () => {

    let navigate = useNavigate();

    // Everything related to the features is written below
    const navigateToSignIn = () => navigate('/signin')
    const navigateToRegister = () => navigate('/register')

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
    // End of features

    return (
        <div className={styles.features}>
            <Feature features={features} />

        </div>
    );
}

export default FeaturesSection;