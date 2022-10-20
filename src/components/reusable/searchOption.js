import { View, Text, Button, Image,StyleSheet,TouchableOpacity } from "react-native";

function SearchOption({displayText,index, selectOption}) {

  return(
  <TouchableOpacity style={styles.row}
                    onPress={()=>{
                      selectOption(index)
                    }}>
    <Text style ={styles.optionText}>{displayText}</Text>
  </TouchableOpacity>
)
}


export default SearchOption;


const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: "4%",
    flexWrap: "wrap",
    justifyContent: 'left',
    backgroundColor: "#ebeae6",
    borderBottomWidth: '1',
    minWidth:'100%',
    overflow: 'hidden'
  },
  optionText:{
      alignSelf: 'center',
      fontFamily: "roamingFont",
      color: "#595456",
      paddingLeft: '2%',
      fontSize: 25
  }
});
