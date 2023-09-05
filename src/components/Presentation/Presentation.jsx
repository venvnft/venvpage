import styles from './Presentation.module.scss'

const Presentation = ({ title, link }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__block}>
					<div className={styles.section__container__block__present}>
						<iframe 
							src={link} 
							className={styles.section__container__block__present__frame}
							title='Venera'
							frameBorder="0" 
							allowFullScreen/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Presentation