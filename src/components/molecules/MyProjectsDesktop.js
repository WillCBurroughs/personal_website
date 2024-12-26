import '../../App.css';
import LatestProjects from '../atoms/LatestProjects';
import BlurProjects from '../atoms/BlurProjects';
import ProjectCard from './ProjectCard';

function MyProjectsDesktop(props) {
    return(
        <div className="homeProjectsSection">
            <div className='latestProject' id='projDesk'>
                <div className='spacer'></div>
                <LatestProjects/> 
            </div>
            
            <BlurProjects
                width = {100}
            />

            <ProjectCard/>
        </div>
    );
}

export default MyProjectsDesktop;

