import me from '../../images/me.png'
import '../../App.css'

function MeImageAbout() {
  return (
    <img src = {me} style={{ width: "25vw", opacity: 1, zIndex: 5 }}/>
  );
}

export default MeImageAbout;