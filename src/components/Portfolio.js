import React from 'react';
import portfolioProjects from '../data/portfolioProjects.js'
import PortfolioProject from './PortfolioProject';
import TagManager from './TagManager';
import tags from '../data/tagList.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags
		};

		this.toggleTag = this.toggleTag.bind(this);
	}


	render() {
		return (
			<div className="portfolio">
				<TagManager tags={tags} toggleTag={this.toggleTag} />
				<div className="portfolio__container">
					<h2>Portfolio</h2>
					<TransitionGroup component="ul" className="portfolio__grid">
						{
							portfolioProjects.map((item, i) => {
								return this.renderProject(item, i)
							})
						}
					</TransitionGroup>
				</div>
			</div>
		)
	}

	renderProject(item, i) {
		let anyTag = false;
		for (let j = 0; j < this.state.tags.length; j += 1) {
			let tagChecked = this.state.tags[j];
			if (item.tags.includes(tagChecked.name.toLowerCase()) && tagChecked.active) {
				anyTag = true;
			}
		}
		//if(anyTag){
		return (
			anyTag && <CSSTransition
				classNames="portfolio__project"
				key={item.name}
				timeout={{ enter: 600, exit: 600 }}
			>
				<PortfolioProject allTags={tags} show={anyTag} data={item} />
			</CSSTransition>
		)
		//}
	}

	toggleTag(tagName) {
		let newTags = this.state.tags;
		for (let i = 0; i < newTags.length; i += 1) {
			if (newTags[i].name.toLowerCase() === tagName) {
				newTags[i].active = !newTags[i].active;
			}
		}


		this.setState((state) => {
			return { tags: newTags }
		});
	}

}

export default Portfolio;