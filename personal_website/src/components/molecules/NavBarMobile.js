import '../../App.css';
import LogoImage from '../atoms/LogoImage';
import ToggleLight from '../atoms/ToggleLight';
import { NavLink } from 'react-router-dom';

function NavBarDesktop(props) {
    return (
        <>
            <div className="inlineContainer">
                <div className="logoContainerM">
                    <LogoImage />
                </div>
                <div className="mobileDropdown">
                    <h2 className='mobileDropdownLink'>Menu</h2>
                    <span className="menu-arrow"></span>
                </div>
            </div>
        </>
    );
}

export default NavBarDesktop;