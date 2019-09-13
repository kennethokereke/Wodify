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


class App extends React.Component {
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

 

  
  renderHeader() {
    const { user } = this.props;
  
    return (
      <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
        <Block flex={false} row style={{ paddingVertical: 15 }}>
          <Block center>
            <Text center h3 white style={{ marginRight: -(25 + 5) }}>
             Crossfit
            </Text>
          </Block>
         
        </Block>
        <Block middle shadow color="white" style={styles.headerChart}>
            <Block center>
               
                   
               <Image
            style={{ width: 290, height: 140 }}
            source={require("../assets/images/image.png")}
          /> 
              
                
            </Block>

          
        </Block>
      </Block>
    );
  }

  renderRequest(appointments) {
    return (
        <Block row  shadow color="white" style={styles.request}>
          <Block
            flex={0.25}
            card
            column
            
            style={styles.requestStatus}
          >
            <Block flex={0.25}  middle center >
              <Text h3 bold center >
                {appointments.name}
              </Text>
            </Block>
            <Block flex={0.7} center middle >
              <Text size={12} gray>
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
    if (!this.state.fontsLoaded) {
      return (
        <Block center middle>
          <Image
            style={{ width: 140, height: 140 }}
            source={require("../assets/icon.png")}
          />
        </Block>
      );
    }

    return (
      <SafeAreaView style={styles.safe}>
        {this.renderHeader()}
        {this.renderRequests()}
      </SafeAreaView>
    );
  }
}

App.defaultProps = {
 
  appointments: Appointments.appointments,
  
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary
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
