import styles from '../../CSS_modules/SignInPage.module.css'
import * as UtilityButtons from '../Reusable/Buttons/UtilityButtons'
import FormGroup from "../Reusable/Form/FromGroup";
import serilaizeForm from 'form-serialize'
import * as users_routes from '../../Utils/API/users_routes'
import { useNavigate } from "react-router-dom";

import { useState, useCallback, useEffect } from "react";

const SignInPage = ({ authenticated, updateMainAppAuthentication }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();


    const updateField = (field, value) => {
        field === 'username' && setUsername(value);
        field === 'password' && setPassword(value);
    }



    const _submitForm = async () => {
        if (document.getElementById('username').value === '' || document.getElementById('password').value === '') {
            alert('Please enter valid username and password')
        } else {
            const form = document.getElementById('signInForm');
            const form_data = serilaizeForm(form, { hash: true })
            const data = {
                filter: '',
                user: form_data,
                body: { users: form_data },
                SQL: '',
            }
            const reqBody = {
                data: data
            }
            const result = await users_routes.sendRequest('POST', 'authenticate', reqBody);
            if (result.status >= 200 && result.status < 300) {
                sessionStorage.setItem('JWT', result.response.access_token);
                sessionStorage.setItem('eclinicUsername', username);
                sessionStorage.setItem('eclinicUserFullname', result.response.fullname);
                sessionStorage.setItem('eClinicAuthentication', true);
                updateMainAppAuthentication(true)
                navigate('/home');
            } else {
                alert(result.response);
            }
        }
    }
    const submitForm = useCallback(_submitForm, [updateMainAppAuthentication, username, navigate])

    useEffect(() => {
        const enterKeyListener = e => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                e.preventDefault();
                submitForm();
            }
        }
        document.addEventListener('keypress', enterKeyListener)
        return () => {
            document.removeEventListener('keypress', enterKeyListener);
        }
    }, [submitForm]);


    return (
        <>
            <h2 className={styles.formTitle}> Sign in to eClinic</h2>
            <form
                id="signInForm"
                className={styles.registerationForm}
                onSubmit={submitForm}
            >
                <FormGroup
                    id="username"
                    name="username"
                    text='User name'
                    type="text"
                    values={{ username: username }}
                    updateFields={updateField}
                />
                <FormGroup
                    id="password"
                    name="password"
                    text='Password'
                    type="password"
                    values={{ password: password }}
                    updateFields={updateField}
                />
                <div className={styles.iconDiv}>
                    <UtilityButtons.LoginButton
                        url='/signin'
                        action={submitForm}
                        text={'Login'}
                        size='2'

                    />
                    <UtilityButtons.CancelButton
                        url='/'
                        text={'Cancel'}
                        size='2' />
                </div>

            </form>
        </>
    );
}

export default SignInPage;