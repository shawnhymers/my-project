import * as React from 'react';
import { View, Text, Image,ScrollView } from "react-native";
import styles from '../../styles/styles'
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import { addClick } from "../../store/actions/creators/events";
import { useDispatch } from "react-redux";
import { TextInput,RadioButton,Button,Switch} from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import {submitHotel} from "../../store/actions/creators/submits"
import RadioGroup from "../reusable/radioGroup"

function Hotels({events,navigation}) {

  const [advanced, setAdvanced]=React.useState(false)

  const [hotelName, setHotelName] =React.useState('')
  const [hotelSize, setHotelSize]=React.useState('large')
  const [hotelEffeciency, setHotelEffeciency]=React.useState('good')

  const [numberOfNights, setNumberOfNights] =React.useState(0)

  const [numberOfGuests, setNumberOfGuests] =React.useState(0)
  const [avgOccupancy, setAvgOccupancy] =React.useState('95')

  const [electricConsumption, setElectricConsumption] =React.useState('80')
  const [fuelConsumption, setFuelConsumption]=React.useState('210')
  const [waterConsumption, setWaterConsumption]=React.useState('172.5')

  const [hotelFootprint, setHotelFootprint] = React.useState(0);

  const [errors, seterrors] = React.useState({nameError:false,
                                        nightsError:false,
                                        occupancyError:false,
                                        numberOfRoomsError:false,
                                        electricConsumptionError:false,
                                        fuelConsumptionError:false,
                                        waterConsumptionError:false})
  function onToggleSwitch(){
    setAdvanced(!advanced)
  }
  function addHotel(){
    console.log('adding hotel')
    if (hotelName!=='' && hotelFootprint>0) {
      let data ={hotelName:hotelName,
                 numberOfGuests:numberOfGuests,
                 numberOfNights:numberOfNight,
                 footprint:hotelFootprint,
               }
      submitHotel(data)
    }

  }
  const dispatch = useDispatch();

      const handleClick = () => {
          dispatch(addClick(events.numberOfClicks+1));
      }
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: '10%',
        paddingBottom: '50%',
        backgroundColor: "#E7E2CD",
        width:'100%'
      }}>
      <View style={styles.rightAlignedRow}>
        <Switch value={advanced}
                onValueChange={onToggleSwitch}
                color='#91A98F'
                style={styles.switch} />
        <Text style={styles.roamingText}>Advanced</Text>
      </View>
      {advanced?
        <>
        <View style={styles.row}>
          <View style ={styles.textInputWrapper}>
            <TextInput
              style ={styles.textInput}
              label="Average Occupancy (%)"
              keyboardType='numeric'
              value={avgOccupancy}
              error={false}
              onChangeText={(e)=>{
                setAvgOccupancy(e)
              }}/>
          </View>
        </View>

        <View style={styles.row}>
          <View style ={styles.textInputWrapper}>
            <TextInput
              style ={styles.textInput}
              label="Electricity Consumption (kWh/m^2/Year)"
              keyboardType='numeric'
              value={electricConsumption}
              error={false}
              onChangeText={(e)=>{
                setElectricConsumption(e)
              }}/>
          </View>
        </View>

        <View style={styles.row}>
          <View style ={styles.textInputWrapper}>
            <TextInput
              style ={styles.textInput}
              label="Fuel Consumption (kWh/m^2/Year)"
              keyboardType='numeric'
              value={fuelConsumption}
              error={false}
              onChangeText={(e)=>{
                setFuelConsumption(e)
              }}/>
          </View>
        </View>

        <View style={styles.row}>
          <View style ={styles.textInputWrapper}>
            <TextInput
              style ={styles.textInput}
              label="Water Consumption (kWh/m^2/Year)"
              keyboardType='numeric'
              value={waterConsumption}
              error={false}
              onChangeText={(e)=>{
                setWaterConsumption(e)
              }}/>
          </View>
        </View>



        </>
        :
        <>

        <View style={styles.radioGroupContainer}>
          <RadioGroup options={[{label:'Large',value:'large'},
                                {label:'Medium',value:'medium'},
                                {label:'Small',value:'small'}]}
                      title="Hotel Size:"
                      logChange={(hotelSize)=>setHotelSize(hotelSize)}
                      value={hotelSize}
                      row={true}
                      passiveColor="#91A98F"
                      activeColor="#91A98F"/>
        </View>
        <View style={styles.radioGroupContainer}>
          <RadioGroup options={[{label:'Good',value:'good'},
                                {label:'Fair',value:'fair'},
                                {label:'Poort',value:'poor'}]}
                      title="Hotel Effeciency:"
                      logChange={hotelEffeciency => setHotelEffeciency(hotelEffeciency)}
                      value={hotelEffeciency}
                      row={true}
                      passiveColor="#91A98F"
                      activeColor="#91A98F"/>
        </View>


      </>
      }
      <View style={styles.row}>
        <View style ={styles.textInputWrapper}>
          <TextInput
            style ={styles.textInput}
            label="Hotel Name"
            value={hotelName}
            error={errors.hotelName}
            onFocus={hotelName => {setHotelName(hotelName)}}/>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.roamingText}>
          Number of Guests
        </Text>
      </View>
      <View style={styles.row}>
        <NumericInput value={numberOfGuests}
                      onChange={(e) => setNumberOfGuests(e)}
                      totalWidth={240}
                      totalHeight={50}
                      iconSize={25}
                      step={1}
                      valueType='real'
                      rounded
                      minValue={0}
                      textColor='#595456'
                      iconStyle={{ color: 'white' }}
                      rightButtonBackgroundColor='#91A98F'
                      leftButtonBackgroundColor='#91A98F'/>
      </View>
      <View style={styles.row}>
        <Text style={styles.roamingText}>
          Number of Nights
        </Text>
      </View>
      <View style={styles.row}>
        <NumericInput value={numberOfNights}
                      onChange={(e) => setNumberOfNights(e)}
                      totalWidth={240}
                      totalHeight={50}
                      iconSize={25}
                      step={1}
                      valueType='real'
                      rounded
                      minValue={0}
                      textColor='#595456'
                      iconStyle={{ color: 'white' }}
                      rightButtonBackgroundColor='#91A98F'
                      leftButtonBackgroundColor='#91A98F'/>
      </View>
      <View style={styles.row}>
        {Number.isNaN(hotelFootprint)||hotelFootprint<=0?
          <Text style={styles.roamingText}>Footprint: 0
          </Text>
          :
          <Text style={styles.roamingText}>Footprint: {hotelFootprint.toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })} KG
          </Text>
        }
      </View>
      <View style={styles.row}>
          <Button mode="contained"
                  onPress={() => addHotel()}
                  color="#91A98F">
            Add
          </Button>
      </View>
    </ScrollView>
  );
}

registerRootComponent(Hotels);

const mapStateToProps = (state) => {
  return{events:state.events,
         navigation:state.navigation}
};

export default connect(mapStateToProps,{addClick,submitHotel})(Hotels);
