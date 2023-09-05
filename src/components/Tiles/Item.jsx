import React from 'react';
import styles from './Item.module.scss';

const Item = ({ title, image, text }) => {
	return (
		<div className={styles.tiles}>
			<div className={styles.tiles__item}>
				<div className={styles.tiles__item__header}>
					<header className={styles.tiles__item__header__image}>
						<img 
							src={image} 
							alt={title} 
							className={styles.tiles__item__header__image__icon} />
					</header>
				</div>
				<div className={styles.tiles__item__description}>
					<h3 className={styles.tiles__item__description__name}>
						{title}
					</h3>
					<p className={styles.tiles__item__description__text}>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Item;
