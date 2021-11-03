import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';

import colors from '../config/colors';
import FavoritesScreen from '../screens/FavoritesScreen';


const Stack = createStackNavigator();

const FavoritesNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            title:'Favorite Meals',
            headerStyle:{
                backgroundColor:colors.accent
            },
            headerTintColor:colors.white,
            headerTitleStyle:{
                fontWeight:'bold',
            }
        }}
    >
        <Stack.Screen
            name='Favorites'
            component={FavoritesScreen}
            options={({ navigation }) => ({ 
                headerLeft:()=>(
                    <Ionicons 
                        name='ios-menu'
                        size={30}
                        color='#fff'
                        style={{marginLeft:10}}
                        onPress={()=>{navigation.toggleDrawer()}}  
                    />
                ) 
            })}
        ></Stack.Screen>

    </Stack.Navigator>

);

export default FavoritesNavigator;
