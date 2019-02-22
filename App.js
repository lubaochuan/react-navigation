import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import SettingsScreen from "./screens/SettingsScreen"
import ModalScreen from "./screens/ModalScreen"

const MainStack = createStackNavigator({
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

const RootStack = createStackNavigator({
  Main: {
    screen: MainStack,
  },
  MyModal: {
    screen: ModalScreen,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
})

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
