import mouseScroll from '../../images/mouseScroll.svg'
import '../../App.css'

function MouseDownHeader() {
  return (
    <img className = "mouseDown" src = {mouseScroll} width = {"18px"} />
  );
}

export default MouseDownHeader;