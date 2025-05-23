import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen } from './screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GlobalStyle } from './design-token/GlobalStyle';

export type RootStackParamList = {
  login: undefined;
  signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalStyle>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          >
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{ title: 'Login' }}
            />
            <Stack.Screen
              name="signup"
              component={SignUpScreen}
              options={{ title: 'Sign Up' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalStyle>
    </GestureHandlerRootView>
  );
}
