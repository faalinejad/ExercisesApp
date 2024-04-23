import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timerLeft, setTimeLeft] = useState(3);

    const startTime = () => {
        setTimeout(() => {
            if(timerLeft <= 0) {
                navigation.goBack();
                clearTimeout(timer)
            }
            setTimeLeft(timerLeft-1)
        }, 1000)
    }
    useEffect(() => {
        startTime();
        // clean up
        return () => clearTimeout(timer);

    })
  return (
    <SafeAreaView style={{marginTop: 50}}>
      <Image 
      style={{width: "100%", height: 420}} 
      source={{uri: "https://images.template.net/218286/free-heart-rate-clipart-edit-online.jpg"}}/>
      <Text style={{fontSize: 30, fontWeight: "900", textAlign: "center", marginTop: 50}}>TAKE A BREAK!</Text>
      <Text style={{fontSize: 30, fontWeight: "900", textAlign: "center", marginTop: 50}}>{timerLeft}</Text>
    </SafeAreaView>
  )
}

export default RestScreen

const styles = StyleSheet.create({})