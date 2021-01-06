import React , { Component } from 'react';
import {buyIceCream} from '../redux/iceCream/iceCreamAction';

import {connect} from 'react-redux';

class IceCreamContainer extends Component{
    render(){
        return(
            <React.Fragment>
                <h3 style ={{ color : "red"}}>Buy Ice-Cream Container</h3>
                <h1>The number of Ice-cream : {this.props.numberOfIceCream}</h1>
                <button onClick = {this.props.buyIceCream}> Buy a Ice-cream </button>
            </React.Fragment>
        )
    }
}


const mapStatetoProps = state => {
    return {
        numberOfIceCream : state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream :() =>  dispatch(buyIceCream())
    }
}


export default connect(mapStatetoProps , mapDispatchToProps)(IceCreamContainer)