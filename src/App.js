import React from 'react';
import CardProduto from './components/CardProduto.js'
import styled from 'styled-components'
import Filtro from './components/Filtro';
import carrinho from './imagens/carrinho.png'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 3fr;
  padding: 1vw;
  gap: 1vw;
`

const Filtros = styled.div`
  min-height: 60vh;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 1vh;
`

const Section = styled.div`
  padding: 1vh;
`

const Header = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 2vh;
`

const Produtos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1vw;
`

const BotaoCarrinho = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.5s ease 0s;

  img {
    width: 7vh;
  }
`

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        imagem: "https://picsum.photos/240/240?a=1",
        nome: "Item A",
        preco: '199.00'
      },
      {
        id: 2,
        imagem: "https://picsum.photos/240/240?a=2",
        nome: "Item B",
        preco: '55.90'
      },
      {
        id: 3,
        imagem: "https://picsum.photos/240/240?a=3",
        nome: "Item C",
        preco: '99.00'
      },
      {
        id: 4,
        imagem: "https://picsum.photos/240/240?a=4",
        nome: "Item D",
        preco: '80.00'
      },
      {
        id: 5,
        imagem: "https://picsum.photos/240/240?a=5",
        nome: "Item E",
        preco: '40.50'
      },
      {
        id: 6,
        imagem: "https://picsum.photos/240/240?a=7",
        nome: "Item F",
        preco: '499.99'
      },
      {
        id: 7,
        imagem: "https://picsum.photos/240/240?a=8",
        nome: "Item G",
        preco: '501.00'
      },
      {
        id: 8,
        imagem: "https://picsum.photos/240/240?a=1",
        nome: "Item H",
        preco: '210.00'
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
    const listaMaioresQueMinimo = this.state.produtos.filter(produto => {
      if (this.state.valorInputMinimo === "") {
        return true;
      } else {
        return produto.preco > this.state.valorInputMinimo;
      }
    });

    const listaMenoresQueMaximo = this.state.produtos.filter(produto => {
      if (this.state.valorInputMaximo === "") {
        return true;
      } else {
        return produto.preco < this.state.valorInputMaximo;
      }
    });

    const listaBusca = this.state.produtos.filter(produto => {
      return produto.nome.toLowerCase().indexOf(this.state.valorInputBuscar.toLowerCase()) !== -1;
    })
    console.log(listaBusca)
    const listaDeProdutos = listaBusca.filter(produto => {
      return (listaMaioresQueMinimo.indexOf(produto) !== -1) && (listaMenoresQueMaximo.indexOf(produto) !== -1);
    });

    return listaDeProdutos;
  }

  render() {
    const listaProdutos = this.definelistaProdutos().map(produto => {
      return (
        <CardProduto key={produto.nome}
          urlImagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
        />
      )
    })

    return (
      <Container>
        <Filtros>
          <Filtro
            valorMinimo={this.state.valorInputMinimo}
            onChangeMinimo={this.onChangeInputMinimo}
            valorMaximo={this.state.valorInputMaximo}
            onChangeMaximo={this.onChangeInputMaximo}
            valorBuscar={this.state.valorInputBuscar}
            onChangeBuscar={this.onChangeInputBuscar}
          />
        </Filtros>
        <Section>
          <Header>
            <p>
              {'Quantidade de Produtos: '}
              {listaProdutos.length}
            </p>
            <select>
              <option value="crescente">Preço: Crescente</option>
              <option value="decrescente">Preço: Decrescente</option>
            </select>
          </Header>
          <Produtos>
            {listaProdutos}
          </Produtos>
        </Section>
        <BotaoCarrinho>
          <img alt="icone-carrinho" src={carrinho} />
        </BotaoCarrinho>
      </Container>
    );
  }
}

export default App;