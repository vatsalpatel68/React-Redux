import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {buyCake} from '../redux/cake/cakeAction';
function CakeHooks(){
    const state = useSelector(state => state.cake.numberOfCakes);
    const dispatcher = useDispatch();
    return(
        <React.Fragment>
            <h3 style = {{color : "red"}}>This is using Hooks.</h3>
            <h1>Cake Hooks : {state}</h1> 
            <button onClick = {() => dispatcher(buyCake())}>Buy Cake</button>
        </React.Fragment>
    )
}


export default CakeHooks;