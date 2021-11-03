import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

import FiltersNavigator from './FiltersNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import TabNavigator from './TabNavigator';
import colors from '../config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>(
    <NavigationContainer>
        <Drawer.Navigator
            // openByDefault
            drawerContentOptions={{
                activeTintColor:colors.accent,
                labelStyle:{
                    fontWeight:'bold'
                }
            }}
        >
            <Drawer.Screen 
                name='Home' 
                component={TabNavigator}
                options={({navigation})=>({
                    // drawerLabel:'Home',
                    drawerIcon:({color,size})=>(
                        <Ionicons
                            name='md-home'
                            size={size}
                            color={color}
                            onPress={()=>{
                                navigation.navigate('Categories')
                            }}
                        />
                    ),
                    drawerLabel:'Home'
                })} 
            />
            <Drawer.Screen 
                name='Filters' 
                component={FiltersNavigator}
                options={()=>({
                    drawerIcon:({size,color})=>(
                        <Ionicons
                            name='md-filter'
                            size={size}
                            color={color}
                        />
                    )
                })} 
            />
            <Drawer.Screen 
                name='Favorites' 
                component={FavoritesNavigator}
                options={()=>({
                    drawerIcon:({size,color})=>(
                        <Ionicons
                            name='md-star'
                            size={size}
                            color={color}
                        />
                    )
                })} 
            />
        </Drawer.Navigator>
        
    </NavigationContainer>

);

export default DrawerNavigator;
