import React , { useCallback, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

import {
    ScrollView,
    Image, 
    View, 
    StyleSheet, 
    Text } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = ({children})=>{
    return (
        <View style={styles.listItem}>
            <AppText>{children}</AppText>
        </View>
    )
}

function MealDetailScreen({navigation,route}) {
    const {mealId} = route.params;

    const currentMealIsFavorite = useSelector(state=>state.meals.favoriteMeals.some(meal=>meal.id === mealId)); 

    const availabelMeals = useSelector(state=>state.meals.meals);

    const selectedMeal = availabelMeals.find(meal => meal.id ===mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(()=>{
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId]);

    useEffect(()=>{
        navigation.setParams({toggleFav: toggleFavoriteHandler});
    },[toggleFavoriteHandler]);
    
    useEffect(()=>{
        navigation.setParams({isFav: currentMealIsFavorite});
    },[currentMealIsFavorite]);


    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <AppText>{selectedMeal.duration}m</AppText>
                <AppText>{selectedMeal.complexity.toUpperCase()}</AppText>
                <AppText>{selectedMeal.affordability.toUpperCase()}</AppText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    details: {
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
        textAlign:'center',
        fontSize:22,
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:10,
        borderColor:colors.black,
        borderWidth:1,
        padding:10,
        elevation:0.8
    }
})

export default MealDetailScreen;