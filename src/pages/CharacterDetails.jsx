import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
	const [character, setCharacterData] = useState({});
	const { id } = useParams();

	const getCharacter = async () => {
		let response = await axios.get(
			`https://rickandmortyapi.com/api/character/${id}`
		);
		setCharacterData(response.data);
	};

	useEffect(() => {
		getCharacter();
	}, []);

	const { name, image, species, status } = character;
	return (
		<>
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
				<h1>Name: {name}</h1>
				<h2>
					Details: {species} {status}
				</h2>
				<img src={image}></img>
			</div>
		</>
	);
};
export default CharacterDetails;
