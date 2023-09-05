import { useState } from 'react'
import styles from './Tab.module.scss'


const Tab = ({ title, aim }) => {
	const [toggleState, setToggleState] = useState(0);
	const toggleAim = (idx) => {
		setToggleState(idx);
	};

	const Text = ({ text, idx }) => {
		return (
			<div className={styles.block}
	            style={{display: toggleState === idx ? '' : 'none'}}>
				<p className={styles.block__text}>
					{text}			
				</p>
			</div>
		)
	}

	const Button = ({ title, idx }) => {
		return (
			<button className={styles.button} 
				onClick={() => toggleAim(idx)}
				style={{fontWeight: toggleState === idx ? '600' : '',
					borderBottomWidth: toggleState === idx ? '0px' : '2px',
					color: toggleState === idx ? '#fff' : '#8476D9'}}>
				{title}
			</button>
		)
	}

	return (
		<div className={styles.tab}>
			<div className={styles.tab__content}>
				<div className={styles.tab__content__header}>
					<h2 className={styles.tab__content__header__name}>
						{title}
					</h2>
				</div>
				<div className={styles.tab__content__block}>
					<header className={styles.tab__content__block__header}>
						{aim.map((item, idx) => (
							<Button key={idx}
								title={item.title}
								idx={idx}/>
						))}
					</header>
					<div className={styles.tab__content__block__content}>
						{aim.map((item, idx) => (
							<Text key={idx}
								text={item.text}
								idx={idx}
								toggleState={toggleState}/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}


export default Tab