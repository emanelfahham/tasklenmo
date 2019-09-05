import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const deviceWidth = Dimensions.get("window").width;
import general from '../styles/generalstyles';

const Card = (props) => {
    return(
        <View 
        key={props.status}
        style = {
          [styles.card, props.status == "hello" ? {
            borderStartColor: '#00D034'
          } : {
            borderStartColor: '#FFA831'
          }, general.shadow]
        } >
                  <View style={{flexDirection:'row'}}>
                    <Text style={general.greyText}>{props.ctitle}</Text>
                    <Icon style={{marginStart: 10}} name='error-outline' color={"#FECA19"} size={20}/>
                  </View>  
                    <Text style={{fontSize: 20}}> {props.cinfo}</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    card: {
            height: deviceWidth / 6,
            padding: 5,
            width: deviceWidth / 2.3,
            marginEnd: 10,
            borderStartWidth: 5,
            borderRadius: 3,
            backgroundColor: "white",
            paddingStart: 10,
            paddingTop: 10,
    },

})

export default Card;