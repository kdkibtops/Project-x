import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../CSS_modules/Header.module.css'
import PopUpList from './PopUp';

const Header = ({ authentication, updateMainAppAuthentication }) => {
    const [displayPopUp, setDisplayPopUp] = useState('none');
    let navigate = useNavigate();


    // Popup actions functions
    const navigateToSignIn = () => navigate('/signin');
    const signOut = () => {
        sessionStorage.clear();
        updateMainAppAuthentication(false)
        navigate('/')
    }

    const popUpItems = [
        {
            text: 'Sign in',
            iconLink: 'fa-solid fa-right-to-bracket',
            action: navigateToSignIn,
        },
        {
            text: 'Support',
            iconLink: 'fa-solid fa-headset'
        },
        {
            text: 'View statistics',
            iconLink: 'fa-sharp fa-solid fa-chart-simple'
        }
    ]
    if (authentication === true) {
        popUpItems[0].text = 'Sign out'
        popUpItems[0].iconLink = 'fa-solid fa-power-off'
        popUpItems[0].action = signOut;
    }

    const homeButtonNavigation = () => {
        if (authentication === true) {
            navigate('/home');
        } else {
            navigate('/')
        }
    }

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <i className="fa-solid fa-circle-h fa-2x"
                        onClick={homeButtonNavigation}
                        style={{ cursor: 'pointer' }}
                    >

                    </i>
                </div>
                <span className={styles.eClinic}>
                    <em style={{ "color": "darkblue" }}>e</em><strong className='colored-text'>Clinic</strong></span>

                <div
                    className={styles.links}
                    onMouseLeave={() => setDisplayPopUp('none')}>

                    <i
                        className={`fa-solid fa-bars-staggered fa-2x ${styles.barsIcon}`}
                        onMouseEnter={() => setDisplayPopUp('')}


                    ></i>

                    <PopUpList
                        listItems={popUpItems}
                        stylingClass={styles.UL}
                        show={displayPopUp}
                    />
                </div>
            </div>

        </header>
    );
}



export default Header;