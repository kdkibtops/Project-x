import styles from '../../CSS_modules/Services.module.css'

const Services = ({ services }) => {
    return (
        <div className={styles.services}>
            {services.map((service) => {
                return (
                    <div className={styles.service} >
                        <h2>{service.name}</h2>
                        <ul>
                            {service.text.map((tx) => {
                                return (<li>
                                    <p> <span>{`${tx.subtitle}: `}</span>{tx.text}</p>
                                </li>)

                            })}
                        </ul>
                    </div>
                )
            })}

        </div>
    );
}

export default Services