import React from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
import Navigation from './Navigation';
import styles from './Footer.module.scss';

const Footer = ({ title }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__container__block}>
					<div className={styles.footer__container__block__header}>
						<div className={styles.footer__container__block__header__brand}>
							<h2 className={styles.footer__container__block__header__brand__name}>
								<Link 
									to='/' 
									className={styles.footer__container__block__header__brand__name__link}>
									{title}
								</Link>
							</h2>
						</div>
						<Social />
					</div>
					<div className={styles.footer__container__block__content}>
						<div className={styles.footer__container__block__content__copyright}>
							Made by <Link 
								to='https://github.com/venvnft' 
								className={styles.footer__container__block__content__copyright__link}
								target='_blank'>
								Venera
							</Link>
							. All rights reserved.
						</div>
						<Navigation />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
