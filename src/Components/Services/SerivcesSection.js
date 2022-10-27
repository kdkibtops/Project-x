import styles from '../../CSS_modules/Services.module.css'
import Services from './Services';

const ServicesSection = ({ services }) => {
    const ourServices = [
        {
            name: 'Pain management',
            text: [{ subtitle: 'Nerve block', text: '' }, { subtitle: 'Cement vertebroplasty', text: '' }]
        },
        {
            name: 'Thyroid diseases',
            text: [
                { subtitle: 'Ablation', text: 'Usining Microwave or Radiofrequency for ablation of thyroid nodules' },
                { subtitle: 'Embolization', text: 'Using micropuncture through transarterial catheter for diffuse thyroid enlargement' }
            ]
        },
        {
            name: 'Thyroid diseases',
            text: [
                { subtitle: 'Ablation', text: 'Usining Microwave or Radiofrequency for ablation of thyroid nodules' },
                { subtitle: 'Embolization', text: 'Using micropuncture through transarterial catheter for diffuse thyroid enlargement' }
            ]
        }, {
            name: 'Thyroid diseases',
            text: [
                { subtitle: 'Ablation', text: 'Usining Microwave or Radiofrequency for ablation of thyroid nodules' },
                { subtitle: 'Embolization', text: 'Using micropuncture through transarterial catheter for diffuse thyroid enlargement' }
            ]
        }, {
            name: 'Thyroid diseases',
            text: [
                { subtitle: 'Ablation', text: 'Usining Microwave or Radiofrequency for ablation of thyroid nodules' },
                { subtitle: 'Embolization', text: 'Using micropuncture through transarterial catheter for diffuse thyroid enlargement' }
            ]
        }, {
            name: 'Thyroid diseases',
            text: [
                { subtitle: 'Ablation', text: 'Usining Microwave or Radiofrequency for ablation of thyroid nodules' },
                { subtitle: 'Embolization', text: 'Using micropuncture through transarterial catheter for diffuse thyroid enlargement' }
            ]
        },

    ]
    return (
        <div className={styles.servicesSection}>
            <h1 >
                Our services
            </h1>
            <Services services={ourServices} />
        </div>
    );
}

export default ServicesSection;