import React, { useEffect } from 'react';
import image from './../../assets/img/home.png';
import Banner from './../../components/Banner/Banner.jsx';
import Tiles from './../../components/Tiles/Tiles.jsx';
import Border from './../../components/Border/Border.jsx';
import Illustration from './../../components/Illustration/Illustration.jsx';
import Aim from './../../components/Aim/Aim.jsx';
import aim_img from './../../assets/img/aim.png';
import { aim } from './aim.js';
import { illustration } from './illustration.js';
import { tiles } from './tiles.js';

const Home = () => {
	useEffect(() => {
		document.title = 'Venera';
}, []);

	return (
		<main>
			<Banner 
				image={image} 
				name={'VENERA'} 
				text={'Revolutionizing the Music Industry with Smart Contracts and NFTs.'} />
			<Tiles 
				tiles={tiles} />
			<Border />
			<Illustration 
				illustration={illustration} 
				title={'Music in Web3: A New Era of Ownership, Distribution, and Monetization.'} />
			<Border />
			<Aim 
				aim={aim} 
				image={aim_img} 
				title={'Aims'} />
		</main>
	);
};

export default Home;
