import React, {Component} from 'react';
import ProjectCard from './ProjectCard';


class Projects extends React.Component{
    render() {
        return (
            <div className="project-body">
                <h1 >Work in progress</h1>
                <div >
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        );
    }
}

export default Projects;