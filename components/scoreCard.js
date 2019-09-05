import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ScoreCard = (props) => {
    return(
        <View style={{marginEnd: '7%'}}>
            <Text style={styles.titletext}>{props.title}</Text>
            <View style={{flexDirection: 'row'}}>
                <Image
                style={styles.imageStyle} 
                source={props.source}/>
                <Text style={styles.infoText}>{props.detail}</Text>
                <Icon style={{marginVertical: 6}} name='error-outline' color={"#FECA19"} size={22}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titletext: {
        color: 'grey',
        fontSize: 13,
        fontWeight: '600'
    },
    imageStyle:{
        resizeMode: 'contain',
        height: 20, 
        width: 20, 
        marginVertical: 6
    },
    infoText:{
        fontSize: 20, 
        marginVertical: 2, 
        marginHorizontal: 5
    }

})

export default ScoreCard;