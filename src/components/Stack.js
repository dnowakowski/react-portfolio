import React from 'react';
import StackItem from './StackItem';
import stackItems from '../data/stackItems.js'

class Stack extends React.Component{
	render(){
		return(
			<React.Fragment>
			<h2>My Stack</h2>
				<div className="stack">
				{
					stackItems.map( (item, i) => {
						return <StackItem key = {item.imgSrc} name = {item.name} stackDescription = {item.description} imgSrc ={item.imgSrc} />
					})
				}
				</div>
			</React.Fragment>
		)
	}

}

export default Stack;