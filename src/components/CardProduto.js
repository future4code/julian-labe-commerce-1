import React from 'react';
import styled from 'styled-components'

const ContainerVideos = styled.div `
  border: 1px dashed orange;
  padding: 5px;
  max-width: 18vw;
`

class CardProduto extends React.Component {
  render() {
    return (
      <ContainerVideos>
        <img src={this.props.urlImagem} alt={"imagem-produto"} />
        <p>{this.props.nome}</p>
        <p>{this.props.preco}</p>
        <button>Adicionar ao Carrinho</button>
      </ContainerVideos>
    );
  }
}

export default CardProduto;