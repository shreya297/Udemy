import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
const Boxscreen=()=>{
    return(
      <View>
        <View style={styles.viewstyle}>
            
        <Text style={styles.textOneStyle}>hello shreya</Text>
        <Text style={styles.textTwoStyle}>hello Munna</Text>
        <Text style={styles.textThreeStyle}>hello fuchu</Text>
</View>
      
        <View style={styles.parentstyle}>
        <View style={styles.viewOnestyle}></View>
        <View style={styles.viewTwoParent}>
        <View style={styles.viewTwostyle}></View>
        </View>
        <View style={styles.viewThreestyle}></View>
        </View>
        </View> 
    );
};
const styles=StyleSheet.create({
    parentstyle:{
        borderWidth:3,
        borderColor:'black',
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewOnestyle:{
        height:50,
        width:50,
        backgroundColor:'red'
    },

    viewTwostyle:{

        height:50,
        width:50,
        backgroundColor:'green',
        alignSelf:'flex-end'
    },
    viewTwoParent:{
        height:100,
        justifyContent:'flex-end'
    },
    viewThreestyle:{
        height:50,
        width:50,
        backgroundColor:'purple'
    },
    viewstyle:{
        borderWidth:3,
        borderColor:'black',
        // alignItems:'flex-start',
        // alignItems:'flex-end',
        // flexDirection:'column',
        // flexDirection:'row',
        // justifyContent:'center',
        // justifyContent:'flex-start',
        // justifyContent:'flex-end',
        height:200
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        // marginVertical:20,
        // marginHorizontal:20,
        // margin:20
        // flex:4
        // alignItems:'center',
        // alignItems:'flex-end'
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        // marginVertical:20,
        // marginHorizontal:20,
        // margin:20
        // flex:4,
        // alignSelf:'flex-start',
        // position:'absolute',
        fontSize:18,
        //we can write these four as a single StyleSheet.absoluteFillObject
        // top:0,
        // right:0,
        // left:0,
        // bottom:0
        // ...StyleSheet.absoluteFillObject
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
        // marginVertical:20,
        // marginHorizontal:20,
        // margin:20
        // flex:2
    }
});
export default Boxscreen;