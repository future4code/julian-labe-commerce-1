import React from 'react';
import CardProduto from './components/CardProduto.js'

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
    ]
  }

  render() {
    const listaProdutos = this.state.produtos.map (produto => {
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
        <div>
          <p>
            
          </p>
        </div>
        <div>{listaProdutos}</div>
      </div>
    );
  }
}

export default App;