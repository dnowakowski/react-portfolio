import React from 'react';
import Tag from './Tag';

class TagManger extends React.Component{
	constructor(props){
		super(props)

		this.toggleTag = this.toggleTag.bind(this);
	}

	render(){
		return(
			<div className="portfolio__tag-manager">
			{
				this.props.tags.map( (tag, i) => {
					return <Tag toggleTag = {this.toggleTag} key = {i} data = {tag} manager = {true}/>
				})
			}
			</div>
		)
	}

	toggleTag(name){
		this.props.toggleTag(name);
	}
}

export default TagManger;