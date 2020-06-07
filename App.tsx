import React, { useEffect, useState } from "react"
import { useFonts } from "@use-expo/font"
import Loading from "./Loading"
import * as Location from "expo-location"
import { Alert, View, Text } from "react-native"
import axios from "axios"
import Weather from "./Weather"
import { Condition } from "./weatherData"
import { AppLoading } from "expo"

const API_KEY = "56fa3f9e701c040000d78cb9e1e43d39"
const WEATHER_URL = (latitude: number, longitude: number): string => {
  return `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
}

const getWeather = async (latitude: number, longitude: number) => {
  const { data } = await axios.get(WEATHER_URL(latitude, longitude))
  console.log(data)
  return data
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "hanna": require("./assets/fonts/hanna.ttf"),
  })
  const [isLoading, setIsLoading] = useState(true)
  const [temperature, setTemperature] = useState(0)
  const [condition, setCondition] = useState<Condition>("Clear")

  //위치 받아오기
  const getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync()
      console.log(response)
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      const data = await getWeather(latitude, longitude)
      console.log(data.main.temp)
      setTemperature(data.main.temp) // 가져온 data 속 temperature 추출
      setCondition(data.weather[0].main)
      setIsLoading(false) // 로딩 끝
    } catch (e) {
      Alert.alert("위치를 찾을 수 없습니다.")
      console.error(e)
    }
  }

  useEffect(() => {
    getLocation()
    return () => {}
  }, [isLoading, temperature])

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temperature={Math.round(temperature)} condition={condition} />
    )
  }
}
