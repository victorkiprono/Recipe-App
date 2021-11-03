import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';

import FiltersScreen from '../screens/FiltersScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const FiltersNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen
            name='FiltersScreen'
            component={FiltersScreen}
            options={({ navigation,route }) => ({
                headerTitle:'Filter Meals', 
                headerLeft:()=>(
                    <Ionicons 
                        name='ios-menu'
                        size={30}
                        color='#fff'
                        style={{marginLeft:10}}
                        onPress={()=>{navigation.toggleDrawer()}}  
                    />
                ),
                headerRight:()=>(
                    <Ionicons 
                        name='ios-save'
                        size={30}
                        color='#fff'
                        style={{marginRight:10}}
                        onPress={route.params?.save}  
                    />
                ) 
            })}
        ></Stack.Screen>
    </Stack.Navigator>
);

export default FiltersNavigator;
