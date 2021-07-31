
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './pages/homePage/Home';
import Discover from './pages/discoverPage/Discover';
import Reels from './pages/reelsPage/Reels';
import Store from './pages/storePage/Store';
import Profile from './pages/storePage/Store';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={32} />
          ),
        }}/>
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}




export default App;