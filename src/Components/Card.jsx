import './Card.css'
import React, { Component } from 'react'
class Card extends Component {
    render() { 
        return (
            <>
            <div className='bg-dark-blue br3  pa3 ma3    ' >
                <img src={`https://robohash.org/${this.props.id}`} alt="img" />
                <span className='pa2' >{this.props.Pname}</span>
                <span  className='pa2' >{this.props.Pcount}</span>
                <button onClick={this.addcount} className='btn btn-primary ma3 grow ' >+</button>
                <button onClick={this.minecount} className='btn btn-warning ma3  grow' >-</button>
                <button onClick={this.Dellcount} className='btn btn-danger ma3 grow ' >Delete</button>
                <button onClick={this.Resetbtn} className='btn btn-dark ma3 grow ' >Reset</button>
                <p>{this.props.children}</p>
            </div>
            </>
        );
    }
    addcount=()=>{
        this.props.addcount(this.props.id)
    }
    minecount=()=>{
        this.props.minecount(this.props.id)
    }
    Dellcount=()=>{
        this.props.Dellcount(this.props.id)
    }
    Resetbtn=()=>{
        this.props.Resetbtn(this.props.id)

    }
}
 
export default Card;