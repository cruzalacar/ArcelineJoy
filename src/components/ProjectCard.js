import React from 'react';
import './css/projects.css';

class ProjectCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { git: ''};
        this.onClickGit = this.onClickGit.bind(this);

    }

    onClickGit() {
        const url = this.props.git;
        window.open(url);
    }

    render() {
        console.log(this.props.img);
        return (
            <div>
                <div className="project-box">
                    <div className="project-body-left">
                        <img className="project-img" width='670px' height='500px' src={this.props.img} />
                        
                    </div>
                    <div className="project-body-right">
                        <div className="project-header">{this.props.title}</div>
                        <div className="project-labels-right">Programming Language</div>
                        <div className="project-text-right">{this.props.lang}</div>
                        <div className="project-labels-right">Technologies</div>
                        <div className="project-text-right">{this.props.tech}</div>
                        <div className="project-labels-right">Type</div>
                        <div className="project-text-right">{this.props.type}</div>
                    </div>
                    <div className="project-body-bottom">
                        <div className="project-text-bottom">{this.props.desc}</div>
                        <button className="project-button" onClick={this.onClickGit}>
                                Github Repository
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;