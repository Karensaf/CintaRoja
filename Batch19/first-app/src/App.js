import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';
import Navbar from './components/Navbar'
import Card from './components/Card'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
        saludo:"Hola desde React",
        despedida:"¡Adios desde Reac!",
        cards: [
          /*{nombre:"Karen Artega",bio:"No hay información"},
          {nombre:"Lizeth Jiménez",bio:"No hay información, que pena me da tu casob"},
          {nombre:"David Jiménez",bio:"No hay información suerte para la próxima"}*/
        ]
    }
  }

  componentWillMount(){
    console.log('will mount')
    axios.get('https://pokeapi.co/api/v2/pokemon/3/')
    .then(response => {
        console.log(response)
        this.setState({
          cards:[
            {nombre:response.data.name,bio:response.data.height}
          ]
        })
    })
    .catch(err => console.log(err))
  }
  
updateCard(){
  //return <div>Que onda desde una funcion</div>
  if(this.state.cards.length>0){
    const cards = this.state.cards.map((element,index,array) => <Card nombre={element.nombre} bio={element.bio}/>)
    return cards
  }else{
    return <p>Cargando.......</p>
  }
}

  render() {
    {/*AFUERA DEL RETURN*/}
console.log('render')
//se pasa arriba
//const cards = this.state.cards.map((element,index,array) => <Card nombre={element.nombre} bio={element.bio}/>)

    return (
      <div className="App">
    <Navbar/>
    <div className="row">
    {/*{cards}*/}
    {this.updateCard()}
    </div>
    {/*
    <Card/>
    <Card/>
    <Card/>
    */}
    {/*LO SIGUIENTE ES PARA VER LO DE LOS ARCHIVOS DE SALUDO Y DESPEDIDA*/}
      {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Saludo text={this.state.saludo}/>
        <Despedida text={this.state.despedida}/>
      */}

      </div>
    );
  }
}

export default App;
