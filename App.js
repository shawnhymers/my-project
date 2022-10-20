import { View, Text } from "react-native";
import Main from './src/components/pages/main'
import Footer from './src/components/navigation/footer'
import React from 'react';
import store from './src/store/store';
import {Provider} from 'react-redux';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {

  const [fontsLoaded] = useFonts({
    'balloonFont': require('./src/assets/fonts/balloonFont.ttf'),
    'roamingFont':require('./src/assets/fonts/roamingFont.ttf')
  });
  if (!fontsLoaded) {
    return null;
    }
  return (
    <>
    <Provider store ={store}>
      <PaperProvider>
        <Main/>
        <Footer/>
      </PaperProvider>
    </Provider>
    </>
  );
}
registerRootComponent(App);
