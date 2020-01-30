import React from 'react';
import './css/projects.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <div>
                <div className="project-box">
                    <div className="project-body-left">
                        <img className="project-img"></img> 
                    </div>
                    <div className="project-body-right">
                        <div className="project-header">{this.props.title}</div>
                        <div className="project-labels-right">Programming Language</div>
                        <div className="project-text-right">{this.props.lang}</div>
                        <div className="project-labels-right">Technologies</div>
                        <div className="project-text-right">{this.props.tech}</div>
                    </div>
                    <div className="project-body-bottom">
                        <div className="project-text-bottom">{this.props.desc}</div>
                        <div className="project-text-bottom">{this.props.git}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;