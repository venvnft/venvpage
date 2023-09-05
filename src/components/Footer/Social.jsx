import React from 'react';
import { Link } from 'react-router-dom';
import { social } from './social.js';
import styles from './Social.module.scss';

const SocialIcon = ({ item }) => {
	return (
		<li className={styles.li}>
			<Link to={item.link} className={styles.li__link} target='_blank'>
				<item.image title={item.name} className={styles.li__link__image} />
			</Link>
		</li>
	);
};

const Social = () => {
	return (
		<div className={styles.social}>
			<ul className={styles.social__ul}>
				{social.map((item, idx) => (
					<SocialIcon key={idx} item={item} />
				))}
			</ul>
		</div>
	);
};

export default Social;
