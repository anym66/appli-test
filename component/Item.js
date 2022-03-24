import React, {useState} from "react"
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Modal, Pressable, Alert } from "react-native"
import {data} from '../helpers'
import { LinearGradient } from "expo-linear-gradient"
import { SvgUri } from "react-native-svg"
import ItemSecondary from "./ItemSecondary"
import ItemVideo from "./ItemVideo"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width


const Item = ({route, navigation}) =>{

    const { itemId, element } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [likeState, setLikeState] = useState('thumb-up-outline')
    const [dislikeState, setDislikeState] = useState('thumb-down-outline')

    const dataOptions = [
        {
            name : 'Télécharger',
            image : 'download',
            fonction : () =>{
                setModalVisible(true)
            }
        },
        {
            name : 'Partager',
            image : 'share'
        },
        {
            name : "J'aime",
            image : likeState,
            fonction : () =>{
                if(likeState === 'thumb-up-outline' ){
                    setLikeState('thumb-up')
                    setDislikeState('thumb-down-outline')
                } else{
                    setLikeState('thumb-up-outline')
                }
            }
        },
        {
            name : "J'aime pas",
            image : dislikeState,
            fonction : () =>{
                if(dislikeState === 'thumb-down-outline' ){
                    setDislikeState('thumb-down')
                    setLikeState('thumb-up-outline')
                } else{
                    setDislikeState('thumb-down-outline')
                }
            }
        }
    ]

    return(
        <LinearGradient colors={['#50557C', '#2D2449']} style = {styles.gradient} >
            <View style = {styles.container} >
                {
                    element.fileType === 'video'?
                        <ItemVideo/> :
                        <View>
                            <Image source = {{ uri: element.fileUrl}} style = {styles.image} />
                        </View>
                }
                <View style = {{paddingLeft : 10, paddingRight : 10}} >
                        <Text style = {styles.textTitle} >{element.fileName}</Text>
                        <Text style = {styles.textItem} > {element.fileDescription} </Text>
                    </View>
                    <View style = {styles.containerOptions} >
                        {
                            dataOptions.map((item, index) =>{
                                return(
                                    <TouchableOpacity onPress={item.fonction} activeOpacity={0.7}>
                                        <View key={index} style = {{alignItems : "center"}} >
                                            <Icon
                                                size={20}
                                                name = {item.image}
                                                color = "#FFF"  
                                            /> 
                                            <Text style = {styles.iconText} > {item.name} </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                <ScrollView>
                    {
                        data.map((item, index) =>{
                            if(item.fileCategory === element.fileCategory && item.fileId != element.fileId) {
                                return(
                                    <ItemSecondary
                                        key = {index}
                                        fileId = {item.fileId}
                                        element = {item}
                                        fileCategory = {item.fileCategory}
                                        fileUrl = {item.fileUrl}
                                        fileDateCreation = {item.fileDateCreation}
                                        fileType = {item.fileType}
                                        fileName = {item.fileName}
                                    />
                                )
                            }
                        })
                    }
                </ScrollView>
            </View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Téléchargement en cours...</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 50
    },
    image : {
        width : width,
        height : 200
    }, 
    textItem : {
        color : '#EEE',
        opacity : 0.7,
        fontSize : 13
    },
    textTitle : {
        fontSize : 22,
        color : 'white',
        marginTop : 10
    },
    gradient : {
        flex : 1,
    },
    icon : {
        width : 20,
        height : 20,
    },
    containerOptions : {
        marginTop : 15,
        marginBottom : 25,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingLeft : 10,
        paddingRight : 10,
    },
    iconText : {
        color : 'white',
        fontSize : 11,
        marginTop : 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: "#50557C",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})

export default Item