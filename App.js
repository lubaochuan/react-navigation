import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
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
