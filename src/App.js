import React from 'react';
import {
	BrowserRouter as Router,
	Routes, Route as RouteElement,
	Link
} from 'react-router-dom';
import {
	Navbar, Nav,
	NavDropdown, Carousel
} from 'react-bootstrap';
import DestinationList
	from './components/DestinationList';
import DestinationDetail
	from './components/DestinationDetail';
import ContactForm
	from './components/ContactForm';

// Import the custom CSS file
import Travel from './components/Travel';
import Booking from './components/Booking';
import './App.css';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar className="custom-navbar" expand="lg">
					<Navbar.Brand className="brand-heading">
						THE HEART OF EUROPE
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Link to="/" className="nav-link">
								Home
							</Link>
							<Link to="/contact"
								className="nav-link">
								Contact
							</Link>
							<NavDropdown title="Explore"
								id="basic-nav-dropdown">
								<Link to="/travel"
									className="dropdown-item">
									Travel
								</Link>
								<Link to="/destinations"
									className="dropdown-item">
									Destinations
								</Link>
								<Link to="/experience"
									className="dropdown-item">
									Experience
								</Link>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/* Carousel */}
				<Carousel className="custom-carousel">
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src="/acce/prague-castle-fotolia-jpeg_header-142535.jpeg"
							alt="Prague Castle"/>
						<Carousel.Caption>
							<h3>Prague Castle</h3>
							<p>Explore the iconic castle and its stunning architecture.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src="/acce/dreamstime_xxl_151405329.jpg"
							alt="Český Krumlov"/>
						<Carousel.Caption>
							<h3>Český Krumlov</h3>
							<p>A fairy-tale town with a stunning castle and medieval charm.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src="/acce/karlstejn-town-03-czechia.jpg"
							alt="Karlštejn Castle"/>
						<Carousel.Caption>
							<h3>Karlštejn Castle</h3>
							<p>Discover the Gothic masterpiece protecting royal treasures.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src="/acce/bohemian-switzerland-national-park-attractions-hiking-guide-bastei-bridge.jpg"
							alt="Bohemian Switzerland"/>
						<Carousel.Caption>
							<h3>Bohemian Switzerland</h3>
							<p>Experience breathtaking sandstone formations and natural beauty.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<br />
				{/* Content of your app */}
				<Routes>
					<RouteElement path="/"
						element={<DestinationList />} />
					<RouteElement path="/destination/:id" element={<DestinationDetail />} />

					<RouteElement path="/contact"
						element={<ContactForm />} />

<RouteElement
                        path="/destinations"
                        element={<DestinationList />}
                    />
					<RouteElement path="/travel" element={<Travel />} />
					<RouteElement path="/book/:id" element={<Booking />} />

					{/* Add routes for travel, destinations, and experience */}
				</Routes>
				{/* Footer */}
				<div className="custom-footer">
					<div className="footer-section">
						<h3>Connect with us</h3>
						<ul className="social-links">
							<li><a href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer">
								Facebook
							</a>
							</li>
							<li><a href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer">
								Twitter
							</a>
							</li>
							<li><a href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer">
								Instagram
							</a>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<h3>Contact us</h3>
						<p>Email: workotuya@gmail.com</p>
						<p>Phone: +420 604 878 147</p>
					</div>
					<div className="footer-section">
						<h3>Newsletter</h3>
						<p>
							Subscribe to our newsletter
							for updates and offers.
						</p>
						<form>
							<input type="email" placeholder="Your email" />
							<button type="submit">Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
