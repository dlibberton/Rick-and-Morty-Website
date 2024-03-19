import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutPage = () => {
	const [showDescription, setShowDescription] = useState('');

	useEffect(() => {
		getShowDescription()
			.then((description) => {
				setShowDescription(description);
			})
			.catch((error) => {
				console.error('Error fetching show description:', error);
			});
	}, []);

	const getShowDescription = async () => {
		try {
			const response = await axios.get(
				'https://en.wikipedia.org/api/rest_v1/page/summary/Rick_and_Morty'
			);
			return response.data.extract;
		} catch (error) {
			throw new Error(`Failed to fetch show description`);
		}
	};

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgb(24,24,24)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ marginTop: '20px', color: 'white', maxWidth: '90%' }}>
				<h2>Rick and Morty</h2>
				<p>{showDescription}</p>
			</div>
		</div>
	);
};

export default AboutPage;
