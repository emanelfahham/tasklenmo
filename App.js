import React, {Fragment} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
const deviceWidth = Dimensions.get("window").width;
import Slider from '@react-native-community/slider';
import ScoreCard from './components/scoreCard';
import CardSection from './components/CardSection';
import Card from './components/Card';
import general from './styles/generalstyles';
import Button from './components/Button';
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
            <Text style={general.purpleText}>Investement Amount</Text>
            <Text style={general.blackText}>$ 970</Text>
          </View>
          <View>
            <Text style={general.purpleText}>Payback Period</Text>
            <Text style={general.blackText}>1 month</Text>
          </View>
        </View>
        <View style={{marginTop: 10, paddingHorizontal: "5%"}}>
          <Text style={general.purpleText}>Annual Interests</Text>
          <Text style={general.greyText}>Recommended interest rate: 3%</Text>
          <Text style={general.blackText}>4%</Text>
        </View>
        <View style={styles.progressbar}>
            <Slider
                style={{width: deviceWidth/ 1.1, height: 20, alignSelf: 'center'}}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor = "#BB30FF"
                minimumTrackTintColor = "#BB30FF"
                maximumTrackTintColor="#000000"
  />
        </View>
        <View>
           <Button status="dismiss">Dismiss</Button>
           <Button>Make Offer</Button> 
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  bottomContainer:{
    flexDirection: 'row',
    marginTop: 15,
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

});

export default App;
