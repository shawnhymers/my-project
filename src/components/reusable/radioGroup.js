import * as React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { View, Text,  Image, StyleSheet,ScrollView,Modal,Pressable } from "react-native";

function RadioGroup({title,options,passiveColor,activeColor, logChange,row,value}) {

  const [selectedIndex, setSelectedIndex]=React.useState(options.map(e => e.value).indexOf(value))

  React.useEffect(() => {
    setSelectedIndex(options.map(e => e.value).indexOf(value))
  }, [value]);

  function toggleRadio(index){
    console.log('toggling radio')
    console.log(index)
    setSelectedIndex(index)
    logChange(options[index].value)
  }

  return(
    <>
    <View style={styles.row}>
    <Text style={styles.roamingText}>{title}</Text>
    </View>
    <View style={row?styles.row:styles.col}>
    {options.map((options, i)=>{return <RadioItem displayText ={options.label}
                                                  active={i===selectedIndex? true:false}
                                                  activeColor={activeColor}
                                                  passiveColor={passiveColor}
                                                  toggleRadio={toggleRadio}
                                                  index={i}
                                                  key={options.label+i}/>})}

    </View>
    </>
  )
}

function RadioItem({displayText,active,activeColor,passiveColor,toggleRadio,index,selectedIndex}){

  return(
    <View style={styles.radioRow}>
    {active?
      <>
        <Icon name="radio-btn-active"
              size={30}
              color={activeColor}
              onPress={()=>toggleRadio(index)} />
        <Text style={styles.roamingText}>{displayText}</Text>
      </>
    :
      <>
        <Icon name="radio-btn-passive"
              size={30}
              color={passiveColor}
              onPress={()=>toggleRadio(index)}  />
        <Text style={styles.roamingText}>{displayText}</Text>
      </>
  }
  </View>
  )
}
export default RadioGroup;


const styles = StyleSheet.create({

    row: {
      flexDirection: "row",
      paddingVertical: "2%",
      minWidth:'100%',
    },
    col: {
      flexDirection: "'column'",
      paddingVertical: "2%",
      minWidth:'100%',
    },
    radioRow:{
      flexDirection: 'row',
      paddingRight:'4%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    roamingText:{
      alignSelf: 'center',
      fontFamily: "roamingFont",
      color: "#595456",
      paddingLeft: '2%',
      fontSize: 18
    },


})
