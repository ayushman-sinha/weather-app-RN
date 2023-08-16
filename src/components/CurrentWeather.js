import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const CurrenWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container} >
        <Feather name="sun" size={69} color="black" />
        <Text style={styles.temp}>25</Text>
        <Text style={styles.feels}>Feels like : 23</Text>
        <View style={styles.lowHighWrapper}>
          <Text style={styles.actual}>Low : 5</Text>
          <Text style={styles.actual}>High : 8</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Cloudy</Text>
        <Text style={styles.message}>Humidity : 10</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  wrapper : {
    backgroundColor : 'pink',
    flex : 1
  },
  container : {
    
    alignItems : 'center',
    justifyContent : 'center',
    flex : 1

  },
  temp : {
    fontSize : 50,
    color : 'white'
  },
  feels : {
    fontSize : 20,
    color : 'white'
  },
  actual : {
    fontSize : 20,
    color : 'white' 
  },
  lowHighWrapper : {
    flexDirection : 'row'
  },
  bodyWrapper : {
    flexDirection : 'column',
    justifyContent : 'flex-end',
    alignItems : 'flex-start'

  },
  description : {
    fontSize : 20,
  },
  message : {
    fontSize : 20,
  }

});
export default CurrenWeather;