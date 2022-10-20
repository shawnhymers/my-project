import { View, Text, Button, Image } from "react-native";
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";

function FlightList({toCity, fromCity, footprint}) {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E7E2CD",
        width:'100%'
      }}
    >
      <Text>{toCity}</Text>
      <Text>{fromCity}</Text>
      <Text>{footprint}</Text>

    </View>
  );
}

registerRootComponent(FlightList);

const mapStateToProps = (state) => {
  return{events:state.events,
         navigation:state.navigation}
};

export default connect(mapStateToProps,{})(FlightList);
