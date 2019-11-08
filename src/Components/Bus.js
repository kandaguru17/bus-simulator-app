import React, { Component } from 'react';
import '../stylesheets/Bus.css';

export default class Bus extends Component {

    IMG_CDN='https://previews.123rf.com/images/anatolir/anatolir1809/anatolir180901705/108152491-top-view-school-bus-icon-flat-illustration-of-top-view-school-bus-vector-icon-for-web-design.jpg'
  
    render() {
       const busFaceClasses={
        NORTH:'bus-north',
        SOUTH:'bus-south',
        EAST:'bus-east',
        WEST:'bus-west'
       }

       const face=busFaceClasses[this.props.busFace];
        return (
            <img  className={`${face}`} src={`${this.IMG_CDN}`} style={ { height: '150px', width: '150px' } }></img>
        )
    }
}
