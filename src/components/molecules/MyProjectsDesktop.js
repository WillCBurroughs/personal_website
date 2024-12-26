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
                width = {90}
            />

            <div className='projectRow'>
                <ProjectCard
                    title="The Space Project"
                    imageSrc={SpaceProject}
                    width="25vw"
                />
                <ProjectCard
                    title="The Space Project"
                    imageSrc={SpaceProject}
                    width="25vw"
                />
                <ProjectCard
                    title="The Space Project"
                    imageSrc={SpaceProject}
                    width="25vw"
                />
            </div>

            <div className='projectRow'>
                <ProjectCard
                    title="The Space Project"
                    imageSrc={SpaceProject}
                    width="25vw"
                />
                <ProjectCard
                    title="The Space Project"
                    imageSrc={SpaceProject}
                    width="25vw"
                />
                <ProjectCard
                    title="The Space Project"
                    imageSrc={SpaceProject}
                    width="25vw"
                />
            </div>

        </div>
    );
}

export default MyProjectsDesktop;

