import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './Main';
import Mangas from './Mangas';
import Header from './Header';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './Item';
import Sport from './Sport';
import Musique from './Musique';
import Anime from './Animes';


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


const HomeTabs = (props) =>{
    return(
            <LinearGradient colors={['#50557C', '#50557C']} style = {styles.gradient} >
                <Tab.Navigator tabBar={props => <Header {...props} />}>
                    <Tab.Screen name="Tous" component={ Main } />
                    <Tab.Screen name="Sport" component={ Sport } />
                    <Tab.Screen name="Musique" component={ Musique } />
                    <Tab.Screen name="Mangas" component={ Mangas } />
                    <Tab.Screen name="Animes" component={ Anime } />
                </Tab.Navigator>
            </LinearGradient>
    ) 
}


export default function AppNavigate(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Hello' component={HomeTabs} options = {{headerShown : false}} />
                <Stack.Screen name='Details' component={Item} options = {{headerShown : false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    }

const styles = StyleSheet.create({
    gradient : {
        flex : 1,
      },
})