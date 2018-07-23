import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Product from './component/product/Product'
import Cart from './component/cart/Cart'

class App extends Component {

  
  render () {
    return (
      <div>
        <div>
          <Product></Product>
        </div>
        <div>
          <Cart></Cart>
        </div>        
      </div>
    )
  }
}
export default App