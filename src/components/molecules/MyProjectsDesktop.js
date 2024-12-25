import '../../App.css';
import LatestProjects from '../atoms/LatestProjects';
import BlurProjects from '../atoms/BlurProjects';

function MyProjectsDesktop(props) {
    return(
        <div className="homeProjectsSection">
            <LatestProjects/> 
            <BlurProjects
                width = {100}
            />
        </div>
    );
}

export default MyProjectsDesktop;

