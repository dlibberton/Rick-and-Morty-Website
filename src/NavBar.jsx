//nav bar that goes on all apges goes here, import into app/ display instead of h1
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const CustomNavBar = () => {
	return (
		<>
			<Navbar className="navbar sticky-top navbar-light bg-light navbar-expand-lg justify-content-between">
				<Container fluid>
					<Row className="justify-content-center">
						<Col className="text-center">
							<Link className="navbar-brand" to="/">
								Home
							</Link>
						</Col>
						<Col className="text-center">
							<Link className="navbar-brand" to="about/">
								About
							</Link>
						</Col>
						<Col className="text-center">
							<Link className="navbar-brand" to="characters/">
								Characters
							</Link>
						</Col>
					</Row>
				</Container>
			</Navbar>
		</>
	);
};

export default CustomNavBar;
