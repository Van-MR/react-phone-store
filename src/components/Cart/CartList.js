import React, { Component } from "react";
import CartItem from "./cartItem.js";
export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;
    return (
      <div className="container-fluid">
         {
           cart.map(item => {
             return (
               <CartItem key={item.id} item={item} value={value} />
             )
           })
         }
      </div>
    );
  }
}
