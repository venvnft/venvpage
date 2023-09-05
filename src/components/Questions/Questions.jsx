import Answer from './Answer.jsx'
import styles from './Questions.module.scss'

const Questions = ({ title, data }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__block}>
					<div className={styles.section__container__block__header}>
						<h2 className={styles.section__container__block__header__name}>
							{title}
						</h2>
					</div>
					<ul className={styles.section__container__block__ul}>
						{data.map((item, idx) => (
							<Answer idx={idx} 
								key={idx}
								question={item.question}
								answer={item.answer}/>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Questions