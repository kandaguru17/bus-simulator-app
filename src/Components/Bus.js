import React, { Component } from 'react';
import '../stylesheets/Bus.css';

export default class Bus extends Component {

    IMG_CDN = 'https://res.cloudinary.com/dyzh4obz4/image/upload/v1573298155/bus_gecxxn.png';

    render() {
        
        const busFaceClasses = {
            NORTH: 'bus-north',
            SOUTH: 'bus-south',
            EAST: 'bus-east',
            WEST: 'bus-west'
        }

        const face = busFaceClasses[this.props.busFace];
        return (
            <img className={ `${face}` } src={ `${this.IMG_CDN}` } style={ { width: '200px', height: '90px' } } alt='bus'></img>
        )
    }
}
