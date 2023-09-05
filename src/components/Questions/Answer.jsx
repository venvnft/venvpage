import { useState } from 'react'
import styles from './Answer.module.scss'
import {BsPlusCircleDotted, BsDashCircleDotted} from 'react-icons/bs'

const Answer = ({question, answer, idx}) => {
	const [select, setSelect] = useState(null)
	const toggle = (idx) => {
		if (select === idx) {
			return setSelect(null)
		}
		setSelect(idx)
	}

	const Button = ({question, idx}) => {
		return (
			<button onClick={() => toggle(idx)} 
				className={styles.button}>
				{select === idx 
					? (<BsDashCircleDotted className={styles.button__image}/>)
					: (<BsPlusCircleDotted className={styles.button__image}/>)
				}
				<h4 className={styles.button__question}>
					{question}
				</h4>
			</button>
		)
	}

	return (
		<li className={styles.li}>
			<Button idx={idx}
				question={question}/>
			<div className={styles.li__answer} 
				style={select === idx 
					? {maxHeight: '1%', opacity: '1'}
					: {maxHeight: '0', opacity: '0'}}>
				<p className={styles.li__answer__text}>
					{answer}
				</p>
			</div>
		</li>
	)
}

export default Answer