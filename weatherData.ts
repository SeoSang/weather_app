interface WeatherOption {
  colors: string[]
  barStyle: "light-content" | "default" | "dark-content"
  iconName: string
  iconColor: string
  title: string
  text: string
  textColor: string
  textSize: number
}

export type Condition =
  | "Clear"
  | "Rain"
  | "Thunderstorm"
  | "Drizzle"
  | "Snow"
  | "Atmosphere"
  | "Clouds"
  | "Haze"
  | "Mist"
  | "Smoke"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Ash"
  | "Squall"
  | "Tornado"

type WeatherData = {
  [condition in Condition]: WeatherOption
}
export const weatherData: WeatherData = {
  Clear: {
    colors: ["#FF5F6D", "#FFC371"],
    barStyle: "light-content",
    iconName: "weather-sunny",
    iconColor: "yellow",
    title: "맑음",
    text: "오늘 날씨는 맑음! \n김망디 기분도 맑음!!😜",
    textColor: "black",
    textSize: 22,
  },
  Rain: {
    colors: ["#74ebd5", "#ACB6E5"],
    barStyle: "dark-content",
    iconName: "weather-rainy",
    iconColor: "black",
    title: "비",
    text: "비오니까 우산 챙겨가요 ~😘🌂",
    textColor: "#2d3436",
    textSize: 22,
  },
  Thunderstorm: {
    colors: ["#636363", "#a2ab58"],
    barStyle: "light-content",
    iconName: "weather-lightning",
    iconColor: "white",
    title: "천둥번개",
    text: "천둥치는날.... 울지마 애깅아",
    textColor: "white",
    textSize: 22,
  },
  Drizzle: {
    colors: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    barStyle: "light-content",
    iconName: "weather-rainy",
    iconColor: "white",
    title: "이슬비",
    text: "올듯말듯 이슬비 오는날~ ",
    textColor: "#2d3436",
    textSize: 25,
  },
  Snow: {
    colors: ["#E0EAFC", "#CFDEF3"],
    barStyle: "light-content",
    iconName: "snowflake",
    iconColor: "#74b9ff",
    title: "눈",
    text: "눈온다!!!!!!!!",
    textColor: "#0984e3",
    textSize: 32,
  },
  Atmosphere: {
    colors: ["#FF5F6D", "#FFC371"],
    barStyle: "light-content",
    iconName: "weather-sunny",
    iconColor: "white",
    title: "오류발생",
    text: "김단비똥",
    textColor: "white",
    textSize: 32,
  },
  Clouds: {
    colors: ["#ECE9E6", "#FFFFFF"],
    barStyle: "light-content",
    iconName: "weather-cloudy",
    iconColor: "#2d3436",
    title: "구름",
    text: "하늘에 구름이 넘쳐\n마치 민지 귓속",
    textColor: "#2d3436",
    textSize: 24,
  },
  Haze: {
    colors: ["#757F9A", "#757F9A"],
    barStyle: "light-content",
    iconName: "weather-fog",
    iconColor: "white",
    title: "안개",
    text: "안개가 많다\n앞에 잘보고 다니세요!🤷‍🤷‍♀️🤷‍♂️",
    textColor: "white",
    textSize: 22,
  },
  Mist: {
    colors: ["#757F9A", "#757F9A"],
    barStyle: "light-content",
    iconName: "weather-fog",
    iconColor: "white",
    title: "안개",
    text: "안개가 많다\n앞에 잘보고 다니세요!🤷‍🤷‍♀️🤷‍♂️",
    textColor: "white",
    textSize: 22,
  },
  Smoke: {
    colors: ["#757F9A", "#757F9A"],
    barStyle: "light-content",
    iconName: "weather-fog",
    iconColor: "white",
    title: "Smoke",
    text: "안개가 많다\n앞에 잘보고 다니세요!🤷‍🤷‍♀️🤷‍♂️",
    textColor: "white",
    textSize: 22,
  },
  Dust: {
    colors: ["#eacda3", "#d6ae7b"],
    barStyle: "dark-content",
    iconName: "weather-windy-variant",
    iconColor: "black",
    title: "먼지조심",
    text: "먼지 많은날..🤢",
    textColor: "black",
    textSize: 28,
  },
  Fog: {
    colors: ["#757F9A", "#757F9A"],
    barStyle: "light-content",
    iconName: "weather-fog",
    iconColor: "white",
    title: "Fog",
    text: "안개가 많다\n앞에 잘보고 다니세요!🤷‍🤷‍♀️🤷‍♂️",
    textColor: "white",
    textSize: 22,
  },
  Sand: {
    colors: ["#757F9A", "#757F9A"],
    barStyle: "light-content",
    iconName: "weather-fog",
    iconColor: "white",
    title: "Sand 안개",
    text: "안개가 많다\n앞에 잘보고 다니세요!🤷‍🤷‍♀️🤷‍♂️",
    textColor: "white",
    textSize: 22,
  },
  Ash: {
    colors: ["#757F9A", "#757F9A"],
    barStyle: "light-content",
    iconName: "weather-fog",
    iconColor: "white",
    title: "Ash 안개",
    text: "안개가 많다\n앞에 잘보고 다니세요!🤷‍🤷‍♀️🤷‍♂️",
    textColor: "white",
    textSize: 22,
  },
  Squall: {
    colors: ["#2BC0E4", "#EAECC6"],
    barStyle: "light-content",
    iconName: "weather-windy",
    iconColor: "white",
    title: "바람",
    text: "바람 많이부는날이야\n날라가면 안돼😎",
    textColor: "#2d3436",
    textSize: 22,
  },
  Tornado: {
    colors: ["#2c3e50", "#3498db"],
    barStyle: "light-content",
    iconName: "weather-tornado",
    iconColor: "white",
    title: "태풍",
    text: "태풍!!!!!!!!!!!",
    textColor: "white",
    textSize: 32,
  },
}
