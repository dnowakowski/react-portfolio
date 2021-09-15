import React from 'react';

class Photo extends React.Component {
	render() {
		return (
			<img className="photo" src={require(`../../public/${this.props.src}`).default} alt="" />
		)
	}
}

export default Photo;