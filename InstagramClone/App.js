import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './Components/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddMediaTab from './Components/Navigation/VideoTab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Instagram',
            headerTitleStyle: {fontStyle: 'italic', fontSize: 25},
            headerTitleAlign: 'left',
            headerRight: () => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <MaterialIcons
                  name="add-circle-outline"
                  size={29}
                  style={{paddingHorizontal: 8}}
                />
                <Icon
                  name="heart-outline"
                  style={{paddingHorizontal: 8}}></Icon>
                <Icon name="ios-send" style={{paddingHorizontal: 8}}></Icon>
              </View>
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
