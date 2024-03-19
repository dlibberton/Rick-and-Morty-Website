import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CharactersPage = () => {
	const [charactersData, setCharactersData] = useState(null);
	const [characterDetails, setCharacterDetails] = useState([]);

	const navigate = useNavigate();

	const gotoCharacter = (id) => {
		const routeToCharacter = `/character/${id}/`;
		navigate(routeToCharacter);
	};

	useEffect(() => {
		getCharactersData()
			.then((data) => {
				setCharactersData(data);
				// Extracting character details
				const details = data.results.map((character) => ({
					id: character.id,
					image: character.image,
					species: character.species,
					status: character.status,
				}));
				setCharacterDetails(details);
			})
			.catch((error) => {
				console.error('Error fetching Characters:', error);
			});
	}, []);

	const getCharactersData = async () => {
		try {
			const response = await axios.get(
				'https://rickandmortyapi.com/api/character'
			);
			return response.data;
		} catch (error) {
			throw new Error(`Failed to fetch Characters`);
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
			{/* Conditional Rendering */}
			{charactersData && (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					{characterDetails.map((character) => (
						<Card
							key={character.id}
							style={{
								width: '125px',
								margin: '10px',
								backgroundColor: 'rgb(208,17,43)',
								color: 'white',
							}}
							onClick={() => gotoCharacter(character.id)}
						>
							<Card.Img variant="top" src={character.image} />
							<Card.Body>
								<Card.Title>{character.name}</Card.Title>
								<Card.Text>{character.species}</Card.Text>
							</Card.Body>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};

export default CharactersPage;
