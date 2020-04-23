import React from 'react';
import styled from 'styled-components'

const ContainerProdutos = styled.div`
  border-image: initial;
  border: 1px dashed orange;
  padding: 1vh;
`

const BotaoAdicionaCarrinho = styled.button`
  color: white;
  width: 100%;
  margin: 0px auto;
  background: black;
  border: unset;
  padding: 10px;
`

class CardProduto extends React.Component {
  render() {
    return (
      <ContainerProdutos>
        <img src={this.props.urlImagem} alt={"imagem-produto"} />
        <p>{this.props.nome}</p>
        <p>
          {'R$ '}
          {this.props.preco}
        </p>
        <BotaoAdicionaCarrinho>Adicionar ao Carrinho</BotaoAdicionaCarrinho>
      </ContainerProdutos>
    );
  }
}

export default CardProduto;