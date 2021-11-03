import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import colors from '../config/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';



const Stack = createStackNavigator();

const MealsNavigator = () => (
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
            name='Categories'
            component={CategoriesScreen}
            options={({ navigation }) => ({
                headerTitle:'Meal Categories', 
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
        <Stack.Screen
            name='CategoryMeals'
            component={CategoryMealsScreen}
            options={({ navigation,route }) => ({
                headerTitle: route.params.categoryTitle, 
                // headerLeft:()=>(
                //     <Ionicons 
                //         name='ios-menu'
                //         size={30}
                //         color='#fff'
                //         style={{marginLeft:10}}
                //         onPress={()=>{navigation.toggleDrawer()}}  
                //     />
                // ) 
            })}

        ></Stack.Screen>
        <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={({ navigation,route }) => ({ 
                headerTitle: route.params.mealTitle,
                headerRight:()=>(
                    <MaterialCommunityIcons  
                        name= {route.params?.isFav ? 'star':'star-outline'}
                        size={25}
                        color={colors.white} 
                        onPress={route.params?.toggleFav}
                        style={styles.star}
                    />  
                ),
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


const styles = StyleSheet.create({
    star:{
        position:'relative',
        marginRight:15,      
    }   
})

export default MealsNavigator;