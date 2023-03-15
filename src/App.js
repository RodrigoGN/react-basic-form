// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Tabela from './components/Tabela.js'
import Formulario from './components/Formulario.js'
import Api from './components/Api.js'



class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <div className="container2">
          <Tabela characterData={characters} removeCharacter={this.removeCharacter} />
          <Formulario handleSubmit={this.handleSubmit} />
        </div>
        <br />
        <br />
        <br />
        <div className="container3">
          <Api />
        </div>
      </div>
    )
  }
}

export default App
