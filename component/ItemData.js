import React from 'react'
import {View, Image, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ItemData = (props) =>{

    const navigation = useNavigation()

    return(
        <TouchableOpacity
            onPress={() => {
            navigation.navigate('Details', {
                itemId: props.fileId ,
                element: props.element,
            });
            }} activeOpacity={0.9}>
            <View key={props.fileId} style = {styles.itemContainer}>
                <Image source = {{ uri: props.fileUrl}} style = {styles.image} />
                <View style = {styles.itemSecondPart} >
                    <Text style = {styles.textItem} >{props.fileName}</Text>
                    <Text style = {styles.textDate}>{props.fileDateCreation}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image : {
       width : '95%',
       height : '90%',
       borderRadius :10,
    },
    itemContainer : {
       width : 160,
       height : 250,
       marginRight : 5,
    },
    itemSecondPart : {
        marginTop : 10,
    },
    textItem : {
        color : 'white',
        fontSize : 16
    },
    textDate : {
        color : '#EEE',
        fontSize : 12,
        opacity : 0.7
    }
})

export default ItemData
