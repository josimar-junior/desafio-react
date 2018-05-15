import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
const Header = (props) => {
	const {textStyle, textStylee, viewStyle} = styles;
	return(
		<View style={viewStyle}>
		<Text style={textStylee}></Text>
		<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	textStyle:{
		fontSize:20
	},
	textStylee:{
		fontSize:20,
		textAlign:'left'
	},
	viewStyle:{
		backgroundColor: '#dfdfdf',
		height:50,
		justifyContent:'center',
		alignItems:'center',
		marginTop:20,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation:200
	}
};
export default Header;