import React, { Component } from 'react';
import Card from './Card';
class Cardlister extends Component {
     
    render() { 
        return (
            <div>
                {this.props.Product.map((p,index)=>(
                    <Card Resetbtn = {this.props.Resetbtn} Dellcount = {this.props.Dellcount} minecount ={this.props.minecount} addcount ={this.props.addcount}  key={index} Pname = {p.name} Pcount = {p.count} id ={p.id} >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Sapiente ipsam provident, quisquam quaerat autem eum odio consequatur tenetur commodi nulla.
                         Ratione autem possimus consectetur dolores modi? Quasi maiores reic
                        iendis et.
                    </Card>
                ))}
            </div>
        );
    }
}
 
export default Cardlister;