import me from '../../images/me.png'
import '../../App.css'

function MeImageAbout() {
  return (
    <img src = {me} style={{ width: "33vw", opacity: 0.7, zIndex: 5 }}/>
  );
}

export default MeImageAbout;