import {StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    shadow:{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2
    },
    greyText:{
            color: 'grey',
            fontSize: 13,
            fontWeight: '600'
    },
    buttonText:{
            textAlign: 'center',
            fontSize: 16,
    },
    purpleText: {
            color: '#D77CFF',
            fontSize: 16,
            marginBottom: 3
    },
    blackText: {
            fontSize: 20,
    },


})