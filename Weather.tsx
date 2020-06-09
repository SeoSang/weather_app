import React, { Component, FC, useState } from "react"
import { View, Text, StyleSheet, StatusBar, Button, Image } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { Condition, weatherData } from "./weatherData"
import axios from "axios"

const DOG_URL = "https://dog.ceo/api/breeds/image/random"

const Weather: FC<{ temperature: number; condition: Condition }> = ({ temperature, condition }) => {
  const [image, setImage] = useState("")

  const getDoggy = async () => {
    const { data } = await axios.get(DOG_URL)
    console.log(data)
    setImage(data.message)
    return data
  }
  const now = weatherData[condition]
  const innerStyles = StyleSheet.create({
    title: {
      fontSize: 44,
      fontWeight: "300",
      fontFamily: "hanna",
      marginBottom: 15,
      color: now.textColor,
    },
    text: {
      fontSize: now.textSize,
      fontFamily: "hanna",
      marginBottom: 15,
      color: now.textColor,
    },
    temp: {
      fontSize: 32,
      fontFamily: "hanna",
      color: now.iconColor,
    },
  })
  return (
    <LinearGradient colors={now.colors} style={styles.container}>
      <StatusBar barStyle={now.barStyle} />
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons name={now.iconName} size={96} color={now.iconColor} />
          <Text style={innerStyles.temp}>{temperature}도</Text>
        </View>
        {image == "" ? (
          <View style={styles.halfContainer}>
            <Text style={innerStyles.title}>{now.title}</Text>
            <Text style={innerStyles.text}>{now.text}</Text>
            <Button
              title='오늘의 강아지'
              onPress={() => {
                getDoggy()
              }}
            ></Button>
          </View>
        ) : (
          <View style={styles.halfContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: image,
              }}
              resizeMode='contain'
            />
            <Button
              title='돌아가기'
              onPress={() => {
                console.log(image)
                setImage("")
              }}
            ></Button>
          </View>
        )}
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  temp: {
    fontSize: 32,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  logo: {
    width: 300,
    height: 240,
  },
  button: {
    marginTop: 10,
  },
})

export default Weather
