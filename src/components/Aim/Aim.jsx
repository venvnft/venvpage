import Tab from './Tab.jsx'
import styles from './Aim.module.scss'

const Aim = ({ title, image, aim }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__block}>
					<div className={styles.section__container__block__table}>
						<div className={styles.section__container__block__table__block}>
							<div className={styles.section__container__block__table__block__image}>
								<img 
									src={image} 
									alt={title} 
									className={styles.section__container__block__table__block__image__img}/>
							</div>
							<Tab 
								aim={aim}
								title={title}/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Aim
