import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native"
import { SvgUri } from "react-native-svg"
import { useNavigation } from '@react-navigation/native';
import ContextMenu from "react-native-context-menu-view";


const width = Dimensions.get('window').width

const ItemSecondary = (props) =>{

    const navigation = useNavigation()

    return(
        <View style = {{marginTop : 10, marginBottom : 20}} key = {props.key} >
            <TouchableOpacity activeOpacity={1}
                onPress = {
                    () => {
                        navigation.navigate('Details', {
                        itemId: props.fileId ,
                        element: props.element,
                        })
                    }
                }
            >
                <Image source={{ uri : props.fileUrl}} style = {styles.image} />
            </TouchableOpacity>
            <View style = {{paddingLeft : 10, paddingRight : 10, marginTop : 7}} >
                <View style = {{ display : "flex", flexDirection : "row", justifyContent : "space-between", alignItems : "flex-start" }} >
                    <View>
                        <Text style = {{color : 'white', fontSize : 17}} >{ props.fileName }</Text>
                        <View style = { {display : "flex", flexDirection : "row", alignItems : "center"} } >
                            <Text style = {styles.textSecondary} >{ props.fileCategory }</Text>
                            <Text style = {styles.textSecondary}>{ props.fileType }</Text>
                            <Text style = {styles.textSecondary}>{ props.fileDateCreation }</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        <ContextMenu
                            style = {{width : 100, height : 100}}
                            actions={[{ title: "Title 1" }, { title: "Title 2" }]}
                            onPress={(e) => {
                                console.warn(
                                `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`
                                );
                            }}
                            >
                            <View style={styles.yourOwnStyles}>
                                <Text>hello</Text>
                            </View>
                            </ContextMenu>
                                            }}>
                        <SvgUri
                            width= {20}
                            height= {20}
                            uri= 'https://res.cloudinary.com/dbcjapvf8/image/upload/v1648195505/education%20et%20sante/schadsr4epbdaialvcma.svg'  
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width : width,
        height : 200
    }, 
    textSecondary : {
        color : '#EEE',
        opacity : 0.6,
        fontSize : 12.5,
        marginRight : 10
    }

})

export default ItemSecondary