import styles from '../../../CSS_modules/Form.module.css'
import { correctTitles } from '../../../Utils/config/formFields';

// FormGroup.propTypes = {
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     text: PropTypes.string,
//     options: PropTypes.array,
//     value: PropTypes.string || PropTypes.array,
//     updateField: PropTypes.func.isRequired,
// }
const FormGroup = ({
    name,
    id,
    color,
    required,
    step,
    max,
    min,
    type,
    text,
    options,
    values,
    updateFields
}) => {
    let optionsValues = []
    if (type === 'select') {
        optionsValues = options.map((opt) => {
            return opt
        })
    }
    const updateField = (eve) => {
        updateFields(name, eve.target.value, eve.target)
    }

    const correctedText = correctTitles(text);

    return (
        <div>
            {
                (type === 'password') &&
                <div className={styles.formGroup}>
                    <label
                        htmlFor={name}
                        className={styles.formLabel}>
                        {correctedText}:
                    </label>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        className={styles.blankSpaceRegisteration}
                        value={values ? values[name] : ''}
                        onChange={updateField}
                        required={required === false ? false : true}
                        style={{
                            color: color
                                ? color
                                : null
                        }}
                    ></input>
                </div>
            }
            {
                (type === 'text' || type === 'date' || type === 'email') &&
                <div className={styles.formGroup}>
                    <label
                        htmlFor={name}
                        className={styles.formLabel}>
                        {correctedText}:
                    </label>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        className={styles.blankSpaceRegisteration}
                        autoComplete='off'
                        value={values ? values[name] : ''}
                        onChange={updateField}
                        required={required === false ? false : true}
                        style={{
                            color: color || null
                        }}
                    ></input>
                </div>
            }
            {
                type === 'select' &&
                <div className={styles.formGroup}>
                    <label
                        htmlFor={name}
                        className={styles.formLabel}>
                        {correctedText}:
                    </label>                    <select
                        id={id}
                        name={name}
                        className={styles.blankSpaceRegisteration}
                        value={values ? values[name] : ''}
                        onChange={updateField}
                        required={required === false ? false : true}
                    >
                        <option key='select' value='undefined' disabled>--Select--</option>
                        {optionsValues.map((opt) => {
                            return (
                                <option key={opt.value} value={opt.value}>{opt.text}</option>
                            )
                        })
                        }
                    </select>
                </div>
            }
            {
                (type === 'number') &&
                <div className={styles.formGroup}>
                    <label
                        htmlFor={name}
                        className={styles.formLabel}>
                        {correctedText}:
                    </label>                    <input
                        type={type}
                        id={id}
                        name={name}
                        className={styles.blankSpaceRegisteration}
                        value={values ? values[name] : ''}
                        onChange={updateField}
                        step={step}
                        max={max}
                        min={min}
                        required={required === false ? false : true}

                    ></input>
                </div>
            }
        </div>
    )
}


export default FormGroup;

