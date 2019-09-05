import React, {Fragment} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
const deviceWidth = Dimensions.get("window").width;
import Slider from '@react-native-community/slider';
import ScoreCard from './components/scoreCard';
import CardSection from './components/CardSection';
import Card from './components/Card';
const App = () => {
  return (
    <Fragment>
      <View style={styles.profileContainer}>
        <View style={styles.scoreContainer}>
          <View style={styles.imageContainer}>
              <Image 
              style = {styles.profileimage}
              source={require("./assets/coder.png")}/>
          </View>
          <View style={styles.info}>
              <View>
                <Text style={{fontSize: 20, fontWeight: '500'}}>IO</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: '2%'}}>
                <ScoreCard 
                source={require("./assets/raindrop.png")}
                detail="73"
                title="LENMI SCORE" />
                <ScoreCard 
                source={require("./assets/circle.png")}
                detail="500-600"
                title="CREDIT SCORE" />
              </View>
              <Text style={{fontSize: 12, color:"grey"}}>Vintage Score 4.0</Text>
          </View>
        </View>
        <View style={styles.cardsContainer}>
              <CardSection>
                <Card status='hello' ctitle = 'PAYMENT HISTORY' cinfo = '1 yr 5 mos' />
                <Card status='hello' ctitle='CREDIT UTILIZATION' cinfo='100%'/>
              </CardSection>
              <CardSection>
                <Card ctitle='TOTAL ACCOUNTS' cinfo='2'/>
                <Card ctitle='CREDIT UTILIZATION' cinfo='11%'/>
              </CardSection>
              <CardSection>
                <Card ctitle='ANNUAL INCOME' cinfo='$53,000/yr'/>
                <Card ctitle='DERGATORY MARKS' cinfo='3'/>
              </CardSection>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.bottomContainer}>
          <View style={{marginEnd: 20}}>
            <Text style={styles.purpleText}>Investement Amount</Text>
            <Text style={styles.blackText}>$ 970</Text>
          </View>
          <View>
            <Text style={styles.purpleText}>Payback Period</Text>
            <Text style={styles.blackText}>1 month</Text>
          </View>
        </View>
        <View style={{marginTop: 10, paddingHorizontal: "5%"}}>
          <Text style={styles.purpleText}>Annual Interests</Text>
          <Text style={styles.text}>Recommended interest rate: 3%</Text>
          <Text style={styles.blackText}>4%</Text>
        </View>
        <View style={styles.progressbar}>
            <Slider
                style={{width: deviceWidth/ 1.1, height: 60, alignSelf: 'center'}}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor = "#BB30FF"
                minimumTrackTintColor = "#BB30FF"
                maximumTrackTintColor="#000000"
  />
        </View>
        <View>
           <LinearGradient 
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 0}} 
              colors={['#fff', '#fff', '#fff']} 
              style={[styles.linearGradient, styles.button, {shadowColor: "#000",
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 2}]}>
            <TouchableOpacity>
              <Text style={styles.redButton}>
                        Dismiss
            </Text>
            </TouchableOpacity>
            
            </LinearGradient>
            <LinearGradient 
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 0}} 
              colors={['#568FFC', '#8B5DFD', '#BB30FF']} 
              style = {
                [styles.linearGradient, styles.button, {
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 2
                }]
              } >
            <Text style={[styles.redButton, {color: '#fff'}]}>
                        Make Offer
            </Text>
            </LinearGradient>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  bottomContainer:{
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: "5%",
  },
  profileContainer:{
    backgroundColor: Colors.lighter,
    height: '55%',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  scoreContainer:{
    flexDirection: 'row',
    height: deviceWidth /4,
  },
  scrollView: {
    backgroundColor: Colors.white,
    flex: 1
  },
  imageContainer:{
    width: deviceWidth /3.5,
    paddingHorizontal: 10
  },
  info:{
    width: '100%'
  },
  cardsContainer:{
    marginTop: "7%"
    },
  profileimage:{
    resizeMode: 'center',
      height: 90,
      width: 90,
      borderRadius: 120/2,
      alignSelf: 'center'
  },
  purpleText:{
    color: '#D77CFF',
    fontSize: 16,
    marginBottom: 3
  }, 
  blackText:{
    fontSize: 20,
  },
  text:{
    color: 'grey',
      fontSize: 13,
      fontWeight: '600'
  },
  redButton:{
    color: '#FF3636',
    textAlign: 'center',
    fontSize: 16,
  },
  button:{
    width: deviceWidth / 1.1,
    alignSelf: 'center',
    marginTop: 5,
    height: deviceWidth/11,
    justifyContent: 'center'
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },
  
});

export default App;
