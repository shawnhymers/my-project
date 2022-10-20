import * as React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../../styles/styles"
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import { addClick } from "../../store/actions/creators/events";
import {submitCar} from "../../store/actions/creators/submits"
import {submitBus} from "../../store/actions/creators/submits"
import {submitTrain} from "../../store/actions/creators/submits"
import { useDispatch } from "react-redux";
import { TextInput,RadioButton} from 'react-native-paper';
import { Switch, Button} from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import RadioGroup from "../reusable/radioGroup"
import Icon from 'react-native-vector-icons/AntDesign';

function Transport({events,navigation}) {

  const [advanced, setAdvanced]=React.useState(false)
  const [drivingType, setDrivingType]=React.useState('highway')
  const [carType,setCarType]=React.useState('standard')
  const [carDistance, setCarDistance]=React.useState(0)
  const [numberOfPassengers, setNumberOfPassengers]=React.useState(0)
  const [carFootprint, setCarFootprint]=React.useState(0)
  const [selectedCar, setSelectedCar]=React.useState({})
  const [carSearch, setCarSearch]=React.useState(false)

  const [busDistance, setBusDistance]=React.useState(0)
  const [busDrivingType, setBusDrivingType]=React.useState('highway')
  const [busFullness, setBusFullness]=React.useState('packed')
  const [busFootprint, setBusFootprint]=React.useState(0)

  const [trainFootprint, setTrainFootprint]=React.useState(0)
  const [trainDistance, setTrainDistance]=React.useState(0)

  const [transportType, setTransportType]=React.useState('car')

  function onToggleSwitch(){
    setAdvanced(!advanced)
  }
  function addCar(){
    console.log('adding car')
    if (carFootprint>0) {
      let data ={distance:carDistance,
                 drivingType:drivingType,
                 footprint:carFootprint}
      submitCar(data)
    }
  }
  function addBus(){
    console.log('adding bus')
    if(busFootprint){
      let data ={distance:busDistance,
                 footprint:busFootprint}
      submitBus(data)
    }
  }
  function addTrain(){
    console.log('adding train')
    if (trainFootprint) {
      let data ={distance:trainDistance,
                 footprint:trainFootprint}
      submitTrain(data)
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
        backgroundColor: "#E7E2CD",
        width:'100%',
        paddingTop:'10%'
      }}>
      {carSearch?
        <>
        <View style ={styles.leftAlignedRow}>
          <Icon name="arrowleft"
                size={30}
                color="#595456"
                onPress={()=>setCarSearch(false)} />
        </View>

        </>
      :
      <>
      <View style={styles.radioGroupContainer}>
        <RadioGroup options={[{label:'Car',value:'car'},
                              {label:'Bus',value:'bus'},
                              {label:'Train',value:'train'}]}
                    title="Transport Type:"
                    logChange={(transportType)=>setTransportType(transportType)}
                    value={transportType}
                    row={true}
                    passiveColor="#91A98F"
                    activeColor="#91A98F"/>
      </View>
      {transportType==='car'?
      <View style={styles.centeredContainer}>
        <View style={styles.rightAlignedRow}>
          <Switch value={advanced}
                  onValueChange={onToggleSwitch}
                  color='#91A98F'
                  style={styles.switch} />
          <Text style={styles.roamingText}>Advanced</Text>
        </View>
        <View style={styles.radioGroupContainer}>
          <RadioGroup options={[{label:'Highway',value:'highway'},
                                {label:'City',value:'city'},
                                {label:'Mixed',value:'mixed'}]}
                      title="Driving Type:"
                      logChange={(drivingType)=>setDrivingType(drivingType)}
                      value={drivingType}
                      row={true}
                      passiveColor="#91A98F"
                      activeColor="#91A98F"/>
        </View>
        {advanced?
          <>
            <View style={styles.row}>
              <View style ={styles.textInputWrapper}>
                <TextInput
                  style ={styles.textInput}
                  label="Search Car"
                  value={selectedCar}
                  error={false}
                  onFocus={()=>setCarSearch(true)}
                  />
              </View>
            </View>
          </>
        :
        <>
        <View style={styles.radioGroupContainer}>
          <RadioGroup options={[{label:'Gas Guzzler',value:'guzzler'},
                                {label:'Standard',value:'standard'},
                                {label:'Effecient',value:'effecient'}]}
                      title="Driving Type:"
                      logChange={(carType)=>setCarType(carType)}
                      value={carType}
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
              label="Distance (KM)"
              keyboardType='numeric'
              value={carDistance}
              error={false}
              onChangeText={(e)=>{
                setCarDistance(e)
              }}/>
          </View>
        </View>
        <View style={styles.row}>
          <NumericInput value={numberOfPassengers}
                        onChange={(e) => setNumberOfPassengers(e)}
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
            <Button mode="contained"
                    onPress={() => addCar()}
                    color="#91A98F">
              Add
            </Button>
        </View>
      </View>
      :null}
    {transportType==='bus'?
      <>
      <View style={styles.radioGroupContainer}>
        <RadioGroup options={[{label:'Highway',value:'highway'},
                              {label:'City',value:'city'},
                              {label:'Mixed',value:'mixed'}]}
                    title="Driving Type:"
                    logChange={(busDrivingType)=>setBusDrivingType(busDrivingType)}
                    value={busDrivingType}
                    row={true}
                    passiveColor="#91A98F"
                    activeColor="#91A98F"/>
      </View>
      <View style={styles.radioGroupContainer}>
        <RadioGroup options={[{label:'Packed',value:'packed'},
                              {label:'Mostly Full',value:'mostlyFull'},
                              {label:'Half Full',value:'halfFull'},
                              {label:'Mostly Empty',value:'mostlyEmpty'},
                              {label:'Just Me',value:'justMe'}]}
                    title="How Full?"
                    logChange={(busFullness)=>setBusFullness(busFullness)}
                    value={busFullness}
                    row={true}
                    passiveColor="#91A98F"
                    activeColor="#91A98F"/>
      </View>
      <View style={styles.row}>
        <View style ={styles.textInputWrapper}>
          <TextInput
            style ={styles.textInput}
            label="Distance (KM)"
            keyboardType='numeric'
            value={busDistance}
            error={false}
            onChangeText={(e)=>{
              setBusDistance(e)
            }}/>
        </View>
      </View>
      <View style={styles.row}>
          <Button mode="contained"
                  onPress={() => addBus()}
                  color="#91A98F">
            Add
          </Button>
      </View>
      </>
    :null}
    {transportType==='train'?
    <View>
    </View>
    :null}
    </>
  }


    </ScrollView>
  );
}

registerRootComponent(Transport);

const mapStateToProps = (state) => {
  return{events:state.events,
         navigation:state.navigation}
};

export default connect(mapStateToProps,{addClick,submitCar,submitBus,submitTrain})(Transport);

registerRootComponent(Transport);
