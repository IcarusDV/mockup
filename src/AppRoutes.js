import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; 
import RegisterScreen from './screens/RegisterScreen'; 
import Explore from './screens/Explore'; 
import ProgressScreen from './screens/ProgressScreen'; 
import MapScreen from './screens/MapScreen'; 
import ProfileScreen from './screens/ProfileScreen';
import ProfileEdit from './screens/ProfileEdit';
import DeleteAccount from './screens/DeleteAccount';
import FeedScreen from './screens/FeedScreen';

const Stack = createStackNavigator();

// Retornar rota Login como padrão após desenvolvimento
const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Feed">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />                
                <Stack.Screen name="Explore" component={Explore} />                
                <Stack.Screen name="Progress" component={ProgressScreen} />                
                <Stack.Screen name="Map" component={MapScreen} />                
                <Stack.Screen name="Profile" component={ProfileScreen} />                
                <Stack.Screen name="ProfileEdit" component={ProfileEdit} />                
                <Stack.Screen name="DeleteAccount" component={DeleteAccount} />                
                <Stack.Screen name="Feed" component={FeedScreen} />                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRoutes;
    