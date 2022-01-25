import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, { useState } from 'react';



export default function App() {

  const [luku1, setLuku1] = useState(0);
  const [luku2, setLuku2] = useState(0);
  const [result, setResult] = useState(0);

  const plusPressed = () => {
    var num1 = parseInt(luku1);
    var num2 = parseInt(luku2);
    setResult(num1+num2);
  }
  const minusPressed = () => {
    var num1 = parseInt(luku1);
    var num2 = parseInt(luku2);
    setResult(num1-num2);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      
      <View>
        <TextInput style={styles.input} keyboardType = 'numeric' onChangeText={luku1 => setLuku1(luku1)} value={luku1}/>
        <TextInput style={styles.input} keyboardType = 'numeric' onChangeText={luku2 => setLuku2(luku2)} value={luku2}/>
      </View>      
      <View style={styles.buttoncontainer}>
        <Button onPress={plusPressed} title="+"/>
        <Button onPress={minusPressed} title="-"/>
      </View>

      <StatusBar style="auto" />
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    flexDirection: 'row',
  },
  input: {
    width:200,
    borderColor: 'gray',
    borderWidth: 1
  },
});
