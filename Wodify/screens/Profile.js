import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
//import { LinearGradient } from 'expo';


// alternative for expo LinearGradient
// import LinearGradient  from 'react-native-linear-gradient';

import { Block, Badge, Card, Text,Button } from '../components';
import { styles as blockStyles } from '../components/Block';
import { styles as cardStyles } from '../components/Card';
import { theme, mocks } from '../constants';
import * as Appointment from '../constants/appointments'

const { width } = Dimensions.get('window');

export default class Profile extends Component {
  
  

  renderMonthly() {
    const { navigation } = this.props;

    return (
        
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Rewards")}
      >
        <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
          
            <Block center>
            <Image
            source={require('../assets/images/avatar.png')}
           style={{ height: 200, width: 200}}
            />
              
          </Block>
        </Card>
      </TouchableOpacity>
     
    )
  }




  renderList() {
    const { navigation } = this.props;
      return (
        
       <Block flex={2} middle>
           <Button color={'purple'}  onPress={() => navigation.navigate('Login')}>
              <Text white caption center size={20} >
                Log out
              </Text>
            </Button>
       </Block>
      )
  }

  

  



  render() {
    return (
      <React.Fragment>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          {this.renderMonthly()}
          
          {this.renderList()}
        
        </ScrollView>
        
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1,
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1,
  },
  awards: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding,
  },
  moreIcon: {
    width: 16,
    height: 17,
    position: 'absolute',
    right: theme.sizes.base,
    top: theme.sizes.base,
  },
  startTrip: {
    position: 'absolute',
    left: (width - 144) / 2,
    bottom: 0,
  },
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  food: {
    marginBottom: 11,
  },
  
})