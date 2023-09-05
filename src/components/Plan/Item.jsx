import styles from './Item.module.scss'

const Item = ({item}) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__block}>
				<div className={styles.item__block__title}>
					{item.title}
				</div>
				<div className={styles.item__block__content}>
					<div className={styles.item__block__content__image}>
						<item.image alt={item.title}/>
					</div>
					<div className={styles.item__block__content__point}></div>
					<h4 className={styles.item__block__content__name}>
						{item.name}
					</h4>
				</div>
				<div className={styles.item__block__text}>
					{item.text}
				</div>
			</div>
		</div>
	)
}

export default Item