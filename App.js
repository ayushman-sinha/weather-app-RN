import React from 'react';
import { StyleSheet, Text, View,SafeAreaView ,StatusBar} from 'react-native';
import CurrenWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>      
      <UpcomingWeather/>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:StatusBar.currentHeight||0,
  }

});
export default App;