import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import { useTheme } from './ThemeContext';

export default function MachineDetectInstruction() {
  const { theme } = useTheme();

  return (
    <View >
        <Card title="Beginner Level" containerStyle={[styles.instructionCardContainer,{
          backgroundColor: theme.backgroundColor
        }]}>
          <Text style={{fontSize: 13,fontWeight:'500'}}>Step 1: Select image from media by clicking 
          <TouchableOpacity  style={[styles.buttonStyle,{
          backgroundColor: theme.backgroundColor
        }]}>
           <Text style={[styles.buttonTitleStyle,{
            color: theme.textColor
           }]}> PICK AN IMAGE </Text>
        </TouchableOpacity> </Text>
          <Text style={{fontSize: 13,fontWeight:'500'}}>Step 2: Upload image to server by clicking 
          <TouchableOpacity  style={[styles.buttonStyle,{
          backgroundColor: theme.backgroundColor
        }]}>
           <Text style={[styles.buttonTitleStyle,{
            color: theme.textColor
           }]}> DETECT MACHINE </Text>
        </TouchableOpacity></Text>
          <Text style={{fontSize: 13,fontWeight:'500'}}>Step 3: Follow the instruction provided on machine</Text>
  
        </Card>
    </View>
  )
}


const styles = StyleSheet.create({
    buttonStyle: {
    paddingVertical: 10,
    backgroundColor: 'purple',
    borderRadius: 7.5,
    borderBottomColor: 'black',
    borderColor: 'grey',
    borderBottomWidth: 3,
    elevation: 11,
    
   
    },
    buttonTitleStyle: {
      color: 'white',
      fontWeight: '600',
      
    },
    instructionCardContainer: {
      width: '100%',
      margin: 5,
      marginTop: 30,
      backgroundColor: 'lightgray',
      borderRadius: 20,
      borderColor: 'grey',
      borderBottomWidth: 4,
      elevation: 10,
    },

  });