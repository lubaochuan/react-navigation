Example app from https://reactnavigation.org/docs/en/getting-started.html

# Installation
1. Create react-native app with expo:
```
expo init react-navigation --template blank@sdk-32 --yarn
```
1. Installing libraries
```
cd react-navigation
yarn add react-navigation --save
yarn add native-base --save
```

# Step 1
Create a HomeScreen and use a stack navigator to route to it.

See this [diff](https://github.com/lubaochuan/react-navigation/commit/5c11c9aca0bb340f4c3831ff5c5dbd3788f8974a) for the solution.

# Step 2
Create a DetailsScreen and navigate to it from the HomeScreen.

see this [diff](https://github.com/lubaochuan/react-navigation/commit/4c7b36f020345283605d3dd3d6316ea863b1a7be) for the solution.
