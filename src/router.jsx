import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import AboutPage from './pages/AboutPage';
import CharacterDetails from './pages/CharacterDetails';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'characters/',
				element: <CharactersPage />,
			},
			{
				path: 'about/',
				element: <AboutPage />,
			},
			{
				path: 'character/:id/',
				element: <CharacterDetails />,
			},
		],
		errorElement: <NotFoundPage />,
	},
]);

export default router;
