import me from '../../images/me.png'
import '../../App.css'

function LogoImage() {
  return (
    <img src = {me} width = {"400px"} style={{ opacity: 0.8 }}/>
  );
}

export default LogoImage;