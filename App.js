import React from 'react';
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
import { Provider as AuthProvider } from './src/context/authContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();

function listFlow() {
  return (
    <ListStack.Navigator initialRouteName='List'>
      <ListStack.Screen name='List' component={ListScreen} />
      <ListStack.Screen name='Detail' component={DetailScreen} />
    </ListStack.Navigator>
  );
}

function mainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='List' component={listFlow} />
      <Tab.Screen name='Create' component={CreateScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const isLoggedIn = false;
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Signup'>
          {!isLoggedIn ? (
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
            </>
          ) : (
            <Stack.Screen name='Main' component={mainFlow} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;

// export default () => {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// };
