import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      company:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
      axios.get('https://api.github.com/users/avinaba91')
        .then(response => this.setState({username: response.data.company}))
   }
  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.username}</p>
        <p>{this.state.company}</p>
      </div>
    )
  }
}
export default App