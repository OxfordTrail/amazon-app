import React from 'react';

class Cart extends React.Component{
    render(){
        return(
            <div className="Cart">
                {this.props.cart.length}
            </div>
        )
    }
}

export default Cart;