import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import Pro1 from "../images/projectimg/notemaker.jpg";
import Pro2 from "../images/bgimg-2.jpeg";
import Pro3 from "../images/bgimg-3.jpeg";



class Projects extends React.Component{
    
    render() {
        return (
            <div className="project-body">
                <h1 >The page displays some the projects I have worked on. Some of them are personal projects, while others school projects I have developed with a team.</h1>
                <div >
                    <ProjectCard 
                        title="Note Maker" 
                        img={Pro1}
                        lang="Swift" 
                        tech="SQLite, AVFoundation, CoreLocation, MapKit, QuartzCore, SpriteKit, WatchConnectivity"
                        type="Group Project"
                        desc="This App allows a user to create notes that can be customized to with reminders, locations and photos. The app utilizes built-in iOS framworks to access the GPS, Camera, Webpage navigation and is able to send reminders to user using Apple watch." 
                        git={`https://github.com/cruzalacar/NoteMaker`}
                    />
                    <ProjectCard 
                        title="ABC Bookstore" 
                        img={Pro2}
                        lang="C#, JavaScript" 
                        tech="ASP.NET Web forms, Visual Studios, MS SQL Server"
                        type="School Assignment"
                        desc="Platform which allows users to view and filter books in the database with the option to add, delete and edit." 
                        git={`https://github.com/cruzalacar/ABCBookStore`}
                    />
                    <ProjectCard 
                        title="Python Word Counter" 
                        img={Pro3}
                        lang="Python" 
                        tech="techtest"
                        type="Personal Project"
                        desc="This script is able to take a text document from a user's input and return the the number of words it contains. The goal is to be able to return the 10 most common words found in the text file as a list." 
                        git={`https://github.com/cruzalacar/PythonWordCounter`}
                    />
                </div>
            </div>
        );
    }
}

export default Projects;