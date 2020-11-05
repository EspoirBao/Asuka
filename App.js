// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen'
import { get } from './utils/http'
import HomeStackScreen from './pages/Stack/HomeStack'
import Detail from './pages/Detail'


function getdata() {
  get('http://192.168.31.65:8899/api/img')
    .then((response) => {
      // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
      console.log(response)
      // this.setState({ data: response.base_url });
    })
    .catch((error) => {
      console.log(error)
    });
}
const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    console.log("componentDidMount");
    SplashScreen.hide();
    getdata()
    //
    return function cleanup() { console.log("组件被卸载componentWillUnmount") };
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
