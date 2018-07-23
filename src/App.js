import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Product from './product/Product'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data :[
        {
          "login": "avinaba91",
          "id": 27242381
        }, {
          "login": "avinaba92",
          "id": 27242382
        }, {
          "login": "avinaba93",
          "id": 27242383
        }, {
          "login": "avinaba94",
          "id": 27242384
        }, {
          "login": "avinaba95",
          "id": 27242385
        }
      ]
    }
  }
  
  render () {
    return (
      <div className='container'>
      {
        this.state.data.map((user, i) =>
        <div className = "product">
          <Product login = {user.login} id = {user.id}/> 
        </div>
        )
      }
      </div>
    )
  }
}
export default App