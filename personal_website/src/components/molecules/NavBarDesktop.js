import '../../App.css';
import LogoHeader from '../atoms/LogoHeader';
import LogoImage from '../atoms/LogoImage';

function NavBarDesktop(props) {
    return <>
        <div className="inlineContainer">
            <div className="logoContainer">
                <LogoImage />
            </div>
            <LogoHeader headerText="Hello!" />
            <LogoHeader headerText="Hello!" />
            <LogoHeader headerText="Hello!" />
            <LogoHeader headerText="Hello!" />
        </div>
    </>
}

export default NavBarDesktop;