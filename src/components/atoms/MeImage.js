import me from '../../images/me.png'
import '../../App.css'

function LogoImage() {
  return (
    <img src = {me} style={{ width: "25vw", opacity: 0.8 }}/>
  );
}

export default LogoImage;