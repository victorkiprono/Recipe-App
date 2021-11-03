import React, { useState ,useEffect,useCallback } from 'react';
import { 
    View, 
    StyleSheet, 
    Text,
    Switch } from 'react-native';
import { useDispatch } from 'react-redux';

import colors from '../config/colors';
import { setFilters } from '../store/actions/meals';

const FiltersSwitch = ({label,value,onValueChange})=> {
    return (
        <View style={styles.filterContainer}>
            <Text>{label}</Text>
            <Switch
                trackColor={{true:colors.primary,false:colors.light}}
                thumbColor={colors.primary} 
                value={value} 
                onValueChange = {onValueChange} 
            />
        </View>
    );
}



function FiltersScreen({navigation}) {
    const [isGlutenFree,setIsGlutenFree] = useState(false);
    const [isLactoseFree,setIsLactoseFree] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegetarian,setIsVegetarian] = useState(false);
    
    const dispatch = useDispatch();

    // useCallback, so it doesn't create a new saveFilters function in every render
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactosFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters));
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian,dispatch]);
    
    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]); 


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Filters/Restrictions</Text>

            <FiltersSwitch 
                label='Gluten-Free' 
                value={isGlutenFree} 
                onValueChange={newValue => setIsGlutenFree(newValue)}
            />
            <FiltersSwitch 
                label='Lactose-Free' 
                value={isLactoseFree} 
                onValueChange={newValue => setIsLactoseFree(newValue)}
            />
            <FiltersSwitch 
                label='Vegan' 
                value={isVegan} 
                onValueChange={newValue => setIsVegan(newValue)}
            />
            <FiltersSwitch 
                label='Vegetarian' 
                value={isVegetarian} 
                onValueChange={newValue => setIsVegetarian(newValue)}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        margin:20,
        textAlign:'center'
    }
})

export default FiltersScreen;