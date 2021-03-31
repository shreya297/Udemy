import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
const TextScreen=()=>{
    const [name,setName]=useState('');
    const[password,setPassWord]=useState('');
    return(
        <View>
        <View>
            <Text>Enter Name:</Text>
           <TextInput style={styles.input}
           autoCapitalize='none'
           autoCorrect={false}
           autoCompleteType={'email'}
           value={name}
           onChangeText={(newValue)=>setName(newValue)}
           />
           <Text>My name is {name}</Text>
          
           </View>

           <View>
           <Text>Enter Password:</Text>
           <TextInput style={styles.input}
           autoCapitalize='none'
           autoCorrect={false}
           value={password}
           onChangeText={(newValue)=>setPassWord(newValue)}
           />
           {password.length<4? <Text>password must be 4 character
           </Text>:null}

           </View>
         </View>  
    );
};
const styles=StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
});
export default TextScreen;