import { useEffect } from 'react'
import image from './../../assets/img/about.png'
import Banner from './../../components/Banner/Banner.jsx'
import Plan from './../../components/Plan/Plan.jsx'
import Border from './../../components/Border/Border.jsx'
import Questions from './../../components/Questions/Questions.jsx'
import Presentation from './../../components/Presentation/Presentation.jsx'
import {plan} from './plan.js'
import {data} from './data.js'

const About = () => {
	useEffect(() => {
		document.title = 'Venera | About'
	}, [])

	return (
		<main>
			<Banner 
				image={image} 
				name={'ABOUT'} 
				text={'Venera concept and plans description'} />
			<Presentation 
				title={'Presentation'}
				link={'https://tome.app/venera-f4f/venera-unlocking-the-future-of-music-with-nfts-clm34mem701bho15r3q88a7pv'} />
			<Border />
			<Plan 
				plan={plan} />
			<Border />
			<Questions 
				title={'Questions & Answers'}
				data={data} />
		</main>
	)
}



export default About