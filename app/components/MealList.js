import React from 'react';
import { 
    View, 
    FlatList, 
    StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';

function MealList({navigation,displayedMeals}) {
    const favoriteMeals = useSelector(state=>state.meals.favoriteMeals);

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item =>item.id.toString()}
                style={{width:'100%'}}
                renderItem={({item})=>
                    <MealItem 
                        title={item.title}
                        image={item.imageUrl}
                        duration={item.duration}
                        complexity={item.complexity}
                        affordability={item.affordability}
                        onPress={()=>{
                            navigation.navigate('MealDetail',{
                                mealId:item.id,
                                mealTitle:item.title,
                                isFav: favoriteMeals.some(meal=>meal.id === item.id)
                            })
                        }}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
    },
    text:{
        textAlign:'center'
    },
})

export default MealList;