import * as React from 'react';
import { View, Text, Button, Image } from "react-native";
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import FlightList from './lists/flightList'
import Svg, { Circle, Rect } from 'react-native-svg';
import styles from "../../styles/styles"
import {Dimensions} from 'react-native';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

function Overview({submits}) {
  console.log(submits)
  const flightCostSum = submits.flightList.reduce((accumulator, flight) => {
    return accumulator + parseFloat(flight.flightCost);
  }, 0);

  const foodCostSum = submits.foodList.reduce((accumulator, food)=>{
    return accumulator +parseFloat(food.footprint)
  },0);

  const dietCostSum = submits.dietList.reduce((accumulator, diet)=>{
    return accumulator +parseFloat(diet.footprint)
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

  const [totalFootprint, setTotalFootprint]=React.useState(parseInt(flightCostSum+foodCostSum+dietCostSum+carCostSum+busCostSum+trainCostSum+hotelCostSum))

  var combinedFoodCost=foodCostSum+dietCostSum
  const data=[ {value:flightCostSum,color:'#82bf93', text:flightCostSum,category:'Flights'},
               {value:20,color:"#E2B54B", text:'20',category:'Transport'},
               {value:combinedFoodCost,color:'#BED3C7', text:combinedFoodCost,category:'Food'},
               {value:15,color:'#B97F51', text:'15',category:'Hotels'} ]

  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E7E2CD",
        width:'100%'
      }}>
      <View style={styles.row}>

        <PieChart data = {data}
                  textColor="black"
                  donut
                  // showText
                  innerRadius={50}
                  radius={80}
                  textSize={14}
                  showTextBackground
                  textBackgroundRadius={12}
                  centerLabelComponent={() => {
                  return <><Text style={styles.roamingText}>{totalFootprint+" KG"}</Text><Text style={styles.roamingText}>Total</Text></>;
                  }}/>



      </View>
      <View style={{flexDirection: "row",
                    paddingTop: "2%",
                    paddingBottom: '5%',
                    flexWrap: "wrap",
                    width:'85%',
                    justifyContent: 'center'}}>
        <View style={{flexDirection: "row",
                      paddingTop: "2%",
                      paddingBottom: '5%',
                      flexWrap: "wrap",
                      minWidth:'100%',
                      justifyContent: 'center'}}>
          <Text style={styles.roamingTextLarge}>Legend</Text>
        </View>
        {data.map((data, i)=>{return <Legend data={data}
                                           key={data.category+i}/>})}
      </View>



    </View>
    </>
  );
}

registerRootComponent(Overview);

const mapStateToProps = (state) => {
  return{submits:state.submits}
};

export default connect(mapStateToProps)(Overview);
function Legend({data}) {
  return(
    <>

      <View style ={{flexDirection:'row',width:'50%',paddingVertical:'1%'}}>
        <View style ={{width:"20%",
                       alignItems: 'right',
                     }}>
          <View style={{height: 18,width: 18,marginRight: 10,borderRadius: 4,alignSelf:'flex-end' ,backgroundColor: data.color || 'white'}}/>
        </View>
        <View style ={{width:"80%",
                       alignItems: 'left',}}>
          <Text style={styles.roamingText}>{data.category}</Text>
        </View>
      </View>

    </>
  )
}
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

// <BarChart data={data}
//           width={Dimensions.get("window").width-40}
//           height={330}
//           yAxisLabel="KG Co2 "
//           chartConfig={chartConfig}
//           verticalLabelRotation={0}
//           showValuesOnTopOfBars={true}
// />
// const data = {
//   labels: ["Flights", "Car","Bus","Train", "Food", "Hotels"],
//   segments:6,
//   datasets: [
//     {
//       data: [20, 45, 28, 80,60,20]
//     }
//   ]
// };
// const chartConfig = {
//   backgroundGradientFrom: "#f5f5f7",
//   backgroundGradientFromOpacity: 1,
//   backgroundGradientTo: "#f5f5f7",
//   backgroundGradientToOpacity: 1,
//   color: (opacity = 1) => `rgba(17, 17, 18, ${opacity})`,
//   strokeWidth: 5, // optional, default 3
//   barPercentage: 0.9,
//   barRadius:9,
//   useShadowColorFromDataset: false,
//   decimalPlaces: 0  // optional
// };



// if (percent1>0) {
//   offset1 = (perimeter*(percent1 )/100)*-1;
// }
//
// var offset2 = perimeter;
// if (percent2>0) {
//   offset2 = (perimeter*(percent1 + percent2)/100)*-1;
// }
//
// var offset3 = perimeter;
// if (percent3>0) {
//   offset3 = (perimeter*(percent1 + percent2 + percent3)/100)*-1;
// }
//
// var offset4 = perimeter;
// if (percent4>0) {
//   offset4 = (perimeter*(percent1 + percent2 + percent3 + percent4 )/100)*-1;
// }
//
// var offset5 = perimeter;
// if (percent5>0) {
//   offset5 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 )/100)*-1;
// }

// const [radius, setRadius]=React.useState(1)
// const [perimeter, setPerimeter]=React.useState(6.283185307179686)

// const [percent1, setPercent1]=React.useState(flightCostSum/totalFootprint)
// const [percent2, setPercent2]=React.useState(flightCostSum/totalFootprint)
// const [percent3, setPercent3]=React.useState(flightCostSum/totalFootprint)
// const [percent4, setPercent4]=React.useState(flightCostSum/totalFootprint)
// const [percent5, setPercent5]=React.useState(flightCostSum/totalFootprint)

// var offset1 = perimeter;
