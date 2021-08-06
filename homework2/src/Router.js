
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
//import { AntDesign } from '@expo/vector-icons';
import Home from './pages/homePage/Home';
import Discover from './pages/discoverPage/Discover';
import Reels from './pages/reelsPage/Reels';
import Store from './pages/storePage/Store';
import Profile from './pages/storePage/Store';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer style={{padding:10}}>
      <Tab.Navigator style={{padding:10}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={"black"} size={32} />
          ),
        }}/>
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={"black"} size={32} />
          ),
        }}
        />
        <Tab.Screen
          name="Reels"
          component={Reels}
          options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="play-video" color={"black"} size={32} />
          ),
          }}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={"black"} size={32} />
          ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" color={"black"} size={32} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}




export default App;