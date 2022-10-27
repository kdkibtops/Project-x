import { Link } from "react-router-dom";


export const ActionButton = (props) => {

    return (
        <button
            id={props.id || 'actionButton'}
            className={props.className || 'actionButton'}
        >
            <Link to={props.url || '/'}>
                {props.text || 'action button'}
            </Link>
        </button>
    )
}
ActionButton.propTypes = {
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export const SubmitButton = (props) => {
    // let navigate = useNavigate();
    return (

        // <Link to={props.url || '#'}>
        <button
            type="submit"
            id={props.id || 'submitButton'}
            className={props.className || 'registerationPage_button'}
        >
            <span className="material-icons-sharp mat-icon-button" >
                send
            </span>
            {props.text || 'Submit'}

        </button>
        // </Link>

    )
}



SubmitButton.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string
}


export const CancelButton = (props) => {
    return (
        <Link to={props.url || '/'}>
            <button
                id={props.id || 'cancelButton'}
                className={props.className || 'registerationPage_button'}
            >
                {props.text || 'Cancel'}
            </button>
        </Link>

    );
}

CancelButton.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string
}