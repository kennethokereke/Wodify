import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Font } from "expo";


import { Block, Text , Button} from "../components";
import * as theme from "../constants/theme";
import * as Appointments from '../constants/appointments'


class TodayWOD extends React.Component {
  state = {
    fontsLoaded: false
  };

  loadFonts() {
    return Font.loadAsync({
      "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf")
    });
  }

  async componentDidMount() {
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }

 


  renderRequest(appointments) {
    return (
        <Block row  shadow color="white" style={styles.request}>
          <Block
            flex={0.25}
            card
           
           
            
            style={styles.requestStatus}
          >
              
            <Block flex={0.30}  middle center>
              <Text body bold center >
                {appointments.name}
              </Text>
            </Block>
            <Block flex={0.2}>
              <Text size={12} gray center>
                {appointments.Time}
              </Text>
            </Block>
            
          </Block>
          

          
        </Block>
      );
  }

  renderRequests() {
    const {appointments} = this.props;

    return (
      <Block flex={0.8} column color="gray2" style={styles.requests}>
        <Block flex={false} row space="between" style={styles.requestsHeader}>
          <Text light>Classes</Text>
          
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          {appointments.map(appointments => (
            <TouchableOpacity activeOpacity={0.8} key={`appointment-${appointments.id}`}>
              {this.renderRequest(appointments)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    );
  }


  render() {
    

    return (
      <SafeAreaView style={styles.safe}>
       
        {this.renderRequests()}
      </SafeAreaView>
    );
  }
}

TodayWOD.defaultProps = {
 
  appointments: Appointments.TodayWOD,
  
};

export default TodayWOD;

const styles = StyleSheet.create({
  safe: {
    flex: 6,
    backgroundColor: theme.colors.gray2
  },
  headerChart: {
    
    
    zIndex: 1,
    flex: 1,
    
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  request: {
    padding: 20,
    marginBottom: 15
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90
  }
});
