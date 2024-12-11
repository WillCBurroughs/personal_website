import '../../App.css';
import LogoHeader from '../atoms/LogoHeader';
import LogoImage from '../atoms/LogoImage';
import ToggleLight from '../atoms/ToggleLight';

function NavBarDesktop(props) {
    return <>
        <div className="inlineContainer">
            <div className="logoContainer">
                <LogoImage />
            </div>
            <div className="holdHeaders">
                <LogoHeader headerText="HOME" />
                <LogoHeader headerText="PROJECTS" />
                <LogoHeader headerText="ABOUT" />
                <LogoHeader headerText="WRITING" />
                <LogoHeader headerText="CONTACT" />
            </div>
            <div className="toggleContainer">
                <ToggleLight />
            </div>
        </div>
    </>
}

export default NavBarDesktop;