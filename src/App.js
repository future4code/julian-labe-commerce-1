import React from 'react';
import styled from 'styled-components';
import CardProduto from './components/CardProduto.js'
import Filtro from './components/Filtro';
import IconeCarrinho from './imagens/carrinho.png'
import Carrinho from './components/Carrinho.js';
import ItemCarrinho from './components/ItemCarrinho.js'

const Container = styled.div`
  .true {
    display: grid;
    padding: 1vw;
    gap: 2vw;
    grid-template-columns: 1fr 3fr 1fr;
  }

  .false {
    display: grid;
    padding: 1vw;
    gap: 2vw;
    grid-template-columns: 1fr 3fr;
  }
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
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/417533/2/417533241_1GG.jpg",
        nome: "Placas Decorativas Espaço Sideral 20x30cm Kit 4un",
        preco: 59.90
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1347779/6/1347779607_1GG.jpg",
        nome: "Relógio De Parede Galáxias Astronomia Espaço Sideral",
        preco: 46.80
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/23936/3/23936341_1GG.jpg",
        nome: "Foguete De Papelão - Eu Amo Papelão",
        preco: 169.90
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1196989/6/1196989690_1GG.jpg",
        nome: "Foguete magnético montado metal",
        preco: 359.99
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/19780/9/19780933_1GG.jpg",
        nome: "Ônibus Espacial Discovery + Foguetes",
        preco: 634.13
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/42562/8/42562852_1GG.jpg",
        nome: "Luminária Pendente Foguete - Usare Design",
        preco: 943.10
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/52203/8/52203827_1GG.jpg",
        nome: "Luminaria 3D Touch Lua Cheia Abajur LED Decoracao USB",
        preco: 57.88
      },
      {
        id: Date.now(),
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img4/172851/3/172851362_1GG.jpg",
        nome: "Caneca Nasa Logotipo Foguete Apolo 11 Agência Espacial",
        preco: 24.99
      }
    ],

    valorInputMinimo: "",
    valorInputMaximo: "",
    valorInputBuscar: "",
    valorSelect: "crescente",
    carrinhoNaTela: false,
    produtosCarrinho: [],
    valorTotal: 0.00
  }

  adicionarAoCarrinho = (produtoId, nomeProduto, precoProduto) => {
    const novoProdutoNoCarrinho = {
      id: produtoId,
      nome: nomeProduto,
      preco: precoProduto,
      contador: 0
    }

      const copiaProdutosCarrinho = [...this.state.produtosCarrinho, novoProdutoNoCarrinho]

      copiaProdutosCarrinho.forEach((produto) => {
        this.setState({ valorTotal: this.state.valorTotal + produto.preco })
        if (produto.id === produtoId) {
          produto.contador += 1
        }
      })

      this.setState({
        produtosCarrinho: copiaProdutosCarrinho
      })
  }

  mostraCarrinho = () => {
    this.setState({ carrinhoNaTela: !this.state.carrinhoNaTela })
  }

  onChangeSelect = (event) => {
    this.setState({ valorSelect: event.target.value });
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
    const produtosCrescente = this.definelistaProdutos().sort(function (a, b) {
      return (
        a.preco - b.preco
      )
    })

    const produtosDecrescente = this.definelistaProdutos().sort(function (a, b) {
      return (
        b.preco - a.preco
      )
    })

    let listaProdutos = []

    if (this.state.valorSelect === "crescente") {
      listaProdutos = produtosCrescente.map(produto => {
        return (
          <CardProduto 
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            key={produto.id}
            id={produto.id}
            urlImagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
          />
        )
      })
    } else {
      listaProdutos = produtosDecrescente.map(produto => {
        return (
          <CardProduto 
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            key={produto.id}
            id={produto.id}
            urlImagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
          />
        )
      })
    }

    let carrinho

    if (this.state.carrinhoNaTela === true) {
      carrinho = "true"
    } else {
      carrinho = "false"
    }

    const listaProdutosCarrinho = this.state.produtosCarrinho.map(produto => {
      return (
        <ItemCarrinho
          contador={produto.contador}
          nome={produto.nome}
        />
      )
    })

    return (
      <Container >
        <div className={carrinho}>
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
              <select value={this.state.valorSelect} onChange={this.onChangeSelect}>
                <option value="crescente">Preço: Crescente</option>
                <option value="decrescente">Preço: Decrescente</option>
              </select>
            </Header>
            <Produtos>
              {listaProdutos}
            </Produtos>
          </Section>
          <Carrinho
            produtos={listaProdutosCarrinho}
            total={this.state.valorTotal}
          />
          <BotaoCarrinho onClick={this.mostraCarrinho}>
            <img alt="icone-carrinho" src={IconeCarrinho} />
          </BotaoCarrinho>
        </div>
      </Container>
    );
  }
}

export default App;