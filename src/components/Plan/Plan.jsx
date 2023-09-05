import Item from './Item.jsx'
import styles from './Plan.module.scss'

const Plan = ({ plan }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__block}>
					<div className={styles.section__container__block__items}>
						{plan.map((item, idx) => (
							<Item item={item} key={idx}/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Plan