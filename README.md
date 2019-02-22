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
yarn add @expo/vector-icons --save
```

# Step 1
Create a HomeScreen and use a stack navigator to route to it.

See this [diff](https://github.com/lubaochuan/react-navigation/commit/5c11c9aca0bb340f4c3831ff5c5dbd3788f8974a) for the solution.

# Step 2
Create a DetailsScreen and navigate to it from the HomeScreen.

see this [diff](https://github.com/lubaochuan/react-navigation/commit/4c7b36f020345283605d3dd3d6316ea863b1a7be) for the solution.

# Step 3
Pass data to DetailsScreen via navigation parameters.

see this [diff](https://github.com/lubaochuan/react-navigation/commit/17989bc3cda12a4f37670cbe1ea469b33af1797b) for the solution.

# Step 4
Set and update screen titles.

see this [diff](https://github.com/lubaochuan/react-navigation/commit/4f68a6053d5d7c1f01e94867b1a0908327e12133) for the solution.

# Step 5
Add header buttons. We will add a header button to the HomeScreen and
link it to the SettingsScreen. Please make sure you have run the following in your project
directory:
```
yarn add @expo/vector-icons --save
```

see this [diff](https://github.com/lubaochuan/react-navigation/commit/e475fa80ec79631ba9090f56e913d1ebdfb6309b) for the solution.

Note that this example demonstrates a pattern for giving a header button
access to a function on the component instance using `params`. If you simply
want to route to another screen the following will suffice:
```
<Button dark transparent
  onPress={navigation.navigate('Settings')}>
  <Icon name='cog' />
</Button>
```

# Step 6
Create a full-screen modal using nested navigators.

Note that we have to provide the header, as needed, for the modal screen because the `HeaderMode` is set `none` so that we don't show the back button from the navigator. The modal can be dismissed by swiping its header downward.

see this [diff](https://github.com/lubaochuan/react-navigation/commit/6ee736b24385f99cbdb40afe2d996a6923280944) for the solution.
