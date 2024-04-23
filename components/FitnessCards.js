import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCart = () => {
    const navigation = useNavigation();
    const FitnessData = fitness;
  return (
    <View>
        {FitnessData.map((item, key) => (
            <Pressable onPress={() => navigation.navigate("Workout", {
                image: item.image,
                excersises: item.excersises,
                id: item.id
            })} 
            style={{justifyContent: "center", alignItems: "center", margin: 10}} key={key}>
                <Image style={{width: "90%", height: 140, borderRadius: 10}} source={{ uri: item.image }}/>
                <Text style={{position: "absolute", color: "white", top: 20, left: 20, fontWeight: "bold", fontSize: 16}}> {item.name}</Text>
                <MaterialCommunityIcons style={{position: "absolute", color: "white", top: 80, left: 20}} name="lightning-bolt" size={30} color="black" />
            </Pressable>
        ))}
    </View>
  )
}

export default FitnessCart

const styles = StyleSheet.create({})