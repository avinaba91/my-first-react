import React, { Component } from 'react'


class Product extends Component {

    render(props) {
        return (
            <div>
                <h1> My name is {this.props.login} </h1>
                <h1> My age is {this.props.id} </h1>
            </div>
        )
    }
} 

export default Product