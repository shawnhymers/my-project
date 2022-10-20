import * as React from 'react';
import { View, Text, Image} from "react-native";
import styles from '../../styles/styles'
import { registerRootComponent } from 'expo';
import { connect } from "react-redux";
import { addClick } from "../../store/actions/creators/events";
import { useDispatch } from "react-redux";
import { Switch} from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import NumericInput from 'react-native-numeric-input'
import { Button } from 'react-native-paper';
import foodData from "../../assets/data/foodData"
import {submitFood,submitDiet} from "../../store/actions/creators/submits"

function Food({events,navigation}) {
  const dispatch = useDispatch();
  const [advanced, setFoodType]=React.useState(false)

  const [selectedDiet, setDiet]=React.useState('balanced')
  const [selectedFood, setFood]=React.useState('apple')

  const [showDietDropDown, setShowDietDropDown]=React.useState(false)
  const [showFoodDropDown, setShowFoodDropDown]=React.useState(false)

  const [foodAmount, setFoodAmount]=React.useState(0)

  const [foodFootprint, setFoodFootprint]=React.useState(0)

  // Effect listeners to update footprint number on input changes
  React.useEffect(() => {
    updateFootprint()
  }, [selectedFood, foodAmount,selectedDiet,advanced]);


  function onToggleSwitch(){
    setFoodType(!advanced)
  }

  function addFood(){
    console.log('adding food')

    if (!advanced) {
      console.log('it is a diet were adding')
      let data={
        selectedDiet:selectedDiet,
        amount:foodAmount,
        footprint:foodFootprint,
      }
      dispatch(submitDiet(data))
    }
    else {
      let data={
        selectedFood:selectedFood,
        amount:foodAmount,
        footprint:foodFootprint,
      }
      dispatch(submitFood(data))
    }

  }

  function updateDietFootprint(){
    var dietCost=0;
    if (selectedDiet==='balanced') {
      dietCost=10.2
    }
    else if (selectedDiet==='meat') {
      dietCost=15
    }
    else if (selectedDiet==='vegetarian') {
      dietCost=5.4
    }
    else if (selectedDiet==='vegan') {
      dietCost=2.1
    }
    let dietFootprint = foodAmount*dietCost;
    setFoodFootprint(dietFootprint)
  }
  function updateFoodFootprint(){
    var index = foodData.map(e => e.value).indexOf(selectedFood);
    var footprint = foodData[index].serving*foodData[index].ghg_ratio*foodAmount;
    setFoodFootprint(footprint)
  }

  function updateFootprint(){
    console.log('updating food footprint')
    if (!advanced) {
        console.log('based on diet')
        updateDietFootprint()
    }
    else {
      console.log('based of food')
      updateFoodFootprint()
    }
  }

  const dietList = [
      {
        label: "Balanced Diet",
        value: "balanced",
      },
      {
        label: "Meat Centric Diet",
        value: "meat",
        test:''
      },
      {
        label: "Vegetarian Deit",
        value: "vegetarian",
      },
      {
        label: "Vegan Deit",
        value: "vegan",
      },
    ];

  return (
    <View
      style={{
        flex: 1,
        paddingTop: '15%',
        backgroundColor: "#E7E2CD",
        width:'100%'
      }}
    >
      <View style={styles.rightAlignedRow}>

        <Switch value={advanced}
                onValueChange={onToggleSwitch}
                color='#91A98F'
                style={styles.switch} />
        <Text style={styles.roamingText}>Advanced</Text>
        </View>

        <View style={styles.centeredContainer}>
          {advanced?
              <>
                <View style={styles.row}>
                  <DropDown label={"Select Food"}
                            mode={"outlined"}
                            visible={showFoodDropDown}
                            showDropDown={() => setShowFoodDropDown(true)}
                            onDismiss={() => setShowFoodDropDown(false)}
                            value={selectedFood}
                            setValue={setFood}
                            list={foodData}/>
                </View>
              </>
            :
            <>
            <View style={styles.row}>
              <DropDown label={"Select Diet"}
                        mode={"outlined"}
                        visible={showDietDropDown}
                        showDropDown={() => setShowDietDropDown(true)}
                        onDismiss={() => setShowDietDropDown(false)}
                        value={selectedDiet}
                        setValue={setDiet}
                        list={dietList}
                        />
            </View>
            </>

          }
          <View style={styles.row}>
            <NumericInput value={foodAmount}
                          onChange={setFoodAmount}
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
            {Number.isNaN(foodFootprint)||foodFootprint<=0?
              <Text style={styles.roamingText}>Footprint: 0
              </Text>
              :
              <Text style={styles.roamingText}>Footprint: {foodFootprint.toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })} KG
              </Text>
            }
          </View>
          <View style={styles.row}>
              <Button mode="contained"
                      onPress={() => addFood()}
                      color="#91A98F">
                Add
              </Button>
          </View>
        </View>


      </View>

  );
}

registerRootComponent(Food);

const mapStateToProps = (state) => {
  return{events:state.events,
         navigation:state.navigation}
};

export default connect(mapStateToProps,{addClick, submitFood,submitDiet})(Food);
