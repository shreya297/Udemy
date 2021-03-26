import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import ImageDetail from '../component/ImageDetail';
const ImageScreen=()=>{
    return(
    <View>
    <ImageDetail title='unicorn' imagesource={(require('../../assets/image/im1.png'))} imagescore={9}/>
    <ImageDetail title='love' imagesource={(require('../../assets/image/im2.png'))} imagescore={7}/>
    <ImageDetail title='girl' imagesource={(require('../../assets/image/im3.png'))} imagescore={10}/>
    </View>)
};
const styles=StyleSheet.create({})
    export default ImageScreen;