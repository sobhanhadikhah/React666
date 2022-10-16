import React, { Component } from 'react';
class Navbame extends Component {
    state = {  } 
    render() { 
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-primary' >
                    <a className='navbar-brand ma3 white grow ' href='#'>
                            all of Product : {this.sumcount()}
                    </a>
            </nav>
        );
    }
    sumcount=()=>{
        let sum = 0
        this.props.Product.forEach(element => {
           sum += element.count
           return sum
        });
        return sum
    }
}
 
export default Navbame;