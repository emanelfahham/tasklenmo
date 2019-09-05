import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


const CardSection = (props) =>{
    return(
        <View style={styles.cardSection}>
        {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    cardSection: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
        marginVertical: "2%"
    }
})

export default CardSection;