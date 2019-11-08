import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
import Cart from './components/Cart';
import MobileList from './components/MobileList';
import mobileData from './components/mobiledata';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mobiles: mobileData,
      cart: []
    }
  }
  handleAddToCart(mobile) {
    const cartItem = this.state.cart.find(x => x.id === mobile.id);
    !cartItem && this.setState({cart: [...this.state.cart, mobile]})
  }
  render(){
    return(
      <div className="App">
        <Cart cart={this.state.cart}/>
        <MobileList
          mobiles= {this.state.mobiles}
          handleAddToCart={this.handleAddToCart}></MobileList>
      </div>
    )
  }
}

export default App;
