import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import CreateScreen from './src/screens/CreateScreen';
import DetailScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Context as AuthContext } from './src/context/AuthContext';
import { navigationRef } from './src/RootNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();

function listFlow() {
  return (
    <ListStack.Navigator initialRouteName='List'>
      <ListStack.Screen
        name='List'
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <ListStack.Screen name='Detail' component={DetailScreen} />
    </ListStack.Navigator>
  );
}

function mainFlow() {
  return (
    <Tab.Navigator initialRouteName='List'>
      <Tab.Screen name='List' component={listFlow} />
      <Tab.Screen name='Create' component={CreateScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Resolve'>
        {!state.token ? (
          <>
            <Stack.Screen
              name='Signin'
              component={SigninScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Signup'
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Resolve'
              component={ResolveAuthScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name='Main'
            component={mainFlow}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
