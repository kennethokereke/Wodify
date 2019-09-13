import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
//import { LinearGradient } from 'expo';


// alternative for expo LinearGradient
// import LinearGradient  from 'react-native-linear-gradient';

import { Block, Badge, Card, Text,Label } from '../components';
import { styles as blockStyles } from '../components/Block';
import { styles as cardStyles } from '../components/Card';
import { theme, mocks } from '../constants';
import * as Appointment from '../constants/appointments'

const { width } = Dimensions.get('window');

export default class Welcome extends Component {
  
  

  renderMonthly() {
    const { navigation } = this.props;

    return (
        
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Rewards")}
      >
        <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
          

          <Block>
            <Block center>
              <Text h1 spacing={1.7}>2,000</Text>
              <Text spacing={0.7}>Goal of the day</Text>
            </Block>

            <Block color="gray3" style={styles.hLine} />

            <Block row>
              <Block center>
                <Text size={20} spacing={0.6} primary style={{ marginBottom: 6 }}>2,500</Text>
                <Text body spacing={0.7}>Calorie</Text>
                <Text body spacing={0.7}>Intake</Text>
              </Block>

              <Block flex={false} color="gray3" style={styles.vLine} />

              <Block center>
                <Text size={20} spacing={0.6} primary style={{ marginBottom: 6 }}>500</Text>
                <Text body spacing={0.7}>Calorie</Text>
                <Text body spacing={0.7}>Intake</Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </TouchableOpacity>
     
    )
  }




  renderList() {
      return (
        <Card
        title="FOOD"
        style={[styles.margin, { marginTop: 18 }]}
      >
        <Block style={styles.food}>
          <TouchableOpacity activeOpacity={0.8}>
            <Block row center>
              <Block>
              <Image
            source={require('../assets/icons/sausages.png')}
           style={{ height: 50, width: 50 }}
            />
              </Block>
              <Block flex={2}>
                <Text h4>Cooked Sausages</Text>
                <Text paragraph color="gray">3 Pieces</Text>
              </Block>
              <Block>
                <Text paragraph right color="black">Calories</Text>
                <Text paragraph right color="gray">150</Text>
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>
        <Block style={styles.food}>
          <TouchableOpacity activeOpacity={0.8}>
            <Block row center>
              <Block>
              <Image
            source={require('../assets/icons/juice.png')}
           style={{ height: 50, width: 50 }}
            />
              </Block>
              <Block flex={2}>
                <Text h4>Juice</Text>
                <Text paragraph color="gray">2 1/2 Cups</Text>
              </Block>
              <Block>
                <Text paragraph right color="black">Calories</Text>
                <Text paragraph right color="gray">100</Text>
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>

        <Block style={styles.food}>
          <TouchableOpacity activeOpacity={0.8}>
            <Block row center>
              <Block>
              <Image
            source={require('../assets/icons/bread.png')}
           style={{ height: 30, width: 30 }}
            />
              </Block>
              <Block flex={2}>
                <Text h4>Wheat Bread</Text>
                <Text paragraph color="gray">1 Piece </Text>
              </Block>
              <Block>
                <Text paragraph right color="black">Calories</Text>
                <Text paragraph right color="gray">100</Text>
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>
        <Block style={styles.food}>
          <TouchableOpacity activeOpacity={0.8}>
            <Block row center>
              <Block>
              <Image
            source={require('../assets/icons/eggs.png')}
           style={{ height: 50, width: 50 }}
            />
              </Block>
              <Block flex={2}>
                <Text h4>Eggs</Text>
                <Text paragraph color="gray">2 Pieces</Text>
              </Block>
              <Block>
                <Text paragraph right color="black">Calories</Text>
                <Text paragraph right color="gray">150</Text>
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>
      </Card>
      )
  }

  renderHistory() {
      return (
        <Card
        title="Yesterday"
        style={[styles.margin, { marginTop: 18 }]}
      >
        <Block row right>
          <Block flex={2} row center right>
            <Label lightred />
            <Text paragraph color="gray">Goal 2,000</Text>
          </Block>
          <Block row center right>
          <Image
            source={require('../assets/icons/eggs.png')}
           style={{ height: 50, width: 50 }}
            />
            <Text paragraph color="gray">Accomplishment</Text>
          </Block>
        </Block>
        <Block>
          <Text h2 style={{ marginBottom: 17 }}>2,600</Text>
        </Block>
      </Card>
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