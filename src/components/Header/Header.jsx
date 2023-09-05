import Menu from './Menu.jsx'
import {Link} from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({title}) => {
	return (
		 <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__container__block}>
                    <div className={styles.header__container__block__brand}>
                        <Link to='/' className={styles.header__container__block__brand__link}>
                            <h1 className={styles.header__container__block__brand__link__name}>{title}</h1>
                        </Link>
                    </div>
                    <Menu/>
                </div>
            </div>
        </header>
	)
}

export default Header