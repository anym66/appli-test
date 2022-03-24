import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import Header from './Header';
import {data} from '../helpers'
import { LinearGradient } from 'expo-linear-gradient';
import ItemData from './ItemData';
import { Video, AVPlaybackStatus } from 'expo-av';

const Musique = () =>{
    return(
        <View style = {styles.mainContainer}>
          <LinearGradient colors={['#50557C', '#2D2449']} style = {styles.gradient} >
            <ScrollView>
              <View style = {styles.containerItem} >
                <Text style = {styles.titleItem} >Videos</Text>
                <ScrollView horizontal = {true} style = {styles.scrollView} >
                  {
                    data.map((item) => {
                      if(item.fileType === 'video' ) {
                        return (
                        <ItemData fileName = {item.fileName}
                          fileId = {item.fileId}
                          fileType = {item.fileType}
                          fileUrl = {item.fileUrl}
                          element = {item}
                          fileDateCreation = {item.fileDateCreation} />
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
              <View style = {styles.containerItem} >
                <Text style = {styles.titleItem} >Photos</Text>
                <ScrollView horizontal = {true} style = {styles.scrollView} >
                  {
                    data.map((item) => {
                      if(item.fileType === 'photo' ) {
                        return (
                          <ItemData fileName = {item.fileName}
                            fileId = {item.fileId}
                            fileType = {item.fileType}
                            fileUrl = {item.fileUrl}
                            element = {item}
                            fileDateCreation = {item.fileDateCreation} />
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
              <View style = {styles.containerItem} >
                <Text style = {styles.titleItem} >Textes</Text>
                <ScrollView horizontal = {true} style = {styles.scrollView} >
                  {
                    data.map((item) => {
                      if(item.fileType === 'pdf') {
                        return (
                          <ItemData fileName = {item.fileName}
                            fileId = {item.fileId}
                            fileType = {item.fileType}
                            fileUrl = {item.fileUrl}
                            element = {item}
                            fileDateCreation = {item.fileDateCreation} />
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
    )
}

export default Musique

const styles = StyleSheet.create({
    mainContainer : {
      flex : 1,
      padding : 0,
      margin : 0,
    },
    gradient : {
      flex : 1,
    },
    titleItem : {
      color : 'white',
      fontSize : 20,
      marginBottom : 7,
      fontWeight : 'bold'
  
    },
    containerItem : {
      padding : 5
    },
    scrollView : {
      height : 300
    } 
  })