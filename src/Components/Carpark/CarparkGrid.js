import React, { Component } from 'react';
import '../../stylesheets/CarparkGrid.css'
import Bus from '../Bus/Bus';

export default class CarparkGrid extends Component {

    render() {
        const { isBusPresent, busFace } = this.props;
        return (
            <div className="grid-item" >
                { isBusPresent ? <Bus busFace={ busFace } /> : '' }
            </div>
        )
    }
}
