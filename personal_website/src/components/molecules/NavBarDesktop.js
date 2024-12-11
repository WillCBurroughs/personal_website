import '../../App.css';
import LogoImage from '../atoms/LogoImage';
import ToggleLight from '../atoms/ToggleLight';
import { NavLink } from 'react-router-dom';

function NavBarDesktop(props) {
    return (
        <>
            <div className="inlineContainer">
                <div className="logoContainer">
                    <LogoImage />
                </div>
                <div className="holdHeaders">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "activeTab" : "inactiveTab"}
                    >
                        HOME
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }) => isActive ? "activeTab" : "inactiveTab"}
                    >
                        PROJECTS
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "activeTab" : "inactiveTab"}
                    >
                        ABOUT
                    </NavLink>
                    <NavLink 
                        to="/writing" 
                        className={({ isActive }) => isActive ? "activeTab" : "inactiveTab"}
                    >
                        WRITING
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? "activeTab" : "inactiveTab"}
                    >
                        CONTACT
                    </NavLink>
                </div>
                <div className="toggleContainer">
                    <ToggleLight />
                </div>
            </div>
        </>
    );
}

export default NavBarDesktop;