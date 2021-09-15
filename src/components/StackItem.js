import React from 'react';
import Photo from './Photo';

class StackItem extends React.Component{
	render(){
		return(
				<div className="stack__item">
					<Photo src = {`gallery/${this.props.imgSrc}`}/>
					<h3>{this.props.name}</h3>
				</div>
		)
	}
}

export default StackItem;