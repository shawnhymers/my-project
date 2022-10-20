# My Universal React Project

cd Documents/Apps/my-project && npm run ios

cd Documents/Apps/my-project && npx expo install react-native@0.69.6
cd Documents/Apps/my-project && npm install @redux-devtools/extension
cd Documents/Apps/my-project && npm install --save react-redux redux redux-thunk

cd Documents/Apps/my-project && npm install radio-buttons-react-native --save

 cd Documents/Apps/my-project && npm install --save prop-types

  cd Documents/Apps/my-project && npm i react-native-material-ui

  cd Documents/Apps/my-project && npm i npm i patch-package
  cd Documents/Apps/my-project && npm i deprecated-react-native-prop-types

  cd Documents/Apps/my-project && npm i react-native-material-dropdown-no-proptypes

  cd Documents/Apps/my-project && npm i react-native-paper
  cd Documents/Apps/my-project && npm install --save react-native-searchable-dropdown
  install @mui/material @emotion/react @emotion/styled

  cd Documents/Apps/my-project && npm i react-native-vector-icons

  cd Documents/Apps/my-project && npm i react-native-paper-dropdown

  cd Documents/Apps/my-project && npm install react-native-numeric-input --save

  cd Documents/Apps/my-project && npm install recharts
  cd Documents/Apps/my-project && npm i react-native-chart-kit
  cd Documents/Apps/my-project && npm i react-native-svg
  cd Documents/Apps/my-project && npm uninstall react-native-svg
  cd Documents/Apps/my-project && npm i npx expo install react-native-svg@12.3.0

  cd Documents/Apps/my-project && npm i entities
  cd Documents/Apps/my-project && npm uninstall react-native-svg-charts
  npm uninstall react-native-svg
  expo install react-native-svg
  npm install --save react-native-svg-charts


  cd Documents/Apps/my-project && npm uninstall react-native-svg-charts
  cd Documents/Apps/my-project && npm uninstall entities
  cd Documents/Apps/my-project && npm uninstall react-native-svg@12.3.0
  cd Documents/Apps/my-project && npm uninstall react-native-chart-kit
  cd Documents/Apps/my-project && npm uninstall recharts

  cd Documents/Apps/my-project && npx expo install react-native-svg

  cd Documents/Apps/my-project && npm uninstall recharts
  cd Documents/Apps/my-project && npm install react-native-gifted-charts react-native-linear-gradient react-native-svg react-native-canvas react-native-webview

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🚀 How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` or `npm run start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## Running/Modifying Native Code

You can generate native iOS and Android projects from your Expo config file (**app.json**/ **app.config.js**) by runnning `npx expo prebuild`. These native projects can then be compiled and run via XCode and Android Studio.

> 💡 Learn more about [native code in Expo](https://docs.expo.dev/workflow/customizing/)

## Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.dev/distribution/app-stores/).
- Deploy the website using this guide: [Web deployment](https://docs.expo.dev/distribution/publishing-websites/).

## 📝 Notes

- Learn more about [Universal React](https://docs.expo.dev/).
- See what API and components are [available in the React runtimes](https://docs.expo.dev/versions/latest/).
- Find out more about developing apps and websites: [Guides](https://docs.expo.dev/guides/).



<!-- Overview backup -->

import * as React from 'react';
import { View, Text, Button, Image } from "react-native";
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import FlightList from './lists/flightList'
import Svg, { Circle, Rect } from 'react-native-svg';
import styles from "../../styles/styles"

function Overview({submits}) {

  const flightCostSum = submits.flightList.reduce((accumulator, flight) => {
    return accumulator + parseFloat(flight.flightCost);
  }, 0);

  const foodCostSum = submits.foodList.reduce((accumulator, food)=>{
    return accumulator +parseFloat(food.footprint)
  },0);

  const carCostSum =submits.carList.reduce((accumulator, car)=>{
    return accumulator+parseFloat(car.footprint)
  },0)

  const busCostSum =submits.busList.reduce((accumulator, bus)=>{
    return accumulator+parseFloat(bus.footprint)
  },0)

  const trainCostSum =submits.trainList.reduce((accumulator, train)=>{
    return accumulator+parseFloat(train.footprint)
  },0)

  const hotelCostSum =submits.hotelList.reduce((accumulator, hotel)=>{
    return accumulator+parseFloat(hotel.footprint)
  },0)

  const [totalFootprint, setTotalFootprint]=React.useState(flightCostSum+foodCostSum+carCostSum+busCostSum+trainCostSum+hotelCostSum)
  const [radius, setRadius]=React.useState(1)
  const [perimeter, setPerimeter]=React.useState(6.283185307179686)
  // const [percent1, setPercent1]=React.useState(flightCostSum/totalFootprint)
  // const [percent2, setPercent2]=React.useState(flightCostSum/totalFootprint)
  // const [percent3, setPercent3]=React.useState(flightCostSum/totalFootprint)
  // const [percent4, setPercent4]=React.useState(flightCostSum/totalFootprint)
  // const [percent5, setPercent5]=React.useState(flightCostSum/totalFootprint)

  var offset1 = perimeter;




  const color1='#82bf93'
  const color2='#705fd9'
  const color3='#b54550'
  const color4='#e0d480'
  const color5='#c29361'
  const color6='#1e1c63'


if (percent1>0) {
  offset1 = (perimeter*(percent1 )/100)*-1;
}

var offset2 = perimeter;
if (percent2>0) {
  offset2 = (perimeter*(percent1 + percent2)/100)*-1;
}

var offset3 = perimeter;
if (percent3>0) {
  offset3 = (perimeter*(percent1 + percent2 + percent3)/100)*-1;
}

var offset4 = perimeter;
if (percent4>0) {
  offset4 = (perimeter*(percent1 + percent2 + percent3 + percent4 )/100)*-1;
}

var offset5 = perimeter;
if (percent5>0) {
  offset5 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 )/100)*-1;
}





  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E7E2CD",
        width:'100%'
      }}>
      <Text>{flightCostSum}</Text>
        <Svg viewBox="0 0 3 3" style={{transform:[{ rotate: '270deg' }]}}  >
              <Circle cx="1.5" cy="1.5" r={radius} fill="white" />
              <Circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color1} strokeWidth="0.61" />
              <Circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color2} strokeWidth="0.61" strokeDasharray={perimeter}  strokeDashoffset={offset1} />
              <Circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color3} strokeWidth="0.61" strokeDasharray={perimeter} strokeDashoffset={offset2}/>
              <Circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color4} strokeWidth="0.61" strokeDasharray={perimeter} strokeDashoffset={offset3}/>
              <Circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color5} strokeWidth="0.61" strokeDasharray={perimeter} strokeDashoffset={offset4}/>
              <Circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color6} strokeWidth="0.61" strokeDasharray={perimeter} strokeDashoffset={offset5}/>
          </Svg>

    </View>
  );
}

registerRootComponent(Overview);

const mapStateToProps = (state) => {
  return{submits:state.submits}
};

export default connect(mapStateToProps)(Overview);
