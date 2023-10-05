import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './router';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import {Images} from '../Asset/asset';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator(): JSX.Element {
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Screen2"
        backBehavior="order"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#fff', height: 75},
          tabBarActiveTintColor: '#6231ad',
          tabBarInactiveTintColor: '#b5c0c8',
          tabBarLabelStyle: {fontSize: 10, bottom: 18, fontFamily: 'Montserrat-Medium'},
          tabBarIconStyle: {bottom:5}
        }}>
        <Tab.Screen
          name="Screen2"
          component={Routes.Screen2.Screen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({focused, color}) => <FastImage source={Images.home} resizeMode="contain" style={styles.icons} tintColor={color} />,
          }}
        />

        <Tab.Screen
          name="Leagues"
          component={Routes.Leagues.Screen}
          options={{
            tabBarLabel: 'Leagues',
            headerShown: false,
            tabBarIcon: ({focused, color}) => <FastImage source={Images.trophy} resizeMode="contain" style={styles.icons} tintColor={color} />,
          }}
        />

        <Tab.Screen
          name="Research"
          component={Routes.Research.Screen}
          options={{
            tabBarLabel: 'Research',
            headerShown: false,
            tabBarIcon: ({focused, color}) => <FastImage source={Images.search} resizeMode="contain" style={styles.icons} tintColor={color} />,
          }}
        />

        <Tab.Screen
          name="Leaderboard"
          component={Routes.Leaderboard.Screen}
          options={{
            tabBarLabel: 'Leaderboard',
            headerShown: false,
            tabBarIcon: ({focused, color}) => <FastImage source={Images.leaderboard} resizeMode="contain" style={styles.icons} tintColor={color} />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Routes.Profile.Screen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused, color}) => <FastImage source={Images.profile} resizeMode="contain" style={styles.icons} tintColor={color} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator initialRouteName={Routes.Screen1.name} screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen1" component={Routes.Screen1.Screen} />
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 24,
    height: 24,
  },
});
