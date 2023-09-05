import {Link} from 'react-router-dom'
import styles from './Item.module.scss'

const Item = ({title, image, link}) => {
	return (
		<Link to={link} 
			target='_blank'  
			className={styles.item}>
			<img src={image}
				alt={title}
				className={styles.item__image}/>
			<h4 className={styles.item__name}>
				{title}
			</h4>
		</Link>
	)
}

export default Item