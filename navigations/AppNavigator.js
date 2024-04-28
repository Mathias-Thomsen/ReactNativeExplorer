import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AccelerometerScreen from '../screens/sensorScreens/AccelerometerScreen';
import BarometerScreen from '../screens/sensorScreens/BarometerScreen';
import DeviceMotionScreen from '../screens/sensorScreens/DeviceMotionScreen';
import GyroscopeScreen from '../screens/sensorScreens/GyroscopeScreen';
import LightSensorScreen from '../screens/sensorScreens/LightSensorScreen';
import MagnetometerScreen from '../screens/sensorScreens/MagnetometerScreen';
import PedometerScreen from '../screens/sensorScreens/PedometerScreen';
import SpeedometerScreen from '../screens/sensorScreens/SpeedometerScreen';


const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
      <Stack.Screen name="Barometer" component={BarometerScreen} />
      <Stack.Screen name="DeviceMotion" component={DeviceMotionScreen} />
      <Stack.Screen name="Gyroscope" component={GyroscopeScreen} />
      <Stack.Screen name="LightSensor" component={LightSensorScreen} />
      <Stack.Screen name="Magnetometer" component={MagnetometerScreen} />
      <Stack.Screen name="Pedometer" component={PedometerScreen} />
      <Stack.Screen name="Speedometer" component={SpeedometerScreen} />

      
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
