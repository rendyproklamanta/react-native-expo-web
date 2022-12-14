import React, { PureComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarcodeStack, CameraStack, DashboardStack, HomeStack, ProfileStack } from './StackNavigator'
import { DrawerActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export function BottomTabOne() {
   return (
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
         <Tab.Screen name="TabHome" component={HomeStack}
            options={{
               tabBarLabelPosition: 'below-icon',
               tabBarLabel: 'Home',
               tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
               ),
               tabBarStyle: {
                  display: 'flex'
               }
            }}
         />
         <Tab.Screen name="TabCamera"
            component={CameraStack}
            options={{
               tabBarLabelPosition: 'below-icon',
               tabBarLabel: 'Camera',
               tabBarIcon: ({ color, size }) => (
                  <Icon name="camera" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen name="TabBarcode" component={BarcodeStack}
            options={{
               tabBarLabelPosition: 'below-icon',
               tabBarLabel: 'QR Scan',
               tabBarIcon: ({ color, size }) => (
                  <AntDesign name="qrcode" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen name="TabProfile" component={ProfileStack}
            options={{
               tabBarLabelPosition: 'below-icon',
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color, size }) => (
                  <Icon name="person" color={color} size={size} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

export function BottomTabTwo() {
   return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
         <Tab.Screen name="Home" component={DashboardStack}
            options={{
               tabBarLabelPosition: 'below-icon',
               tabBarLabel: 'Home',
               tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
               ),
               tabBarStyle: {
                  display: 'flex'
               }
            }}
         />
      </Tab.Navigator>
   );
}