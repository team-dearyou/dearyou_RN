import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

type GlobalStyleProps = {
  children: React.ReactNode;
};

SplashScreen.preventAutoHideAsync();

export const GlobalStyle = ({ children }: GlobalStyleProps) => {
  const [fontsLoaded, fontError] = useFonts({
    MaruBuriBold: require('./fonts/MaruBuri-Bold.ttf'),
    MaruBuriExtraLight: require('./fonts/MaruBuri-ExtraLight.ttf'),
    MaruBuriLight: require('./fonts/MaruBuri-Light.ttf'),
    MaruBuriSemiBold: require('./fonts/MaruBuri-SemiBold.ttf'),
    MaruBuriRegular: require('./fonts/MaruBuri-Regular.ttf'),
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
