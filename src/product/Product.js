import React, { Component } from 'react'
import './Product.css'


class Product extends Component {

    render(props) {
        return (
            <div>
                <h1> My name is {this.props.login} </h1>
                <h1> My age is {this.props.id} </h1>
                <button class="button">Click </button>
            </div>
        )
    }
} 

export default Product