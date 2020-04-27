import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerCarrinho = styled.div`
    justify-self: right;
    width: 100%;
    padding: 1vw;
    overflow: hidden;
    border: 1px solid black;
    border-image: initial;

    ul {
        list-style: none;
    }
`

export default class Carrinho extends Component {
    render() {
        return (
            <ContainerCarrinho>
                <h2>Carrinho:</h2>
                <ul>
                    {this.props.produtos}
                </ul>
                <p>
                    {"Total: "}
                    <strong>
                        {'R$ '}
                        {this.props.total}
                    </strong>
                </p>
            </ContainerCarrinho>
        )
    }
}