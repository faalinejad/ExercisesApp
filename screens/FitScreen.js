import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from "../Context";

const FitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersises = route.params.excersises;
    const current = excersises[index];
    console.log("First", current)
    const {
        completed,
        setCompleted,
        minutes,
        setMinutes,
        calories,
        setCalories,
        setWorkout,
        workout,
      } = useContext(FitnessItems);
      console.log(completed, "completed excersise");
    return (
        <SafeAreaView style={{ marginTop: 50 }}>
            <Image style={{ width: "100%", height: 370 }} source={{ uri: current.image }} />
            <Text style={{ fontSize: 22, fontWeight: "bold", marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>{current.name}</Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>X{current.sets}</Text>
            {index + 1 >= excersises.length ? (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Home")
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                    style={{ backgroundColor: "blue", width: 200, marginLeft: "auto", marginRight: "auto", padding: 10, borderRadius: 30, marginTop: 30 }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>DONE</Text>
                </Pressable>
            ) : (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Rest")
                        setCompleted([...completed, current.name])
                        setWorkout(workout + 1)
                        setMinutes(minutes + 2.5)
                        setCalories(calories + 6.3)
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                    style={{ backgroundColor: "blue", width: 200, marginLeft: "auto", marginRight: "auto", padding: 10, borderRadius: 30, marginTop: 30 }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>DONE</Text>
                </Pressable>
            )}


            <Pressable style={{ flexDirection: "row", alignItems: "center", marginTop: 50, marginRight: "auto", marginLeft: "auto" }}>
                <Pressable
                disabled = {index === 0}
                 onPress={() => {
                        navigation.navigate("Rest")
                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000)
                    }} style={{ backgroundColor: "green", width: 100, padding: 10, borderRadius: 20, marginHorizontal: 20 }}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>PREV</Text>
                </Pressable>
                {index + 1 >= excersises.length ? (
                    <Pressable onPress={() => {
                        navigation.navigate("Home")
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                        style={{ backgroundColor: "green", width: 100, padding: 10, borderRadius: 20, marginHorizontal: 20 }}>
                        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>SKIP</Text>
                    </Pressable>
                ) : (
                    <Pressable onPress={() => {
                        navigation.navigate("Rest")
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                        style={{ backgroundColor: "green", width: 100, padding: 10, borderRadius: 20, marginHorizontal: 20 }}>
                        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>SKIP</Text>
                    </Pressable>
                )}

            </Pressable>

        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})