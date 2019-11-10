import React, { Component } from 'react'
import CarparkGrid from './CarparkGrid';
import gridSeeder from '../../seedGrid'
import SimulatorButtons from '../Simulators/SimulatorButtons';

export default class Carpark extends Component {

    state = {
        busX: '',
        busY: '',
        busFace: '',
        isPlaced: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isPlaced && !this.state.isPlaced) {
            this.setState({ ...prevState, isPlaced: true,
    });
}
    }

    renderCarpark = () => {
        const { busX, busY, busFace, isPlaced } = this.state;
        return gridSeeder.map((it, i) => {
            const isBusPresent = (isPlaced && it.coOrdinate[0] === parseInt(busX)) && (it.coOrdinate[1] === parseInt(busY))
            return <CarparkGrid isBusPresent={ isBusPresent } key={ i } busFace={ busFace } />
        })

    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value),
            isPlaced: false
        });
    }

    handleDropDwn = (value) => {
        this.setState({ busFace: value, isPlaced: false });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const busFace = document.querySelector('.selection').innerText;
        const busFaceVal = busFace === 'Facing direction' ? 'EAST' : busFace;
        this.setState({
            busX: parseInt(document.getElementsByName('busX')[0].value),
            busY: parseInt(document.getElementsByName('busY')[0].value),
            busFace: busFaceVal,
            isPlaced: true
        });
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
        if (currentFace === 'EAST') return this.setState({ busFace: turn === 'RIGHT' ? `SOUTH` : `NORTH` })
        if (currentFace === 'WEST') return this.setState({ busFace: turn === 'RIGHT' ? `NORTH` : `SOUTH` });

    }

    handleReport = () => {
        const { busX, busY, busFace } = this.state;
        window.confirm(`Bus located at x:${busX} y:${busY} facing ${busFace}`);
    }

    render() {

        return (
            <>
                <SimulatorButtons
                    handleInputChange={ this.handleInputChange }
                    handleSubmit={ this.handleSubmit }
                    handleBusMove={ this.handleBusMove }
                    handleBusTurn={ this.handleBusTurn }
                    handleDropDwn={ this.handleDropDwn }
                    handleReport={ this.handleReport }
                    { ...this.state } />

                <div className="grid-container" style={ { marginTop: 300 } } >
                    { this.renderCarpark() }
                </div>
            </>
        )
    }
}
