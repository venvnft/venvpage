import Item from './Item.jsx'
import styles from './Community.module.scss'

const Community = ({ title, community }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__block}>
					<div className={styles.section__container__block__header}>
						<h2 className={styles.section__container__block__header__name}>
							{title}
						</h2>
					</div>
					<div className={styles.section__container__block__items}>
						{community.map((item, idx) => (
							<Item 
								title={item.title}
								image={item.image}
								link={item.link}
								key={idx}/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Community