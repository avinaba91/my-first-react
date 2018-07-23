import React, { Component } from 'react'
import './Product.css'


class Product extends Component {

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
              <Item login = {user.login} id = {user.id}/> 
            </div>
            )
          }
          </div>
        )
    }    
} 

function Item(props) {
    return (
        <div>
            <h1> My name is </h1>
            <h1> My age is </h1>
            <button class="button">Click </button>
        </div>
    )
}

export default Product