import React from 'react';
import {View,Text,StyleSheet, FlatList, ScrollView} from 'react-native';
const ListScreen=()=>{
    const friends=[
        {name:'Friend #1',age:20},
        {name:'Friend #2',age:30},
        {name:'Friend #3',age:40},
        {name:'Friend #4',age:50},
        {name:'Friend #5',age:20},
        {name:'Friend #6',age:30},
        {name:'Friend #7',age:60},
        {name:'Friend #8',age:10},
        {name:'Friend #9',age:70},
    ];
    return(
        
        <FlatList 
        //  horizontal
         //showsHorizontalScrollIndicator={false}
        keyExtractor={friend=>friend.name}
        data={friends} 
        renderItem={({item})=>{
         return<View><Text style={styles.textStyle}>{item.name} -{item.age}</Text>
         
         </View>; 
        }}/>
        
        //element==={item:{name:'friend #1'},index:0}
    );
};
    
    // return(
    //     <Text>List Screen</Text>
    // );
  
const styles=StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});
export default ListScreen;