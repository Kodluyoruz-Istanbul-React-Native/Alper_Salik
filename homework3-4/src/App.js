import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Sign from './pages/sign';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import Home from './pages/home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export default () => {
    
    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user);
        });
    }, []);

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name="SignPage" component={Sign} />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                    !userSession ? (<Stack.Screen
                        name="AuthStack"
                        component={AuthStack} />) : (
                            <Stack.Screen
                        name="Home"
                        component={Home} />
                        )
                            
                }
            </Stack.Navigator>
            
            <FlashMessage position="top" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}/>
        </NavigationContainer>
    );
}