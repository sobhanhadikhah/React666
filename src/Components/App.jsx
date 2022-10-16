import './Card.css';
import React, { Component } from 'react';
import Navbame from './Navbar';
import Cardlister from './Cardlister';
class App extends Component {
    state = {
        Product:[
            {id:1,name:'Laptop',count:11},
            {id:2,name:'iphone',count:110},
            {id:3,name:'Keyboard',count:9},
            {id:4,name:'mouse',count:18},
            {id:5,name:'Monitor',count:16},
            {id:6,name:'PC',count:220},
        ]
    }
    
    render() {
    

        return (

            <div  >
                
                <Navbame Product = {this.state.Product} />
                <Cardlister Resetbtn = {this.Resetbtn} Dellcount ={this.Dellcount} minecount = {this.minecount}
                  addcount = {this.addcount} Product = {this.state.Product} />

                
                
            </div>
        );
    }
    addcount=(PID)=>{
        const newpro = [...this.state.Product];
        const index = newpro.findIndex(p=> p.id === PID);
        newpro[index].count +=1
        this.setState({Product:newpro});
    }
    minecount=(PID)=>{
        const newpro = [...this.state.Product];
        const index = newpro.findIndex(p=> p.id === PID);
        newpro[index].count -=1
        this.setState({Product:newpro});
    }
    Dellcount=(PID)=>{
        const newpro = this.state.Product.filter(p=> p.id !== PID);
        this.setState({Product:newpro});

    }
    Resetbtn=(PID)=>{
        const newpro = [...this.state.Product];
        const index = newpro.findIndex(p=> p.id===PID);
        newpro[index].count = 0
        this.setState({Product:newpro});

    }
}
 
export default App;