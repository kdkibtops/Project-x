import styles from '../../CSS_modules/Header.module.css'


const PopUpList = ({ listItems, show }) => {

    return (
        <ul
            className={styles.UL}
            style={{ 'display': show }}
        >
            {listItems.map((item) =>
                <li key={item.text}
                    className={styles.listItem}
                    onClick={item.action}
                >
                    {item.text}

                    {item.iconLink &&
                        <i
                            className={`${item.iconLink}`}
                            style={{ 'position': 'fixed', 'right': '10px', 'paddingRight': '10px' }}
                        >
                        </i>
                    }
                </li>)
            }
        </ul>
    );
}

export default PopUpList;