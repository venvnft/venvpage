import { useEffect } from 'react'
import Banner from './../../components/Banner/Banner.jsx'
import Community from './../../components/Community/Community.jsx'
import Border from './../../components/Border/Border.jsx'
import Mail from './../../components/Mail/Mail.jsx'
import image from './../../assets/img/contact.png'
import mail_img from './../../assets/img/mail.png'
import {community} from './community.js'

const Contact = () => {
	useEffect(() => {
		document.title = 'Venera | Contact'
	}, [])

	
	return (
		<main>
			<Banner 
				name={'CONTACT'} 
				image={image} 
				text={'Venera contact and community'} />
			<Community 
				title={'Community'}
				community={community} />
			<Border/>
			<Mail 
				image={mail_img}
				title={'Contact Us'} 
				mail={'0xvenera@gmail.com'} />
		</main>
	)
}

export default Contact