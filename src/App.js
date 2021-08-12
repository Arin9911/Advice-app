import React, { Component } from 'react'
import axios from 'axios';
import './App.css'

class App extends Component {

  state = { advice: '' };

  componentDidMount() {
    this.getAdvice();
  }

  getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice: advice })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h3>{this.state.advice}</h3>
          <button onClick={this.getAdvice} className="btn">Another Advice</button>
        </div>
        
      </div>
    )
  }
}

export default App
