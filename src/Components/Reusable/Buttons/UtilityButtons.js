import { Link } from "react-router-dom"
import styles from '../../../CSS_modules/Buttons.module.css'

// Updated Buttons
export function CancelButton(props) {
    return (
        <Link to={props.url} onClick={props.action} style={props.style}>
            <i className={`fa-solid fa-xmark fa-${props.size}x`}></i>
            <h3 className={styles.iconTitle}>{props.text || 'Cancel'}</h3>
        </Link>
    )
}
export function LoginButton(props) {
    return (
        <Link to={props.url} onClick={props.action} onTouchStart={props.action}>
            <i className={`fa-solid fa-right-to-bracket fa-${props.size}x`}></i>
            <h3 className={styles.iconTitle} lang="ar">{props.text ? props.text : 'Login'}</h3>
        </Link>
    )
}

export function SubmitButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <i className={`fa-sharp fa-solid fa-check fa-${props.size}x`}></i>

            <h3 className="icon-title">{props.text || 'Submit'}</h3>
        </Link>
    )
}

export function AddCircleButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <i class={`fa-sharp fa-solid fa-circle-plus fa-${props.size}x`}></i>
            <h3 className="icon-title">{props.text || 'Add'}</h3>
        </Link>
    )
}
// Old Buttons
export function HomeButton({ url, action, text, style }) {
    return (

        <Link to={url || '/home'} onClick={action} style={style} >
            <span className="material-icons-sharp mat-icon-button ">
                home
            </span>
            <h3 className="icon-title">{text || 'Home'}</h3>
        </Link>

    )
}
export function SearchButton({ url, action, searchValue, text, style }) {
    // I don't know why this function caused the App to rerender even if no actions are passed, so it sets Authentication into false
    let handleSearch = () => {
        action(searchValue)
    }
    return (
        <Link to={url} onClick={handleSearch} style={style}  >
            <span className="material-icons-sharp mat-icon-button">
                search
            </span>
            <h3 className="icon-title">{text || 'Search'}</h3>
        </Link>
    )
}
export function NavigationSearchButton({ url, action, searchValue, text, style }) {
    return (
        <Link to={url} onClick={action} style={style}  >
            <span className="material-icons-sharp mat-icon-button">
                search
            </span>
            <h3 className="icon-title">{text || 'Search'}</h3>
        </Link>
    )
}

// debug

export function AddButton({ url, action, style, text }) {
    return (
        <Link to={url} onClick={action} style={style || { 'margin': '0 auto' }}>
            <span className="material-icons-sharp mat-icon-button">
                add
            </span>
            {text &&
                <h4 className="icon-title ">{text || 'Add'}</h4>
            }
        </Link>
    )
}

export function LogoutButton(props) {
    return (
        <Link to={props.url} onClick={props.action} onTouchStart={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                logout
            </span>
            <h3 className="icon-title">{props.text ? props.text : 'Logout'}</h3>

        </Link>
    )
}
export function DeleteButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                delete
            </span>
            <h3 className="icon-title">{props.text}</h3>
        </Link>
    )
}

export function InfoButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                info
            </span>
            <h3 className="icon-title">{props.text || 'Info'}</h3>

        </Link>
    )
}
export function AddPersonButton(props) {
    return (
        <Link to={props.url} onClick={props.action} className={props.class || ''}>
            <span className="material-icons-sharp mat-icon-button">
                person_add
            </span>
            <h3 className="icon-title">{props.text || 'Register new patient'}</h3>

        </Link>
    )
}
export function RefreshButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                refresh
            </span>
            <h3 className="icon-title">{props.text || 'Refresh'}</h3>

        </Link>
    )
}
export function BackButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                arrow_back
            </span>
            <h3 className="icon-title">{props.text || 'Back'}</h3>

        </Link>
    )
}
export function FWDButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                arrow_forward
            </span>
            <h3 className="icon-title">{props.text || 'Next'}</h3>

        </Link>
    )
}
export function AddUserButton(props) {
    return (
        <Link to={props.url} onClick={props.action}>
            <span className="material-icons-sharp mat-icon-button">
                account_circle
            </span>
            <h3 className="icon-title">{props.text || 'Register'}</h3>
        </Link>
    )
}

export function PersonsButton(props) {
    return (
        <Link to={props.url} onClick={props.action} >
            <span className="material-icons-sharp mat-icon-button">
                group
            </span>
            <h3 className="icon-title">{props.text || 'Browse'}</h3>
        </Link>
    )
}

export function FinishButton(props) {
    return (
        <Link to={props.url} onClick={props.action}  >
            <span className="material-symbols-outlined mat-icon-button">
                upgrade
            </span>
            <h3 className="icon-title">{props.text || 'Finish'}</h3>
        </Link>
    )
}


// not working properly
export function LoadMore(props) {

    const processAction = () => {
        console.log('here')
        if (props.extraDataForAction) {
            // console.log(...props.extraDataForAction)
            props.action(props.extraDataForAction[0], props.extraDataForAction[1]);
            props.extraDataForAction[2]('allentriesintable');
        } else {
            props.action()
        }
    }

    return (
        <Link to={props.url} onClick={() => processAction()}
        >
            <span className="material-symbols-outlined mat-icon-button">
                read_more
            </span>
            <h3 className="icon-title">{props.text || 'see more'}</h3>
        </Link>
    )
}

export function StartButton({ url, action, text }) {
    return (
        <Link to={url} onClick={action}  >
            <span className="material-symbols-outlined mat-icon-button">
                auto_mode
            </span>
            <h3 className="icon-title">{text || 'Start'}</h3>
        </Link>
    )
}
export function ClinicsButton({ url, action, text }) {
    return (
        <Link to={url} onClick={action}  >
            <span className="material-symbols-outlined mat-icon-button">
                emergency
            </span>
            <h3 className="icon-title">{text || 'Clinics'}</h3>
        </Link>
    )
}