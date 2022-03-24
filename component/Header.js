import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { useRoute } from '@react-navigation/native';


const Header = (props) =>{
    const { descriptors, navigation, position } = props
    // const route = useRoute(); 
    // console.log( 'descripteur', descriptors)

    const dataNav = ['Tous', 'Sport', 'Musique', 'Mangas', 'Animes']
    console.log( 'la navigation', useRoute())

    return(
        <View style = {styles.header}>
            <View style = {styles.logoContainer} >
                <Text style = {styles.logo} >TheApp</Text>
            </View>
            <View style = {styles.navbar} >
            {
                dataNav.map((item, index) =>{
                    console.log(descriptors)
                    return (
                        <View  key={index}>
                            <TouchableOpacity style = {Object.values(descriptors)[0].route.name === item? styles.btnStyleTrue : styles.btnStyle}
                                onPress={() => navigation.navigate(item) }>
                                <Text style = {styles.btnContent} >{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header : {
        height : 140,
        padding : 10,
    },
    logoContainer : {
        flex : 2,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
    },

    logo : {
        fontFamily : 'Roboto',
        fontSize : 25,
        fontWeight : 'bold',
        color : 'white'
    },
    navbar : {
        flex : 1
    },
    navbar : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    btnStyle : {
        backgroundColor :'#313552',
        padding : 7,
        borderRadius : 15,
        color : 'white'
    },
    btnStyleTrue : {
        backgroundColor :'#181a29',
        padding : 7,
        borderRadius : 15,
    },
    btnContent : {
        color : 'white'
    }
})

export default Header