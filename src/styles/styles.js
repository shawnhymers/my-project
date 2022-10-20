import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchDropDown:{
    flexWrap: "wrap",
    width:'100%',
    paddingHorizontal: '7.5%',
    marginBottom: '4%'

  },
  rightAlignedRow:{
    flexDirection: "row",
    flexWrap: "wrap",
    minWidth:'100%',
    paddingRight: '10%',
    justifyContent: 'flex-end',
  },
  modalContainer:{
    flexWrap: "wrap",
    height:'65%',
    width:'80%',
    overflow: 'scroll',
    backgroundColor: "#FAF9F6",
    alignSelf: 'center',
    marginTop:'15%'
  },
  header:{
    height:'15%',
    alignItems: 'center',
    alignContent: 'center'
  },
  headerText:{
    alignSelf: 'center',
    alignContent: 'center'
  },
  submitButton:{
    alignSelf: 'center',
    alignContent: 'center',

  },

  container:{
    flexWrap: "wrap",
    height:'100%',
    width:'100%',
    overflow: 'scroll',
    backgroundColor: "#E7E2CD",
    justifyContent: 'center',


  },
  row: {
    flexDirection: "row",
    paddingTop: "2%",
      flexWrap: "wrap",
    minWidth:'100%',
    justifyContent: 'center',
  },
  leftAlignedRow:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width:"100%",
    paddingLeft: "5%"
  },
  col2:{
    width:"50%",
    alignItems: 'center'
  },
  col1Third:{
    width:"33%",
    alignItems: 'center'},
  col2Third:{
    width:"66%",
    alignItems: 'center'},
  col5:{
    width:"20%",
    alignItems: 'center'},

  textInputWrapper:{
    width:'100%',
    alignItems: 'center',
    height:'15%',
    paddingHorizontal: '7.5%'
  },
  textInput:{
    width:'100%',
    color: '#ebeae6',
    backgroundColor: "#ebeae6"
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
  },
  roamingText:{
    alignSelf: 'center',
    fontFamily: "roamingFont",
    color: "#595456",
    fontSize: 24
  },
  roamingTextLarge:{
    alignSelf: 'center',
    fontFamily: "roamingFont",
    color: "#595456",
    fontSize: 38
  },
  radioGroupContainer:{
    paddingHorizontal: '7.5%',
    paddingVertical: '5%'
  },
  centeredContainer:{


    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:'5%'
  },
  switch:{
    marginRight: '3%'
  }

});

export default styles;
