import React from 'react';
import styled from 'styled-components';
import CardProduto from './components/CardProduto.js'
import Filtro from './components/Filtro';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1vw;
  gap: 2vw;
`

class App extends React.Component {

  state = {
    produtos: [
      {
        imagem: "https://picsum.photos/300/150?a=1",
        nome: "Item A",
        preco: 199.00 
      },
      {
        imagem: "https://picsum.photos/300/150?a=2",
        nome: "Item B",
        preco: 55.90 
      },
      {
        imagem: "https://picsum.photos/300/150?a=3",
        nome: "Item C",
        preco: 99.00 
      },
      {
        imagem: "https://picsum.photos/300/150?a=4",
        nome: "Item D",
        preco: 80.00 
      },
      {
        imagem: "https://picsum.photos/300/150?a=5",
        nome: "Item E",
        preco: 40.50 
      },
      {
        imagem: "https://picsum.photos/300/150?a=7",
        nome: "Item F",
        preco: 499.99 
      },
      {
        imagem: "https://picsum.photos/300/150?a=8",
        nome: "Item G",
        preco: 501.00 
      },
      {
        imagem: "https://picsum.photos/300/150?a=1",
        nome: "Item H",
        preco: 210.00 
      }
    ],

    valorInputMinimo: "",
    valorInputMaximo: "",
    valorInputBuscar: ""
  }

  onChangeInputMinimo = (event) => {
    this.setState({
      valorInputMinimo: event.target.value,
    });
  }

  onChangeInputMaximo = (event) => {
    this.setState({
      valorInputMaximo: event.target.value,
    });
  }

  onChangeInputBuscar = (event) => {
    this.setState({
      valorInputBuscar: event.target.value
    });
  }

  definelistaProdutos = () => {
    const listaMaioresQueMinimo = this.state.produtos.filter( produto => {
      if(this.state.valorInputMinimo === "") {
        return true;
      } else {
          return produto.preco > this.state.valorInputMinimo;
      }
    });

    const listaMenoresQueMaximo = this.state.produtos.filter( produto => {
      if(this.state.valorInputMaximo === "") {
        return true;
      } else {
          return produto.preco < this.state.valorInputMaximo;
      }
    });

    const listaBusca = this.state.produtos.filter( produto => {
      return produto.nome.toLowerCase().indexOf(this.state.valorInputBuscar.toLowerCase()) !== -1;
    })
    console.log(listaBusca)
    const listaDeProdutos = listaBusca.filter( produto => {
      return (listaMaioresQueMinimo.indexOf(produto) !== -1) && (listaMenoresQueMaximo.indexOf(produto) !== -1);
    });

    return listaDeProdutos;
  }

  render() {
    const listaProdutos = this.definelistaProdutos().map (produto => {
      return (
        <CardProduto key = {produto.nome}
          urlImagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
        />
      )
    })

    return (
      <div>
        <Container>
          <Filtro
            valorMinimo={this.state.valorInputMinimo}
            onChangeMinimo={this.onChangeInputMinimo}
            valorMaximo={this.state.valorInputMaximo}
            onChangeMaximo={this.onChangeInputMaximo}
            valorBuscar={this.state.valorInputBuscar}
            onChangeBuscar={this.onChangeInputBuscar}
          />
          <div>
            <p>
              
            </p>
          </div>
          <div>{listaProdutos}</div>
        </Container>
      </div>
    );
  }
}

export default App;