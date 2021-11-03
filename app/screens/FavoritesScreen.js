import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import AppText from '../components/AppText';
import MealList from '../components/MealList';
import colors from '../config/colors';

function FavoritesScreen({navigation}) {

    const favMeals = useSelector(state=>state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return(
            <View style={styles.container}>
                <AppText style={styles.text}>No favorite meals found. Start adding some!</AppText>
            </View>
        )
    }

    return (
        <MealList navigation={navigation} displayedMeals={favMeals}/>
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
        color:colors.danger,
        fontSize:17.5
    }
})

export default FavoritesScreen;