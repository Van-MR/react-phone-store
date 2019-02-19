import React from 'react'
import Title from '../title'
import CartColumns from "./cartColumns";
import CartList from './cartList'
import CartTotal from './cartTotal'
import EmptyCart from "./emptyCart";

import { ProductConsumer } from '../../context'

class Cart extends React.Component {
  render() {
     return(
         <section>
             <ProductConsumer>
               {value => {
                 const { cart } = value;
                 if (cart.length > 0) {
                   return (
                     <React.Fragment>
                       <Title name="your" title="cart" />
                       <CartColumns />
                       <CartList value={value} />
                       <CartTotal value={value} />
                     </React.Fragment>
                   );
                 } else {
                   return <EmptyCart />;
                 }
               }}
             </ProductConsumer>
        </section>
     )
  }
}

export default Cart;
