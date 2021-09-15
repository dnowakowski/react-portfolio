import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<img className="photo--circle" src={require("../me.png").default} alt="" />
				<h1>Damian Nowakowski</h1>
				<h2>Game Developer at Woodland Games & Hobbyist Javascript Developer</h2>
				<a href="#">↓</a>
			</header>
		)
	}
}

export default Header;