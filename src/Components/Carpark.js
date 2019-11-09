import React, { Component } from 'react'
import CarparkGrid from './CarparkGrid';
import gridSeeder from '../seedGrid'
import SimulatorButtons from './SimulatorButtons';

export default class Carpark extends Component {

    state = {
        busX: '',
        busY: '',
        busFace: '',
        isPlaced: false
    }


    renderCarpark = () => {

        const { busX, busY, busFace, isPlaced } = this.state;

        return gridSeeder.map((it, i) => {
            const isBusPresent = (isPlaced && it.coOrdinate[0] === parseInt(busX)) && (it.coOrdinate[1] === parseInt(busY))
            return <CarparkGrid isBusPresent={ isBusPresent } key={ i } busFace={ busFace } />
        })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isPlaced: false
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            busX: parseInt(prevState.busX),
            busY: parseInt(prevState.busY),
            busFace: prevState.busFace ? prevState.busFace.toUpperCase() : 'EAST',
            isPlaced: true
        }))

    }

    handleBusMove = () => {
        const currentFace = this.state.busFace;
        if (currentFace === 'NORTH') return this.setState(prevState => ({ busY: prevState.busY + 1 }));
        if (currentFace === 'SOUTH') return this.setState(prevState => ({ busY: prevState.busY - 1 }));
        if (currentFace === 'EAST') return this.setState(prevState => ({ busX: prevState.busX + 1 }));
        if (currentFace === 'WEST') return this.setState(prevState => ({ busX: prevState.busX - 1 }));

    }


    handleBusTurn = (turn) => {
        const currentFace = this.state.busFace;
        if (currentFace === 'NORTH') return this.setState({ busFace: turn === 'RIGHT' ? `EAST` : `WEST` });
        if (currentFace === 'SOUTH') return this.setState({ busFace: turn === 'RIGHT' ? `WEST` : `EAST` });
        if (currentFace === 'EAST') return this.setState({ busFace: turn === 'RIGHT' ? `SOUTH` : `NORTH` });
        if (currentFace === 'WEST') return this.setState({ busFace: turn === 'RIGHT' ? `NORTH` : `SOUTH` });

    }


    render() {

        return (
            <>
                <SimulatorButtons handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } handleBusMove={ this.handleBusMove } handleBusTurn={ this.handleBusTurn } { ...this.state } />
                <div className="grid-container" >
                    { this.renderCarpark() }
                </div>
            </>
        )
    }
}
