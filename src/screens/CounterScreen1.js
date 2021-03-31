import React,{useReducer} from 'react';
import { Button,StyleSheet ,View,Text} from 'react-native';


const reducer=(state,action)=>{
switch(action.type){
    case 'increment':
        return{...state, count:state.count + action.payload}
    case 'decrement':
            return{...state, count:state.count - action.payload}
            default:
                return state;
}
};
const CounterScreen1=()=>{
    const[state,dispatch]=useReducer(reducer,{count:0});
    return(
        <View>
            <Button title="Increase" onPress={()=>{dispatch({type:'increment',payload:1})}} />
            <Button title="Decrease" onPress={()=>{dispatch({type:'decrement',payload:1})}} />
            <Text>current count:{state.count}</Text>
        </View>
    );
};
const styles=StyleSheet.create({

});
export default CounterScreen1;