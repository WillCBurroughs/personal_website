import React from "react";
import Coding from "../../images/Coding.svg"
import CodingDecoration from "../../images/CodingDecoration.svg"

function HomeHeroRight() {

    return (
        <div className="homeHeroRightDiv">
            <div className="imageContainer">
                <img src={Coding} alt="Main Image" className="mainImage" />
                <img src={CodingDecoration} alt="Decoration" className="overlayImage" />
            </div>
        </div>
    );
}

export default HomeHeroRight;