import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import SettingsScreen from "./screens/SettingsScreen"

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  Settings: {
    screen: SettingsScreen
  }
},
{
  initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
