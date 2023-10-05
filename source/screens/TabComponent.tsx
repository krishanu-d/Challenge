import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BadgeComponent from './BadgeComponent';

function Games() {
  return (
    <View style={{  alignItems: 'center', paddingTop:20 }}>
      <Text>No Content</Text>
    </View>
  );
}

function Badges() {
  return (
    // <ScrollView>
    <View style={{padding:16, paddingTop:20}}>
      <BadgeComponent />
    </View>
    // </ScrollView>
    // <Text>hfjfgd</Text>
  );
}
const Tab = createMaterialTopTabNavigator();
const screenHeight = Dimensions.get('screen').height


export default function TabComponent(): JSX.Element {
  return (
    //    <NavigationContainer>
    <Tab.Navigator style={{height:screenHeight}} screenOptions={{

      tabBarIndicatorStyle:{backgroundColor:'#6231AD'},
      tabBarLabel(props) {
        console.log(props)
        return <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:14, color: props.focused ? '#6231ad': '#727682' }}>{props.children}</Text>;
      },
    }}  >
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Badges" component={Badges}  />
    </Tab.Navigator>
    //    </NavigationContainer>
  );
}
