/* eslint-disable react/style-prop-object */
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text className="bg-accent">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
