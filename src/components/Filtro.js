import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
`

export default class Filtro extends Component {
    render() {
        return (
            <Container>
                <h2>Filtros:</h2>
                <label forHTML={"valor-minimo"}>Valor Mínimo:</label>
                <input type={"number"} name={"valor-minimo"} value={this.props.valorMinimo} onChange={this.props.onChangeMinimo} />
                <label forHTML={"valor-maximo"}>Valor Máximo:</label>
                <input type={"number"} name={"valor-maximo"} value={this.props.valorMaximo} onChange={this.props.onChangeMaximo} />
                <label forHTML={"buscar-produto"}>Buscar produto:</label>
                <input type={"text"} name={"buscar-produto"} value={this.props.valorBuscar} onChange={this.props.onChangeBuscar} />
            </Container>
        )
    }
}