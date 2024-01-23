import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppStack } from './stackNavigation';

const Tab = createBottomTabNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 0,
      background: '#fff',
      height: 60,
    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#B8C2CC',
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    tabBarIconStyle: {
      marginBottom: 5,
    },
  };
};

export const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="TabHome"
        component={AppStack}
        initialParams={{ navigation }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons
                  name="home"
                  size={24}
                  color={focused ? '#16247d' : '#111'}
                />
                <Text style={{ fontSize: 12, color: '#16247d' }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TabExercises"
        component={AppStack}
        initialParams={{ navigation }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome6
                  name="dumbbell"
                  size={24}
                  color={focused ? '#16247d' : '#111'}
                />
                <Text style={{ fontSize: 12, color: '#16247d' }}>
                  Exercises
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TabExerciseDetails"
        component={AppStack}
        initialParams={{ navigation }}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#16247d',
                  width: Platform.OS == 'ios' ? 50 : 60,
                  height: Platform.OS == 'ios' ? 50 : 60,
                  top: Platform.OS == 'ios' ? -10 : -20,
                  borderRadius: Platform.OS == 'ios' ? 25 : 30,
                }}>
                <Octicons name="device-camera" size={24} color="#fff" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={AppStack}
        initialParams={{ navigation }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome6
                  name="user"
                  size={24}
                  color={focused ? '#16247d' : '#111'}
                />
                <Text style={{ fontSize: 12, color: '#16247d' }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};