import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './Components/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'native-base';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerLeft: () => (
              <Icon name="ios-camera" style={{paddingLeft: 15}}></Icon>
            ),
            title: 'Instagram',
            headerTitleStyle: {fontStyle: 'italic', fontSize: 25},
            headerTitleAlign: 'center',
            headerRight: () => (
              <Icon name="ios-send" style={{paddingRight: 15}}></Icon>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
