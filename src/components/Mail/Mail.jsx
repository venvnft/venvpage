import {Link} from 'react-router-dom'
import { SiMinutemailer } from 'react-icons/si'
import styles from './Mail.module.scss'

const Mail = ({ title, mail, image }) => {

	const Write = () => {
		return (
			<div className={styles.links}>
				<Link to={`mailto:${mail}`} className={styles.links__button}>
					Write 
					<SiMinutemailer className={styles.links__button__icon}/>
				</Link>
				<p className={styles.links__mail}>
					{mail}
				</p>
			</div>
		)
	}

	const Image = ({ image }) => {
		return (
			<div className={styles.image}>
				<img src={image}
					alt='EMail' 
					className={styles.image__img}/>
			</div>
		)
	}

	return (
		<section className={styles.section}>
			<div className={styles.section__container}>
				<div className={styles.section__container__block}>
					<div className={styles.section__container__block__content}>
						<h2 className={styles.section__container__block__content__title}>
							{title}
						</h2>
						<p className={styles.section__container__block__content__text}>
							For questions and suggestions you can contact us by e-mail.
						</p>
						<Write />
					</div>
					<Image 
						image={image}/>
				</div>
			</div>
		</section>
	)
}

export default Mail