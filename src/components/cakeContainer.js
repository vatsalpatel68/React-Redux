import React  , { Component } from 'react';
import { buyCake } from '../redux/cake/cakeAction';
import { connect } from 'react-redux';
class CakeContainer extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Total Cake is :{this.props.numberOfCakes}</h1>
                <button onClick = {this.props.buyCake}>Buy Cake</button>
                </React.Fragment>
        )
    }
}

//The second argument of this function is ownProps of a component.
const mapStateToProps = state => {
    return  {
        numberOfCakes : state.cake.numberOfCakes
    }
} 

//same as 'mapstatetoprops' you can also add a second argument named 'ownprops'.
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer);