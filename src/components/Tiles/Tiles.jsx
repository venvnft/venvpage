import React from 'react';
import styles from './Tiles.module.scss';
import Item from './Item.jsx';

const Tiles = ({ tiles }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__inner}>
					<div className={styles.section__container__inner__content}>
						{tiles.length > 0 &&
							tiles.map(({ title, image, text }, idx) => (
								<Item 
									key={idx} 
									title={title} 
									image={image} 
									text={text}/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tiles;
