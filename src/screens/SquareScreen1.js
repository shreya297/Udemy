import React,{useReducer} from 'react';
import {View,Text,StyleSheet, Switch} from 'react-native';
import ColorCounter from '../component/ColorCounter';

const COLOR_INCREMENT=15;

const reducer=(state,action)=>{
    //state ==={red:number,green:number,blue:number};
    //action==={colorToChange:'red' || 'green' ||'blue',amount:15||-15}

switch(action.type){
    case 'red':
     return  state.red + action.payload>255 || state.red + action.payload <0 ? state : { ...state, red: state.red + action.payload };
    case 'green':
        return  state.green + action.payload>255 || state.green + action.payload <0 ? state : { ...state, green: state.green + action.payload };    
    case 'blue':
        return  state.blue + action.payload>255 || state.blue + action.payload <0 ? state : { ...state, blue: state.blue + action.payload };
    default:
        return state;
}
};


const SquareScreen1=()=>{

   
   const[state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});

   const {red,green,blue}=state
    return(
        <View>
            
            <ColorCounter onIncrease={()=>dispatch({type:'red',payload:COLOR_INCREMENT})}
                onDecrease={()=>dispatch({type:'red',payload:-1*COLOR_INCREMENT})} 
                color="Red"/>

            <ColorCounter  onIncrease={()=>dispatch({type:'blue',payload:COLOR_INCREMENT})}
                onDecrease={()=>dispatch({type:'blue',payload:-1*COLOR_INCREMENT})} 
                color="Blue"/>

            <ColorCounter  onIncrease={()=>dispatch({type:'green',payload:COLOR_INCREMENT})}
                onDecrease={()=>dispatch({type:'green',payload:-1*COLOR_INCREMENT})} 
                 color="Green"/>

           <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );
};
const styles=StyleSheet.create({});
export default SquareScreen1;