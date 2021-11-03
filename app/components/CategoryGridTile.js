import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableNativeFeedback} from 'react-native';

function CategoryGridTile({title,onPress,color}) {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback
                onPress={onPress} 
            >
                <View style={{...styles.container,...{backgroundColor:color}}}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableNativeFeedback>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:10,
        //shadow only works in iOS
        // shadowColor:'black',
        // shadowOpacity:0.26,
        // shadowOffset:{width:0,height:2},
        // shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'right'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden',
    }
})

export default CategoryGridTile;