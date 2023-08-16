import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList,ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
//Import image from src/assets
import rainy from '../assets/rain.jpg';
const DATA = [

    {
        dt_txt : '2021-01-01 12:00:00',
        main:{
            temp_max : 25,
            temp_min : 20
        },
        weather : [
            {
                main : 'Cloudy'
            }
        ]

    },
    {
        dt_txt : '2021-01-01 12:01:00',
        main:{
            temp_max : 25,
            temp_min : 20
        },
        weather : [
            {
                main : 'Sunny'
            }
        ]

    },
    {
        dt_txt : '2021-01-01 12:02:00',
        main:{
            temp_max : 25,
            temp_min : 20
        },
        weather : [
            {
                main : 'Humid'
            }
        ]

    }
]
const Item = ({item}) => {
    return (
        <View style={styles.ItemContainer}>           
            <Text style={styles.date}>{item.dt_txt}</Text>
            <Text style={styles.tempEdit}>{item.main.temp_max}</Text>
            <Text style={styles.tempEdit}>{item.main.temp_min}</Text>
            <Text style={styles.Weather}>{item.weather[0].main}</Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem = ({item}) => {
        return <Item item={item}/>
    }
   return(
        <SafeAreaView style={styles.container} >
            <ImageBackground source={rainy}  >
            <View > 
                <Text>Upcoming Weather</Text>
            </View>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.dt_txt}
                ItemSeparatorComponent={() => <View style={styles.gap}/>}
            />
            </ImageBackground>
        </SafeAreaView>
   )
}

const styles=StyleSheet.create({
    container:{                
        marginTop:StatusBar.currentHeight||0,
        flex:1,
    },   
    gap:{
        height:30,      
    },
    date:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',        
    },
    tempEdit:{
        fontSize:20,
        color:'white',
        alignSelf:'center',        
    },
    Weather:{
        fontSize:20,
        color:'white',
        alignSelf:'center',
        marginBottom:20,
    },
    ItemContainer:{        
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        padding:20,
        borderWidth:41,
        borderColor:'white ',
       
    }


});
export default UpcomingWeather;