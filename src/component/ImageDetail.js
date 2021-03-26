import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const ImageDetail = props => {
    return(
    <View>
        <Image source={props.imagesource} style={{width:100, height: 100}}></Image>
        <Text>{props.title}</Text>
        <Text>Image score-{props.imagescore}</Text>
        </View>
        );
};
const styles=StyleSheet.create({})
    export default ImageDetail;