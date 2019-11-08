import React from 'react';

class Mobile extends React.Component{
    render(){
        const mobile = this.props.mobile;
        return (
            <div className="MobileItem">
                <div className="MobileItem_img">
                    <img 
                        src={mobile.img}
                        alt="Mobile Item"
                        />
                </div>
                <div className="MobileItem_details">
                    <h4>{mobile.name}</h4>
                    <div>
                        <p>Price: {mobile.price}</p>
                        <button onClick={this.props.handleClick.bind(this, mobile)}>
                            Buy
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Mobile;