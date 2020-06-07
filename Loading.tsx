import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const Loading = () => {
  return (
    <LinearGradient colors={["#2980B9", "#6DD5FA", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}> 로딩중 </Text>
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
  text: {
    color: "white",
    fontSize: 50,
    fontFamily: "hanna",
  },
})

export default Loading
