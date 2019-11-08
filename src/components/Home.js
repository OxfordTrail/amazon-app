import React from 'react';
import Table from 'react-bootstrap/Table';
import img1 from '../images/number1.png'
import img2 from '../images/number2.png'
import img3 from '../images/number3.png'
import img4 from '../images/number4.png'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            mobiles:[{
                id:1,
                modelName: "iPhone XR",
                price: 2000,
                img: <img style={{height:100, width:100}}src={img1} alt="phoneModels"/>
            },{
                id:2,
                modelName: "iPhone X",
                price: 1500,
                img: <img style={{height:100, width:100}}src={img2} alt="phoneModels"/>
            },{
                id:3,
                modelName: "Pixel XL",
                price: 400,
                img: <img style={{height:100, width:100}}src={img3} alt="phoneModels"/>
            },{
                id:4,
                modelName: "Samsung Galaxy S10",
                price: 6000,
                img: <img style={{height:100, width:100}}src={img4} alt="phoneModels"/>
            }]
        }
    }
    
    AddToCart=()=>{
        return <div>Add to cart</div>
    }
    renderTableData(){
        return this.state.mobiles.map((mobile)=>{

            const {modelName, price, img} = mobile;
                return (<tr> {img}, {modelName}, 
                            <div>Price: {price}</div>
                            <AddToCart/>
                        </tr>)
        })
    }

    render(){
        return (
                <div>                   
                    <h1>Mobiles</h1>
                    <Table>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </Table>
                </div>
        );
    }
}

export default Home;