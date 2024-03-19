import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgb(0,0,0)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Link to="/">
				<img
					src="/e747911f95d0867bc1af5215b18eb0c9.jpg"
					style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
				/>
			</Link>
		</div>
	);
};

export default NotFoundPage;
