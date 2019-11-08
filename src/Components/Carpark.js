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
            //isPlaced: true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevstate => ({
            busX: parseInt(prevstate.busX),
            busY: parseInt(prevstate.busY),
            busFace: prevstate.busFace.toUpperCase(),
            isPlaced: true
        }))

    }

    handleBusMove = () => {
        const currentFace = this.state.busFace;
        console.log(currentFace);
        if (currentFace === 'NORTH') return this.setState(prevState => ({ busY: prevState.busY + 1 }));
        if (currentFace === 'SOUTH') return this.setState(prevState => ({ busY: prevState.busY - 1 }));
        if (currentFace === 'EAST') return this.setState(prevState => ({ busX: prevState.busX + 1 }));
        if (currentFace === 'WEST') return this.setState(prevState => ({ busX: prevState.busX - 1 }));

    }


    handleOutofBoundException = () => {
        const { busX, busY } = this.state;
        if (busX > 4 || busY > 4)
            return alert('this is wrong!!')

    }


    render() {

        return (
            <>
                <SimulatorButtons handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } handleBusMove={ this.handleBusMove } {...this.state} />
                <div className="grid-container" >
                    { this.renderCarpark() }
                </div>
            </>
        )
    }
}
