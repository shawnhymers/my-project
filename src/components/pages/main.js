import { View, Text, Button, Image } from "react-native";
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import { addClick } from "../../store/actions/creators/events";
import { useDispatch } from "react-redux";
import Flights from '../forms/flights'
import Transport from '../forms/transport'
import Food from '../forms/food'
import Hotels from '../forms/hotels'
import Overview from './overview'

function Main({events,navigation}) {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      {navigation.currentView==="flights"?
        <Flights/>
      :
        null}

      {navigation.currentView==="transport"?
        <Transport/>
      :
        null}

      {navigation.currentView==="food"?
        <Food/>
      :
        null}

      {navigation.currentView==="hotels"?
        <Hotels/>
      :
        null}

      {navigation.currentView==="overview"?
        <Overview/>
      :
        null}
    </View>
  );
}

registerRootComponent(Main);

const mapStateToProps = (state) => {
  return{navigation:state.navigation}
};

export default connect(mapStateToProps)(Main);
