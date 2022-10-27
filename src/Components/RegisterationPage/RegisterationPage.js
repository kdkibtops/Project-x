import styles from '../../CSS_modules/RegisterationPage.module.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serilaizeForm from 'form-serialize'
import * as users_routes from '../../Utils/API/users_routes'

import FormGroup from "../Reusable/Form/FromGroup";
import * as UtilityButtons from '../Reusable/Buttons/UtilityButtons'

const RegisterationPage = () => {

    const formFields = [
        {
            id: 'fullname',
            text: 'Full name',
            name: 'fullname',
            type: 'text'
        },
        {
            id: 'username',
            text: 'User name',
            name: 'username',
            type: 'text'
        },
        {
            id: 'password',
            text: 'Password',
            name: 'password',
            type: 'password'
        },
        {
            id: 'confirmPassword',
            text: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password'
        },
        {
            id: 'role',
            text: 'Role',
            name: 'role',
            type: 'select',
            options: [
                { value: 'admin', text: 'Admin' },
                { value: 'fellow', text: 'Fellow' },
                { value: 'patient', text: 'Patient' },
                { value: 'user', text: 'User' },
                { value: 'guest', text: 'Guest' }
            ]
        },
        {
            id: 'degree',
            text: 'Scientific Degree',
            name: 'degree',
            type: 'select',
            options: [
                { value: 'md', text: 'M.D.' },
                { value: 'msc', text: 'M.Sc.' },
                { value: 'bch', text: 'B.Ch.' },
                { value: 'fellow', text: 'Fellowship' },
                { value: 'none', text: 'N/A' }
            ]
        },
        {
            id: 'email',
            text: 'E-mail',
            name: 'email',
            type: 'email'
        },

    ]
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user');
    const [degree, setDegree] = useState('none');
    const [email, setEmail] = useState('');

    const iconSize = '3'

    let navigate = useNavigate();

    const updateField = (field, value) => {
        document.getElementById(field).parentElement.style.color = ''
        switch (field) {
            case 'fullname':
                setFullname(value);
                break
            case 'username':
                setUsername(value);
                break
            case 'password':
                setPassword(value);
                break
            case 'confirmPassword':
                setConfirmPassword(value);
                break
            case 'role':
                setRole(value);
                break
            case 'degree':
                setDegree(value);
                break
            case 'email':
                setEmail(value);
                break
            default:
                console.log(field);

        }
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            document.getElementById('password').style.color = 'red'
            document.getElementById('confirmPassword').style.color = 'red'
        } else if (password === confirmPassword) {
            document.getElementById('password').style.color = 'black'
            document.getElementById('confirmPassword').style.color = 'black'
        }
    }, [password, confirmPassword])

    const handleSubmit = async () => {
        let completed = true;
        const input_fields = document.querySelectorAll('[required]');
        input_fields.forEach((f) => {
            if (!completed) return;
            if (f.value === '') {
                completed = false;
                f.parentElement.style.color = 'red'
            }
        })
        if (password !== confirmPassword) completed = null;
        if (completed === true) {
            const form = document.getElementById('registerationForm')
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
            const result = await users_routes.sendRequest('POST', 'registerUser', reqBody);
            alert(result.response);
            if (result.status === 200) {
                navigate('/');
            } else {
                console.log(result.status)
            }

        } else if (completed === false) alert('Please complete all required fields')
        else if (completed === null) alert('Password and confirm password are not matching!')

    }


    return (
        <div className={styles.RegisterationPage}>
            <h2 className={styles.formTitle}> Register New User</h2>

            <form
                id='registerationForm'
                className={styles.registerationForm}
                onSubmit={handleSubmit}
            >

                {
                    formFields.filter((field) => field.type !== 'select').map((field) => {
                        const values = {}
                        switch (field.name) {
                            case 'username':
                                values[field.name] = username
                                break
                            case 'fullname':
                                values[field.name] = fullname
                                break
                            case 'password':
                                values[field.name] = password
                                break
                            case 'confirmPassword':
                                values[field.name] = confirmPassword
                                break
                            case 'email':
                                values[field.name] = email
                                break
                            default:
                                break
                        }
                        return (
                            <FormGroup
                                key={field.id}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                text={field.text}
                                values={values}
                                updateFields={updateField}
                            />
                        )

                    })
                }
                {
                    formFields.filter((field) => field.type === 'select').map((field) => {
                        const values = {}
                        values[field.name] = field.name === 'role'
                            ? role
                            : (field.name === 'degree'
                                ? degree : null)
                        return (
                            <FormGroup
                                key={field.id}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                text={field.text}
                                options={field.options}
                                values={values}
                                updateFields={updateField}
                            />
                        )
                    })
                }

                <div className={styles.iconDiv}>
                    <UtilityButtons.SubmitButton
                        url=''
                        text='Register'
                        action={handleSubmit}
                        size={iconSize}

                    />
                    <UtilityButtons.CancelButton
                        url='/'
                        size={iconSize}
                    />
                </div>
            </form>        </div>
    );
}

export default RegisterationPage;