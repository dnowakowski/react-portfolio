import React from 'react';

class Tag extends React.Component{
	constructor(props){
		super(props);

		this.passNameToManager = this.passNameToManager.bind(this);
		this.DOM = React.createRef();
	}

	render(){
		return(
			<div ref = {this.DOM} onClick = {this.passNameToManager} data-name = {this.props.data.name} className= {`tag tag-manager__tag ${this.props.data.active ? '' : 'tag--deactivated'} `} style = {{background: this.props.data.color}}>
				<label>
				{this.props.data.name}
				</label>
				{
				this.props.manager &&
				<span className="tag__exit">&times;</span>
				}
			</div>
		)	
	}

	passNameToManager(e){
		if(this.props.manager){	
			this.props.toggleTag(this.props.data.name.toLowerCase());
		}
	}

	componentDidUpdate(){
		this.props.data.active ? this.DOM.current.classList.remove('tag--deactivated') : this.DOM.current.classList.add('tag--deactivated')
		//this.DOM.current.classList.toggle('tag--deactivated');
	}
}

export default Tag;