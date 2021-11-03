import React from 'react';
import { 
    StyleSheet, 
    FlatList } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


function CategoriesScreen({navigation}) {
    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            keyExtractor={item =>item.id.toString()}
            renderItem={({item})=>
                <CategoryGridTile 
                    title={item.title}
                    color={item.color} 
                    onPress={()=>{
                        navigation.navigate('CategoryMeals',{
                            categoryId:item.id,
                            categoryTitle:item.title
                        })}
                    } 
                />
            }
        />
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})

export default CategoriesScreen;