import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import AppText from '../components/AppText';
import colors from '../config/colors';


function CategoryMealsScreen({navigation,route}) {
    const {categoryId} = route.params;

    const availabelMeals = useSelector(state=>state.meals.filteredMeals);

    const displayedMeals = availabelMeals.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    if(displayedMeals.length === 0){
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No meals found, check your filters! </AppText>
            </View>
        )
    }
    
    return (
        <MealList displayedMeals={displayedMeals} navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        textTransform:'capitalize',
        color:colors.danger
    }
})

export default CategoryMealsScreen;