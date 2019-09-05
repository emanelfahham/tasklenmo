import React from 'react';
import {TouchableOpacity, Dimensions, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const deviceWidth = Dimensions.get("window").width;
import general from '../styles/generalstyles';

const Button = (props) => {
    return(
    <LinearGradient 
        key={props.status}
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}} 
        colors={ props.status == "dismiss" ? ['#fff', '#fff', '#fff'] : ['#568FFC', '#8B5DFD', '#BB30FF']}
        style={[styles.linearGradient, styles.button, general.shadow]}>
            <TouchableOpacity>
              < Text style = {
                  [styles.buttonText, props.status == "dismiss" ? {
                      color: "#FF3636" 
                  } : {color: '#fff'}]
              } >
                        {props.children}
              </Text>
            </TouchableOpacity>            
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
      buttonText: {
              color: '#FF3636',
              textAlign: 'center',
              fontSize: 16,
          },
          button: {
              width: deviceWidth / 1.1,
              alignSelf: 'center',
              marginTop: 5,
              height: deviceWidth / 11,
              justifyContent: 'center'
          },
          linearGradient: {
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 5,
              marginTop: 16,
              width: 350,
          },
})

export default Button;