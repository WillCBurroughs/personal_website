import React from 'react';
import '../../App.css';

function projectImage(props) {
    return <img src = {props.image} width = {props.size} className='projectImage' />
}

export default projectImage;