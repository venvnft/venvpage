import Item from './Item.jsx'
import styles from './Illustration.module.scss'

const Illustration = ({ title, illustration }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__content}>
					<header className={styles.section__container__content__header}>
						<div className={styles.section__container__content__header__block}>
							<h2 className={styles.section__container__content__header__block__name}>{title}</h2>
						</div>
					</header>
					<div className={styles.section__container__content__split}>
						{illustration.map((item, idx) => (
							<Item key={idx}
								title={item.title}
								image={item.image}
								text={item.text} 
								idx={idx}/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Illustration


