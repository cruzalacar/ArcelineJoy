import React from 'react';
import './css/projects.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <div>
                <div className="project-box">
                    <img className="project-box-img"  />
                    <div className="project-box-content">
                        <h1>Title</h1>
                        <h1>Languages/Technologies</h1>
                        <h1>Description</h1>
                        <h1>Github Link</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;