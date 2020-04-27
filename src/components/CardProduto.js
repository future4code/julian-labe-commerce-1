import React from 'react';
import styled from 'styled-components'

const ContainerProdutos = styled.div`
  border-image: initial;
  border: 1px dotted black;
  padding: 1vh;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`
const Imagem = styled.img`
  width: 100%
`

const BotaoAdicionaCarrinho = styled.button`
  color: white;
  width: 100%;
  margin: 0px auto;
  background: black;
  border: unset;
  padding: 10px;
`

const CardProduto = (props) => {

  return (
    <ContainerProdutos>
      <Imagem src={props.urlImagem} alt={"imagem-produto"} />
      <p>{props.nome}</p>
      <p>
        {'R$ '}
        {props.preco}
      </p>
      <BotaoAdicionaCarrinho onClick={() => props.adicionarAoCarrinho(props.id, props.nome, props.preco)}>Adicionar ao Carrinho</BotaoAdicionaCarrinho>
    </ContainerProdutos>
  );
}

export default CardProduto;