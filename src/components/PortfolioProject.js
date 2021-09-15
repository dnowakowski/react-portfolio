import React from 'react';
import Photo from './Photo';
import Tag from './Tag';


class PortfolioProject extends React.Component {
	constructor(props) {
		super(props);
		this.projectTags = this.getProjectTags();

	}
	render() {
		return (
			<li className="portfolio__project">
				<h4>{this.props.data.name}</h4>
				{this.props.data.screen && <Photo src={`gallery/projectsSnaps/${this.props.data.screen}`} />}
				<div className="project__tags">
					{
						this.projectTags.map((tag, i) => {
							return <Tag key={i} data={tag} />
						})
					}
				</div>
				<p>{this.props.data.description}</p>
				{this.props.data.github.length > 0 && <a target="_blank" rel="noopener noreferrer" href={`https://${this.props.data.github}`}>
					<div className="githubContainer">
						<Photo src="gallery/GitHub-Mark-64px.png" />
					</div>
				</a>
				}
				{this.props.data.demo &&
					<div className="project__demo">
						<a target="_blank" rel="noopener noreferrer" href={`https://${this.props.data.demo}`}>Demo!</a>
					</div>
				}
			</li>
		)
	}

	getProjectTags() {
		let projectTags = [];
		let allTags = this.props.allTags;
		this.props.data.tags.forEach(tag => {
			for (let i = 0; i < allTags.length; i += 1) {
				if (tag.toLowerCase() === allTags[i].name.toLowerCase()) {
					projectTags.push(allTags[i]);
				}
			}
		});
		return projectTags;
	}

	setProjectTags(tags) {
		this.projectTags = tags;
	}

}

export default PortfolioProject;