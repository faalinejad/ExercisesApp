import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { FontAwesome } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {
        completed,
        setCompleted,
      } = useContext(FitnessItems);
    
  return (
    <>
    <ScrollView style={{backgroundColor: "white", marginTop: 50}}>
      <Image style={{width: "100%", height: 170, }} source={{uri: route.params.image}}/>
      <Ionicons 
      onPress={() => navigation.goBack()}
      style={{position: "absolute", top: 40, left: 10}} 
      name="arrow-back-circle-sharp" size={30} color="white" />

      {route.params.excersises.map((item , index) => (
        <Pressable style={{margin: 10, flexDirection: "row", alignItems: "center"}} key={index}>
            <Image style={{width: 90, height: 90}} source={{uri:item.image}}/>
            <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 17, fontWeight: "bold", width: 170}}>{item.name}</Text>
                <Text style={{fontSize: 17, color: "gray", marginTop: 5}}>X{item.sets}</Text>
            </View>

            {completed.includes(item.name) ? (
                <FontAwesome style={{marginLeft: 40}} name="check-circle" size={24} color="green" />
            ) : (
                null
            )}

        </Pressable>
      ))}
    </ScrollView>
    <Pressable
    onPress={() => { navigation.navigate("Fit", {
        excersises: route.params.excersises,
    })
    setCompleted([]);
}}
     style={{backgroundColor: "blue", padding: 10, marginRight: "auto", marginLeft: "auto", borderRadius: 6, marginVertical: 20, width: 120}}>
        <Text style={{color: "white", fontWeight:"bold", textAlign: "center"}}>START</Text>
    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})