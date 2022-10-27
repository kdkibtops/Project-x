import styles from '../../../CSS_modules/FeaturesSection.module.css'

const Features = ({ features }) => {
    return (
        <div className={styles.container}>
            {features.map((feature) => {
                return (
                    <div key={feature.title} className={styles.feat} onClick={feature.action}>
                        <i className={feature.icon}></i>
                        <h1>{feature.title}</h1>
                        <p>{feature.text}</p>
                    </div>
                )
            })}

        </div>
    );
}

export default Features;
