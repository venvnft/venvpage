import React from 'react';
import styles from './Banner.module.scss'

const Banner = ({image, name, text}) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__banner}>
				<img 
					src={image} 
					alt={name} 
					className={styles.section__banner__image}/>
			</div>
			<div className={styles.section__block}>
				<div className={styles.section__block__container}>
					<div className={styles.section__block__container__header}>
						<h1 className={styles.section__block__container__header__name}>
							{name}
						</h1>
						<p className={styles.section__block__container__header__text}>
							{text}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner