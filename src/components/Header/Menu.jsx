import React, { useState, useEffect } from 'react';
import { SiAiqfome, SiGhostery } from "react-icons/si";
import { menu } from './menu.js';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);
	useEffect(() => {
		if (click) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [click]);

	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.nav__ul} style={click ? { 'left': 0 } : {}}>
					{menu.map((item, idx) => (
						<Item key={idx} title={item.title} link={item.link} click={closeMenu} />
					))}
				</ul>
			</nav>
			<div onClick={handleClick} className={styles.hamburger}>
				{!click
					? (<SiAiqfome title='open menu' className={styles.hamburger__icon} />)
					: (<SiGhostery title='close menu' className={styles.hamburger__icon} />)}
			</div>
		</>
	);
}

export const Item = ({ link, title, click }) => {
	return (
		<li className={styles.li}>
			<Link
				to={link}
				onClick={click}
				target={title === 'Documents' ? '_blank' : undefined}
				className={styles.li__link}>
				{title}
			</Link>
		</li>
	);
}

export default Menu;
