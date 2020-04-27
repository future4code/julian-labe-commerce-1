import React from 'react';
import styled from 'styled-components'

const Item = styled.li `
    margin: 10px 0px;
    border-bottom: 1px dashed black;
    padding: 5px 0px;
`

class ItemCarrinho extends React.Component {
    render() {
        return (
            <Item>
                {this.props.contador}
                {'x '}
                {this.props.nome}
                <span>X</span>
            </Item>
        )
    }
}

export default ItemCarrinho