import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FavoritesNavigator from './FavoritesNavigator';
import MealsNavigator from './MealsNavigator';
import colors from '../config/colors';

const Tab = createMaterialBottomTabNavigator();

// const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName='Categories'
        tabBarOptions={{
            activeTintColor:colors.accent
        }}
        backBehavior='order'
        barStyle={{
            backgroundColor:'#694fad'
        }}
        activeColor={colors.white}
        inactiveColor={colors.dark}
    >
        <Tab.Screen
            name='Meals'
            component={MealsNavigator}
            options={({navigation})=>({
                tabBarLabel:'Home',
                tabBarIcon:({color})=>(
                    <Ionicons
                        name='md-restaurant'
                        size={25}
                        color={color}
                        onPress={()=>{
                            navigation.navigate('Categories')
                        }}
                    />
                )
            })}
        />
        <Tab.Screen
            name='Favorites'
            component={FavoritesNavigator}
            options={{
                tabBarLabel:'Fav',
                tabBarIcon:({color})=>(
                    <Ionicons name='ios-star' size={24} color={color}/>
                )
            }}
        />
    </Tab.Navigator>
);

export default TabNavigator;
