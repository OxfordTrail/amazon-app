import React from 'react';
import Mobile from './Mobile';

class MobileList extends React.Component{
    constructor(props){
        super(props);
        this.renderMobileItems= this.renderMobileItems.bind(this);
        this.handleClick = this.handleClick(this);
    }

    handleClick(mobile){
        this.props.handleAddToCart(mobile)
    }
    
    renderMobileItems = mobile=>{
        return (
            <div key={mobile.id}>
                <Mobile
                    mobile={mobile}
                    handleClick={this.handleClick}
                ></Mobile>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.props.mobiles.map(this.renderMobileItems)}
            </div>
        );
    }
}

export default MobileList;