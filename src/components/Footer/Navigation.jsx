import React from 'react';
import { Link } from 'react-router-dom';
import { copyright } from './copyright.js';
import styles from './Navigation.module.scss';

const NavItem = ({ title, link }) => {
	return (
		<li className={styles.li}>
			<Link 
				to={link} 
				className={styles.li__link}>
				{title}
			</Link>
			</li>
	);
};

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__ul}>
				{copyright.map((item, idx) => (
					<NavItem 
						key={idx} 
						title={item.title} 
						link={item.link}/>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
