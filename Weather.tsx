import React, { Component, FC } from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { Condition, weatherData } from "./weatherData"

const Weather: FC<{ temperature: number; condition: Condition }> = ({ temperature, condition }) => {
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
        <View style={styles.halfContainer}>
          <Text style={innerStyles.title}>{now.title}</Text>
          <Text style={innerStyles.text}>{now.text}</Text>
        </View>
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
})

export default Weather
