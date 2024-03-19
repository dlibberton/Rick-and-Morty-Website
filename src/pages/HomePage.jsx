const HomePage = () => {
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
			<img
				src="/rick-and-morty-1920x1080-2filswm7wg57ne8a.jpg"
				alt="Description of the image"
				style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
			/>
		</div>
	);
};

export default HomePage;
