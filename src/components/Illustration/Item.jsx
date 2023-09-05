import styles from './Item.module.scss'

const Item = ({title, image, text, idx}) => {

	return (
		<div className={styles.item}>
			{idx === 1 
				? <> <Descript title={title} text={text}/>
					<Image image={image} title={title}/> </>
				: <> <Image image={image} title={title}/>
					<Descript title={title} text={text}/> </>
			}
		</div>
	)
}

export const Image = ({image, title}) => {
	return (
		<div className={styles.image}>
			<img src={image} alt={title} className={styles.image__img}/>
		</div>
	)
}

export const Descript = ({title, text}) => {
	return (
		<div className={styles.description}>
			<h3 className={styles.description__name}>
				{title}
			</h3>
			<p className={styles.description__text}>
				{text}
			</p>
		</div>
	)
}

export default Item