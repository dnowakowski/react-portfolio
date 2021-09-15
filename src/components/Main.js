import React from 'react';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

class Main extends React.Component {

	render() {
		return (
			<main>
				<Header />
				<About />
				<Portfolio />
				<Contact />
			</main>
		)
	}

	componentDidMount() {
		window.addEventListener('load', this.loadedMain);

	}

	loadedMain = () => {
		let body = document.querySelector('body');
		body.classList.add('loaded');
		//setTimeout(() => {	//timeout for tests 
		this.props.showContent();
		//}, 500)
	}
}

export default Main;