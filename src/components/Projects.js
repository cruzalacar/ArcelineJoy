import React, {Component} from 'react';
import ProjectCard from './ProjectCard';



class Projects extends React.Component{
    
    render() {
        return (
            <div className="project-body">
                <h1 >The page displays some the projects I have worked on. Some of them are personal projects, while others school projects I have developed with a team.</h1>
                <div >
                    <ProjectCard 
                        title="This is my project for school" 
                        img="imgtest" 
                        lang="C# Python" 
                        tech="Visual Studio"
                        type="Personal Project"
                        desc="morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean" 
                        git={`https://github.com/cruzalacar/ArcelineJoy`}
                    />
                    <ProjectCard 
                        title="My C# Project with friends" 
                        img="imgtest" 
                        lang="langtest" 
                        tech="techtest"
                        type="Group Assignment"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
                        git="Link"
                    />
                    <ProjectCard 
                        title="My final iOS assignmet" 
                        img="imgtest" 
                        lang="langtest" 
                        tech="techtest"
                        type="Colabroation"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis. Viverra justo nec 
                            ultrices dui sapien eget mi proin sed." 
                        git="Link"
                    />
                </div>
            </div>
        );
    }
}

export default Projects;