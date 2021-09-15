import React from 'react';
import Photo from './Photo';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact">
				<h4>Contact me</h4>

				<div className="contact__grid">

					<div className="contact__item">
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/dnowakowski">
							<Photo src="gallery/GitHub-Mark-64px.png" />
						</a>
					</div>

					<div className="contact__item">
						<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/d-nowakowski/" >
							<Photo src="gallery/In-2C-66px-R.png" />
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;