import { View, Text,  Image, ScrollView,Modal,Pressable } from "react-native";
import styles from "../../styles/styles"
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import { addClick } from "../../store/actions/creators/events";
import {submitFlight} from "../../store/actions/creators/submits"
import { useDispatch } from "react-redux";
import * as React from 'react';
import { TextInput,RadioButton, Button } from 'react-native-paper';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchOption from '../reusable/searchOption'
import airportData from "../../assets/data/airportData"
import RadioGroup from "../reusable/radioGroup"

function Flights({events,navigation}) {

  const dispatch = useDispatch();

  // Controls the switch between main screen and flight lookups
  const [view, setView]=React.useState('main')

  // Airport names to put in the text fields
  const [fromFlight,setFromFlight] = React.useState('');
  const [toFlight,setToFlight] = React.useState('');

  // Full airport data obj to send to store
  const [toFlightData,setToFlightData] = React.useState('');
  const [fromFlightData,setFromFlightData] = React.useState('');

  // string used to look for either to or from flight
  const [flightSearch, setFlightSearch]=React.useState('');

  // Errors for incomplete fields upon submit
  const [fromFlightError, setFromFlightError]=React.useState(false);
  const [toFlightError, setToFlightError]=React.useState(false);

  // Radio box flight search options
  const [searchBy,setSearchBy] = React.useState('city');
  const [flightClass,setFlightClass] = React.useState('economy');
  const [flightType,setFlightType] = React.useState('roundtrip');

  // Current array of airports to show
  const [flightOptions, setFlightOptions] = React.useState(airportData.slice(0,15))

  // Carbon footprint calculated fields
  const [flightFinalCost, setFlightFinalCost]=React.useState(0)
  const [flightDistance, setFlightDistance]=React.useState(0)

  // Effect listeners to update footprint number on input changes
  React.useEffect(() => {
    calculateFlightFootprint()
  }, [flightClass, flightType]);
  React.useEffect(() => {
    if (fromFlightData.Airport!==''&&toFlightData.Airport!=='') {
      calculateFlightFootprint()
    }
  }, [fromFlightData]);
  React.useEffect(() => {
    if (fromFlightData.Airport!==''&&toFlightData.Airport!=='') {
      calculateFlightFootprint()
    }
  }, [toFlightData]);


  function resetState(){
    console.log('reseting state')
    setToFlightData({})
    setFromFlightData({})
    setFromFlight('')
    setToFlight('')
    setFlightDistance(0)
    setFlightFinalCost(0)
    setFlightClass('economy')
    setFlightType('roundtrip')
  }

  // Updates the options shown for flights on keyboard input
  function updateFlightSearch(e){
    console.log(e)
    setFlightSearch(e)
    if (e !=='') {
      var options = airportData.filter(function (el)
      {
        if (searchBy==='city') {
          return el.City.toUpperCase().includes(e.toUpperCase())
        }
        else if (searchBy==='airport') {
          return el.Airport.toUpperCase().includes(e.toUpperCase())
        }
        else if (searchBy==='country') {
          return el.Country.toUpperCase().includes(e.toUpperCase())
        }
        else if (searchBy==='code') {

        }return el.Code.toUpperCase().includes(e.toUpperCase())

    })
    }
    else {
      options = airportData.slice(0,15);

    }
    if (options.length>15) {
        setFlightOptions(options.slice(0,15))
    }
    else {
        setFlightOptions(options)
    }

  }

  // Add's airport to to or from section on select from search options
  function selectAirport(key){
    var index = airportData.map(e => e.Airport).indexOf(key);
    if (view==='fromSearch') {
      setFromFlight(airportData[index].Airport)
      setFromFlightData(airportData[index])
    }
    else if (view==='toSearch') {
      setToFlight(airportData[index].Airport)
      setToFlightData(airportData[index])
    }
    setView('main')
    setFlightSearch('')
  }


  function addFlight(){
    if (fromFlight==='') {
      setFromFlightError(true)
    }
    else {
      setFromFlightError(false)
    }
    if(toFlight===''){
      setToFlightError(true)
    }
    else {
      setToFlightError(false)
    }
    if (fromFlight!==''&&toFlight!=='') {

      let flightCostData= calculateFlightFootprint()
      let flightCost=flightCostData[0]
      let flightDistance=flightCostData[1]

      let data ={fromFlightCity : fromFlightData.City,
                 toFlightCity : toFlightData.City,

                 fromFlightAirport : fromFlightData.Airport,
                 toFlightAirport : toFlightData.Airport,

                 fromFlightCountry : fromFlightData.Country,
                 toFlightCountry : toFlightData.Country,

                 flightClass : flightClass,
                 flightType : flightType,
                 flightCost:flightCost,
                 flightDistance:flightDistance}

      dispatch(submitFlight(data))
      resetState()

    }
  }

  function calculateFlightFootprint(){

    let fromLat = fromFlightData.lat*(Math.PI/180)
    let fromLong = fromFlightData.long*(Math.PI/180)

    let toLat = toFlightData.lat*(Math.PI/180)
    let toLong = toFlightData.long*(Math.PI/180)

    let longDiff = Math.abs(fromLong-toLong);
    let latDiff = Math.abs(fromLat-toLat);

    let sinLatDiff = Math.sin((latDiff/2))
    let elm1 = Math.pow(sinLatDiff, 2)

    let sinLongDiff = Math.sin((longDiff/2))
    let elm2 = Math.cos(fromLat)*Math.cos(toLat)* Math.pow(sinLongDiff, 2)

    let distance = 2*6378.1*Math.asin(Math.sqrt((elm1+elm2)))

    setFlightDistance(distance)
    // Parameters that are the same for short or long
   let emmisionFactor = 3.15;
   let passengerLoadFactor = 0.82;
   let nonCo2Multiplier = 2; // accounts for the non co2 effects of the flight
   let preproductionFactor =0.54; //CO2e emission factor for preproduction jet fuel, kerosene
   let aircraftFactor = 0.00038;
   let airportInfastructureFactor = 11.68;

   // Parameters that depend on distance
   let a,b,c = 0;
   let seats = 0;
   let cargoFactor = 0;
   let cabinWeightFactor = 0;
   let shortHaulCabinWeightFactor = 0;
   let longHaulCabinWeightFactor = 0;

   // Setting the cabin weight factor bassed on class.
   // We set the short and long values so we can interpolate between
   if (flightClass ==='economy') {
     shortHaulCabinWeightFactor = 0.96;
     longHaulCabinWeightFactor = 0.8;
   }
   else if (flightClass ==='business') {
     shortHaulCabinWeightFactor = 1.26;
     longHaulCabinWeightFactor = 1.54;
   }
   else if (flightClass ==='first') {
     shortHaulCabinWeightFactor = 2.40;
     longHaulCabinWeightFactor = 2.40;
   }

   // For short haul
   if (distance<=1500) {
     a = 0;
     b = 2.714;
     c = 1166.52;
     seats = 153.51;
     cargoFactor = 0.93;
     cabinWeightFactor = shortHaulCabinWeightFactor;
   }
   // For long haul
   else if (distance>=2500) {
     a = 0.0001;
     b = 7.104;
     c = 5044.93;
     seats = 280.21;
     cargoFactor = 0.74;
     cabinWeightFactor = longHaulCabinWeightFactor;

   }
   // For the inbetween hauls
   else {
     a = (((2500-distance)*0) + ((distance-1500)*0.0001))/(1000);
     b = (((2500-distance)*2.714) + ((distance-1500)*7.104))/(1000);
     c = (((2500-distance)*1166.52) + ((distance-1500)*5044.93))/(1000);
     seats = (((2500-distance)*153.51) + ((distance-1500)*280.21))/(1000);
     cargoFactor = (((2500-distance)*0.93) + ((distance-1500)*0.74))/(1000);
     cabinWeightFactor = (((2500-distance)*shortHaulCabinWeightFactor) + ((distance-1500)*longHaulCabinWeightFactor))/(1000);
   }
   let flightCost = a*Math.pow(distance,2) + b*distance + c;

   let personalFlightCost = flightCost/(seats*passengerLoadFactor);

   let fuelProductionFactor = emmisionFactor*nonCo2Multiplier + parseFloat(preproductionFactor)

   let term1 = personalFlightCost*cargoFactor*cabinWeightFactor*fuelProductionFactor;

   let term2 = aircraftFactor*distance;

   let term3 = airportInfastructureFactor;

   let finalCost = parseFloat(term1)+parseFloat(term2)+parseFloat(term3);

   if (flightType ==='oneway') {
     setFlightFinalCost(finalCost)
     return[finalCost,distance]
   }
   else if (flightType === 'roundtrip') {
     let newFinalCost = finalCost*2
     setFlightFinalCost(newFinalCost)
     return[newFinalCost,distance]
   }

  }



  return (
    <>

    {view==='main'?
    <>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style ={styles.textInputWrapper}>
          <TextInput
            style ={styles.textInput}
            label="From"
            value={fromFlight}
            id='fromInput'
            error={fromFlightError}
            onFocus={() => {
              setView('fromSearch');
            }}/>
        </View>
      </View>

      <View style={styles.row}>
        <View style ={styles.textInputWrapper}>
          <TextInput
            style ={styles.textInput}
            label="To"
            value={toFlight}
            id='toInput'
            error={toFlightError}
            onFocus={() => {
              setView('toSearch');
            }}/>
        </View>
      </View>

      <View style={styles.radioGroupContainer}>
        <RadioGroup options={[{label:'Economy',value:'economy'},
                              {label:'Business',value:'business'},
                              {label:'First Class',value:'first'}]}
                    title="Flight Class:"
                    logChange={(flightClass)=>setFlightClass(flightClass)}
                    value={flightClass}
                    row={true}
                    passiveColor="#91A98F"
                    activeColor="#91A98F"/>
      </View>
      <View style={styles.radioGroupContainer}>
        <RadioGroup options={[{label:'Round Trip',value:'roundtrip'},
                              {label:'One Way',value:'oneway'}]}
                    title="Flight Type:"
                    logChange={(flightType)=>setFlightType(flightType)}
                    value='roundtrip'
                    row={true}
                    passiveColor="#91A98F"
                    activeColor="#91A98F"/>
        </View>
        <View style={styles.row}>
          {Number.isNaN(flightFinalCost)||flightFinalCost<=0?
            <Text style={styles.roamingText}>Footprint: 0
            </Text>
            :
            <Text style={styles.roamingText}>Footprint: {flightFinalCost.toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })} KG
            </Text>

          }
        </View>

        <View style={styles.row}>
            <Button mode="contained"
                    onPress={() => addFlight()}
                    color="#91A98F">
              Add Flight
            </Button>
        </View>

      </View>

    </>
    :
    <>

    <View style={styles.row}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop:'10%',
        backgroundColor: "#E7E2CD",
        width:'100%'
      }}
    >

    <View style ={styles.leftAlignedRow}>
      <Icon name="arrowleft"
            size={30}
            color="#595456"
            onPress={()=>setView('main')} />
    </View>

    <View style={styles.radioGroupContainer}>
    <RadioGroup options={[{label:'City',value:'city'},
                          {label:'Airport',value:'airport'},
                          {label:'Country',value:'country'},
                          {label:'Code',value:'code'}]}
                title="Search By:"
                logChange={(searchBy )=> setSearchBy(searchBy)}
                value='city'
                row={true}
                passiveColor="#91A98F"
                activeColor="#91A98F"/>
    </View>



    <View style={styles.row}>
      <View style ={styles.textInputWrapper}>
        <TextInput
          style ={styles.textInput}
          label="Search"
          value={flightSearch}
          onChangeText={(e)=>{
            updateFlightSearch(e)
          }}
          />
      </View>
    </View>
    <ScrollView style={styles.searchDropDown}>
    {flightOptions.map((items, i)=>{return <SearchOption displayText ={items.Airport+' ('+items.Code+')'}
                                                         index = {items.Airport}
                                                         selectOption={selectAirport}
                                                         key={items.Airport+i}/>})}
    </ScrollView>
      </View>


    </>}


    </>
  );
}

registerRootComponent(Flights);

const mapStateToProps = (state) => {
  return{events:state.events,
         navigation:state.navigation}
};

export default connect(mapStateToProps,{addClick, submitFlight})(Flights);
