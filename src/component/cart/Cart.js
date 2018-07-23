import React, { Component } from 'react'
import './Cart.css'

class Cart extends Component {

    constructor() {
        super();
        this.state = {
          data :[{
            "product": "avinaba91",
            "id": 27242381,
            "quantity": 2,
            "cost": 10
        }, {
            "product": "avinaba92",
            "id": 27242382,
            "quantity": 3,
            "cost": 15
        }, {
            "product": "avinaba93",
            "id": 27242383,
            "quantity": 2,
            "cost": 10
        }]
        }
      }

    render() {
        return(
            <div>
               {
                    this.state.data.map((user, i) =>
                    <div className = "product">
                    <Product product = {user.product} id = {user.quantity}/> 
                    </div>
                    )
                }
             </div>
            )
    }    
}

function Product(props) {
    return(
        <div className="cart">
            <p>Name : {props.product} </p>
            <p>Quantity : {props.quantity} </p>
        </div>
    )
}

export default Cart