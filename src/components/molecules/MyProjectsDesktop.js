import '../../App.css';
import LatestProjects from '../atoms/LatestProjects';
import BlurProjects from '../atoms/BlurProjects';
import ProjectCard from './ProjectCard';
import SpaceProject from '../../images/SpaceProject.svg'

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

            <ProjectCard
                title="The Space Project"
                imageSrc={SpaceProject}
                width="400px"
            />
        </div>
    );
}

export default MyProjectsDesktop;

