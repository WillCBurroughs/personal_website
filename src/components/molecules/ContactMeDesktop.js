import React from "react";
import '../../App.css';
import BlueBlot from "../atoms/BlueBlot";

function ContactMeDesktop() {
    return (
        <div className="contactMeHolder">
            {/* Three Blurs on page */}
            <div className="blurHolder">
                <BlueBlot id={"blueBlot1"} width={60} top={65} left={20} />
                <BlueBlot id={"blueBlot2"} width={50} top={10} left={-35} />
                <BlueBlot id={"blueBlot3"} width={50} top={0} left={80} />
            </div>
            <div className="holdForm">

            </div>
        </div>
    );
}

export default ContactMeDesktop;