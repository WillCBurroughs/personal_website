import React from "react";
import '../../App.css';
import BlueBlot from "../atoms/BlueBlot";

function ContactMeDesktop() {
    return (
        <div className="contactMeHolder">
            {/* Three Blurs on page */}
            <BlueBlot id={"blueBlot1"} width={60} top={390} left={22} />
            <BlueBlot id={"blueBlot2"} width={50} top={330} left={-35} />
            <BlueBlot id={"blueBlot3"} width={50} top={320} left={85} />
        </div>
    );
}

export default ContactMeDesktop;