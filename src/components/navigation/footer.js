import { View, Text, Button, StyleSheet, Image,TouchableOpacity } from "react-native";
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import { changeView } from "../../store/actions/creators/navigation";
import { useDispatch } from "react-redux";

function Footer({events,navigation}) {

  const dispatch = useDispatch();
      const handleClick = (view) => {
        console.log('view change click')
          dispatch(changeView(view));
      }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxHeight:"15%",
      }}>

      <View style={styles.row}>

        <TouchableOpacity style={styles.col5} onPress={()=>handleClick('flights')}>
          <View style={styles.row}>
            <Image style ={styles.icon} source={require("../../assets/icons/plane.png")}  />
          </View>
          <View style={styles.row}>
            <Text style={navigation.currentView=='flights'?styles.tabLabelSelected :styles.tabLabel}>Flights</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.col5} onPress={()=>handleClick('transport')}>
          <View style={styles.row}>
            <Image style ={styles.icon}source={require("../../assets/icons/train.png")}  />
          </View>
          <View style={styles.row}>
            <Text style={navigation.currentView=='transport'?styles.tabLabelSelected :styles.tabLabel}>Transport</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.col5} onPress={()=>handleClick('food')}>
          <View style={styles.row}>
            <Image style ={styles.icon}source={require("../../assets/icons/avacado.png")}  />
          </View>
          <View style={styles.row}>
            <Text style={navigation.currentView=='food'?styles.tabLabelSelected :styles.tabLabel}>Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.col5} onPress={()=>handleClick('hotels')}>
          <View style={styles.row}>
            <Image style ={styles.icon}source={require("../../assets/icons/tent.png")}  />
          </View>
          <View style={styles.row}>
            <Text style={navigation.currentView=='hotels'?styles.tabLabelSelected :styles.tabLabel}>Hotels</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.col5} onPress={()=>handleClick('overview')}>
          <View style={styles.row}>
            <Image style ={styles.icon}source={require("../../assets/icons/trip.png")}  />
          </View>
          <View style={styles.row}>
            <Text style={navigation.currentView=='overview'?styles.tabLabelSelected :styles.tabLabel}>Overview</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}



registerRootComponent(Footer);

const mapStateToProps = (state) => {
  return{navigation:state.navigation}
};

export default connect(mapStateToProps,{changeView})(Footer);


const styles = StyleSheet.create({

  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  col5:{
    width:"20%",
    alignItems: 'center'
  },

  icon:{
    width: 60,
    height: 60
  },
  tabLabel:{
    fontFamily: "balloonFont",
    color: "#E2B54B"

  },
  tabLabelSelected:{
    fontFamily: "balloonFont",
    color: "#595456"
  }
});
