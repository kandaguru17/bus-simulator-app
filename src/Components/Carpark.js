import React, { Component } from 'react'
import CarparkGrid from './CarparkGrid';
import gridSeeder from '../seedGrid'
import SimulatorButtons from './SimulatorButtons';

export default class Carpark extends Component {

    state = {
        busX: '',
        busY: '',
        busFace:'',
        isPlaced: false
    }


    renderCarpark = () => {

        const { busX, busY, busFace,isPlaced } = this.state;

        return gridSeeder.map((it, i) => {
            const isBusPresent = (it.coOrdinate[0] === parseInt(busX)) && (it.coOrdinate[1] === parseInt(busY) && isPlaced)
            return <CarparkGrid isBusPresent={ isBusPresent } key={ i } busFace={busFace} />
        })

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isPlaced:false
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevstate => ({ busX: prevstate.busX, busY: prevstate.busY, busFace:prevstate.busFace,isPlaced: true }))

    }

    render() {

        return (
            <>
                <SimulatorButtons handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
                <div className="grid-container">
                    { this.renderCarpark() }
                </div>
            </>
        )
    }
}
